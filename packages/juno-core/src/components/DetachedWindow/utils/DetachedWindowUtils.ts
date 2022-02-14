export const MUI_INSERTION_POINT = 'mui-insertion-point';

export function addCommentInHeader(newWindow: Window) {
  const fragment = document.createDocumentFragment();
  const comment = newWindow.document.createComment(MUI_INSERTION_POINT);
  fragment.appendChild(comment);
  newWindow.document.head.appendChild(fragment);
}
