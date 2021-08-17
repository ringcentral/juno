export const DEFAULT_SIZE = {
  width: 0,
  height: 0,
};

export const computeChildBySize = (
  labelArray: { key: string; size: number }[],
  fixLabel: string | undefined,
  limitSize: number,
) => {
  let plainArr: string[] = [];
  let groupArr: string[] = [];

  let sumSize = 0;
  let groupFlag = false;
  labelArray.forEach((_label) => {
    const { key: label, size } = _label;
    if (groupFlag === false && sumSize + size < limitSize) {
      sumSize += size;
      plainArr.push(label);
    } else {
      groupFlag = true;
      groupArr.push(label);
    }
  });

  if (fixLabel && groupArr.includes(fixLabel)) {
    plainArr = [];
    groupArr = [];

    let fixLabelSize = 0;
    labelArray.forEach((_label) => {
      const { key: label, size } = _label;
      if (label === fixLabel) {
        fixLabelSize = size;
      }
    });

    let sumFixSize = 0;
    let groupFlag = false;

    labelArray.forEach((_label) => {
      const { key: label, size } = _label;
      if (label === fixLabel) {
        return;
      }

      if (groupFlag === false && sumFixSize + size < limitSize - fixLabelSize) {
        sumFixSize += size;
        plainArr.push(label);
      } else {
        groupFlag = true;
        groupArr.push(label);
      }
    });

    plainArr.push(fixLabel);
  }

  return {
    plainArr,
    groupArr,
  };
};

export const getDomBoundingClientSize = (dom: HTMLElement | null) => {
  if (!dom || dom.nodeType !== 1) {
    return DEFAULT_SIZE;
  }

  const { width, height } = dom.getBoundingClientRect();

  return {
    width,
    height,
  };
};

/**
 *
 * @param keyProp React.key
 * @param idx string
 * @example
 * getKey('tab_0', 0) => childIdx_0_propKey_tab_0
 * getKey(undefined, 1) => childIdx_1
 */
export const getKey = (keyProp?: React.Key, idx?: number) => {
  return `childIdx_${idx}${keyProp ? `_propKey_${keyProp}` : ''}`;
};

export type GroupTabInfoType = {
  index?: string;
  key?: string;
};

/**
 *
 * @example
 * parseKey(childIdx_1) => { index: 1 }
 * parseKey(childIdx_1_propKey_tab_1) => { index: 1, key: tab_1 }
 */
export const parseKey: (key: string) => GroupTabInfoType = (key: string) => {
  const match = /^(?:childIdx_)(\d+)(?:_propKey_)?(.*)/gi.exec(key);
  return {
    index: match?.[1],
    key: match?.[2].replace(/^\.\$/i, ''),
  };
};

export type RcTabsMoreMenuGroupInfoType = GroupTabInfoType[][];
