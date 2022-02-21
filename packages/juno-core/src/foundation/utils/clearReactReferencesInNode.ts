import { logInDev } from './withDeprecatedCheck';

// fix react input memory leak
function clearReactReferences(node: ChildNode) {
  for (const key in node) {
    if (key.includes('__react')) {
      delete node[key];
    }
  }
}

function clearReactReferencesInner(node: ChildNode) {
  node.childNodes.forEach((node) => {
    clearReactReferences(node);
    if (node.childNodes.length) {
      clearReactReferencesInner(node);
    }
  });
}

function clearReactReferencesInNode(node: ChildNode) {
  try {
    const parentElement = node.parentElement;

    if (parentElement) {
      clearReactReferencesInner(parentElement);
      clearReactReferences(parentElement);
      if (typeof parentElement.remove === 'function') {
        parentElement.remove();
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      logInDev(
        {
          component: 'clearReactReferencesInNode',
          message: `trigger clearReactReferencesInNode fail`,
        },
        () => {
          // eslint-disable-next-line no-console
          console.log(error);
        },
      );
    }
  }
}

export { clearReactReferencesInNode };
