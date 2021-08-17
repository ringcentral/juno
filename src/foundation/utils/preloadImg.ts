/** preload image file */
export function preloadImg(url: string) {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.style.display = 'none';

    img.onload = () => {
      document.body.removeChild(img);
      resolve();
    };

    img.onerror = () => {
      document.body.removeChild(img);
      reject();
    };

    img.src = url;
    document.body.appendChild(img);
  });
}
