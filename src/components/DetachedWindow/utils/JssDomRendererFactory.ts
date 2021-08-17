import jssPreset from '@material-ui/styles/jssPreset';
import {
  create as createJss,
  Jss,
  JssOptions,
  Renderer,
  SheetsRegistry,
  StyleSheet as IStyleSheet,
} from 'jss';

const jssInst: Jss | null = createJss(jssPreset());
const JssDomRendererConstructor = (jssInst as any).options.Renderer as new (
  sheet?: StyleSheet,
) => Renderer;

type StyleSheet = IStyleSheet & {
  renderer?: Renderer & { element: Element };
};

/**
 * below code copied DomRender utils from github jss repo with some modifications
 * @see https://github.com/cssinjs/jss/blob/cc3cea8b6d6b32b7706d62c00b46a600ec6ebe67/packages/jss/src/DomRenderer.js
 */

type PriorityOptions = Pick<StyleSheet['options'], 'index' | 'insertionPoint'>;

function warning(message: string) {
  if (process.env.NODE_ENV !== 'production') {
    throw new Error(message);
  }
}

export default function JssDomRendererFactory(
  window: Window,
  sheets: SheetsRegistry,
) {
  const { document } = window;
  const getHead = () => document.head;
  const findHigherSheet = (
    registry: StyleSheet[],
    options: PriorityOptions,
  ) => {
    for (let i = 0; i < registry.length; i++) {
      const sheet = registry[i];
      if (
        sheet.attached &&
        sheet.options.index > options.index &&
        sheet.options.insertionPoint === options.insertionPoint
      ) {
        return sheet;
      }
    }
    return null;
  };

  const findHighestSheet = (
    registry: StyleSheet[],
    options: PriorityOptions,
  ) => {
    for (let i = registry.length - 1; i >= 0; i--) {
      const sheet = registry[i];
      if (
        sheet.attached &&
        sheet.options.insertionPoint === options.insertionPoint
      ) {
        return sheet;
      }
    }
    return null;
  };

  const findPrevNode = (options: PriorityOptions) => {
    // @ts-ignore
    const { registry } = sheets;

    if (registry.length > 0) {
      // Try to insert before the next higher sheet.
      let sheet = findHigherSheet(registry, options);
      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element,
        };
      }

      // Otherwise insert after the last attached.
      sheet = findHighestSheet(registry, options);
      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element.nextSibling,
        };
      }
    }

    // Try to find a comment placeholder if registry is empty.
    const { insertionPoint } = options;
    if (insertionPoint && typeof insertionPoint === 'string') {
      const comment = findCommentNode(insertionPoint);
      if (comment) {
        return {
          parent: comment.parentNode,
          node: comment.nextSibling,
        };
      }

      // If user specifies an insertion point and it can't be found in the document -
      // bad specificity issues may appear.
      warning(`[JSS] Insertion point "${insertionPoint}" not found.`);
    }

    return false;
  };

  /**
   * Find a comment with "jss" inside.
   */
  function findCommentNode(text: string): Node | null {
    const head = getHead();
    for (let i = 0; i < head.childNodes.length; i++) {
      const node = head.childNodes[i];
      if (node.nodeType === 8 && node.nodeValue?.trim() === text) {
        return node;
      }
    }
    return null;
  }

  const insertStyle = (style: HTMLElement, options: PriorityOptions) => {
    const { insertionPoint } = options;
    const nextNode = findPrevNode(options);

    if (nextNode !== false && nextNode.parent) {
      nextNode.parent.insertBefore(style, nextNode.node);

      return;
    }

    // Works with iframes and any node types.
    if (
      typeof insertionPoint !== 'string' &&
      insertionPoint &&
      typeof insertionPoint.nodeType === 'number'
    ) {
      const insertionPointElement = insertionPoint;
      const { parentNode } = insertionPointElement;
      if (parentNode)
        parentNode.insertBefore(style, insertionPointElement.nextSibling);
      else warning('[JSS] Insertion point is not in the DOM.');
      return;
    }

    getHead().appendChild(style);
  };

  const createStyle = () => {
    const el = document.createElement('style');
    el.textContent = '\n';
    return el;
  };

  const getNonce = () => {
    const node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute('content') : null;
  };

  return class ExternalJssDomRenderer extends JssDomRendererConstructor {
    element: HTMLElement;

    sheet?: StyleSheet;

    constructor(sheet?: StyleSheet) {
      super();

      // We don't want sheet added to another sheet registry in super class
      // this may cause memory leak
      // and then, we need do same work as super class constructor
      this.sheet = sheet;
      if (sheet) {
        sheets.add(sheet);
      }
      this.element = sheet?.options.element || createStyle();
      this.element.setAttribute('data-jss', '');
      if (sheet?.options.media) {
        this.element.setAttribute('media', sheet.options.media);
      }
      if (sheet?.options.meta) {
        this.element.setAttribute('data-meta', sheet.options.meta);
      }

      const nonce = getNonce();
      if (nonce) this.element.setAttribute('nonce', nonce);
    }

    attach() {
      if (this.element.parentNode || !this.sheet) return;
      insertStyle(this.element, this.sheet.options);
    }
  };
}

export function buildJssFromWindow(
  targetWindow: Window,
  /**
   * custom jss option
   */
  options?: Partial<JssOptions>,
) {
  // jss use global sheetsRegistry internally, but in our usecase, we need stand alone sheetsRegistry
  // we change jss behavior by patch-pacakge jss, will try to submit pr to jss repo later
  const sheetsRegistry = new SheetsRegistry();
  return createJss({
    ...jssPreset(),
    ...options,
    // @ts-ignore
    sheetsRegistry,
    Renderer: JssDomRendererFactory(targetWindow, sheetsRegistry),
  });
}
