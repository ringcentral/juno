const excludeDomSnapshot = {
  kind: [
    /**
     * TypeError: Cannot read property '_ownerDocument' of undefined
     */
    '🖤 Deprecated Components/Tabs',
    /** Popper related */
    '🖤 deprecated Components/Dialog/Confirm',
    /** findDomNode, ResizeDetector */
    'Components/ZoomArea',
    '🖤 deprecated Components/Dialog/DialogHeader',
    /** findDomNode, react-sortable-hoc */
    'Components/VirtualizedList/SortableList',
    '🖤 deprecated Components/VirtualizedList/SortableList',
  ],
  name: [
    /**
     * not component
     */
    'Icon List',
  ],
};

export { excludeDomSnapshot };
