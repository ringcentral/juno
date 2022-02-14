import ReactDOM from 'react-dom';

import { addSerializer } from 'jest-specific-snapshot';
import { styleSheetSerializer } from 'jest-styled-components';
import renderer from 'react-test-renderer';

import initStoryshots, {
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots';

import { excludeDomSnapshot } from './snapshotConfig';
import { isExcluded } from './utils';

// * for storybook know that is TEST env, not render some elements
(global as any).TEST_ENV = true;

jest.mock('lodash/uniqueId', () => ({
  __esModule: true, // this property makes it work
  default: (value: string) => `${value}0`,
}));

// Mock Math.random
Math.random = jest.fn(() => 0.1);

function mockDate() {
  const _Date = Date;
  const DATE_TO_USE = new Date('2019-04-07T10:20:30Z');
  // @ts-ignore
  global.Date = jest.fn(() => DATE_TO_USE);
  global.Date.UTC = _Date.UTC;
  global.Date.parse = _Date.parse;
  global.Date.now = _Date.now;
}

(ReactDOM as any).createPortal = jest.fn((element, node) => {
  return element;
});

(global as any).MutationObserver = class {
  constructor(callback: any) {}

  disconnect() {}

  observe(element: any, initObject: any) {}
};

mockDate();

/** above is mock block */

addSerializer(styleSheetSerializer);

const tested = new Set();

function createNodeMock(element: any) {
  return document.createElement(element.type);
}

function isTested(story: any) {
  const hash = `${story.kind} ${story.name}`;
  if (tested.has(hash)) {
    return true;
  }
  tested.add(hash);
  return false;
}

initStoryshots({
  test: ({ story, context }) => {
    if (isExcluded(story.kind, story.name, excludeDomSnapshot)) {
      return;
    }
    if (isTested(story)) {
      return;
    }

    const converter = new Stories2SnapsConverter({
      snapshotExtension: '.tsx.snap',
    });
    const snapshotFilename = converter.getSnapshotFileName(context);

    const storyElement = story.render();
    const wrapper = renderer.create(storyElement, {
      createNodeMock,
    });
    expect(wrapper.toJSON()).toMatchSpecificSnapshot(snapshotFilename);
  },
});
