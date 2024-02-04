import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MissedCallDnd = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8.791 3.353a3.627 3.627 0 0 0-2.133-.308c-.55.086-1.215.325-2.018.716-.788.383-1.395.75-1.828 1.11-.934.784-1.499 1.843-1.703 3.149-.212 1.235-.116 2.629.281 4.173.39 1.516 1.063 3.139 2.018 4.87.95 1.74 2.172 3.504 3.664 5.291a36.73 36.73 0 0 0 3.448 3.565l.431.391a24.3 24.3 0 0 0 3.044 2.327c1.176.753 2.331 1.332 3.466 1.737 1.163.415 2.283.625 3.356.625.662 0 1.272-.087 1.829-.264a4.481 4.481 0 0 0 1.516-.818l.161-.127c.383-.315.819-.767 1.295-1.343.552-.669.924-1.233 1.117-1.713l.087-.194c.209-.527.238-1.126.074-1.743-.182-.684-.571-1.275-1.157-1.757l-1.129-.938-.947-.804-.459-.399a73.401 73.401 0 0 1-1.865-1.697c-.482-.515-1.162-.834-1.965-.905a3.573 3.573 0 0 0-2.169.483 5.112 5.112 0 0 0-.617.477l-.049.045-.272.265-.254.263-.085.107-.08.079-.218.239a4.97 4.97 0 0 1-.312-.159c-.315-.175-.673-.439-1.068-.791a14.026 14.026 0 0 1-1.328-1.391 14.205 14.205 0 0 1-1.09-1.465 6.411 6.411 0 0 1-.602-1.154l-.098-.258a2.282 2.282 0 0 1-.083-.29c.043-.023.091-.045.144-.067l.045-.022.178-.098.171-.083a1.18 1.18 0 0 0 .218-.137 6.076 6.076 0 0 0 1.027-.705c.574-.578.886-1.201.977-1.9.093-.711-.072-1.392-.486-2.017a50.889 50.889 0 0 1-1.696-2.601 33.63 33.63 0 0 1-1.257-2.265 3.43 3.43 0 0 0-1.577-1.5zM6.966 5.022c.34-.053.657-.008.976.142l.12.063c.23.133.406.319.553.588.357.713.801 1.514 1.299 2.338.497.822 1.081 1.72 1.763 2.705a.87.87 0 0 1 .147.621l-.02.109a1.201 1.201 0 0 1-.289.528l-.049.052-.102.083-.175.127a4.017 4.017 0 0 1-.346.21l-.143.086-.05.036-.111.054-.178.098-.25.12a2.002 2.002 0 0 0-1.025 2.162c.056.281.153.573.292.913l.073.183c.172.406.404.833.691 1.286.335.527.75 1.085 1.243 1.674a16.124 16.124 0 0 0 1.531 1.601c.494.441.968.792 1.428 1.047.164.091.317.169.459.233a2 2 0 0 0 2.3-.472l.157-.172.159-.162.09-.104.036-.047.227-.231.16-.152.079-.069c.055-.046.117-.094.189-.145l.049-.035.119-.063c.253-.117.523-.161.827-.134.321.028.543.131.681.279l.088.088.624.582c.421.388.852.775 1.293 1.163l.471.41.817.695 1.295 1.078c.27.222.424.456.496.726.061.231.047.403-.017.53l-.106.236c-.122.252-.374.623-.765 1.097-.452.547-.838.937-1.112 1.142l-.155.12a2.565 2.565 0 0 1-.768.392 4.05 4.05 0 0 1-1.223.17c-.831 0-1.725-.167-2.684-.509-.984-.351-2.004-.862-3.059-1.538a22.88 22.88 0 0 1-3.194-2.502 34.87 34.87 0 0 1-3.283-3.393c-1.401-1.677-2.548-3.335-3.432-4.954-.883-1.601-1.492-3.07-1.836-4.41-.332-1.289-.407-2.403-.247-3.337.137-.878.47-1.496 1.018-1.956.282-.235.755-.522 1.416-.843.651-.317 1.137-.49 1.451-.538zM24 3l-.225.004A6 6 0 0 0 24 15l.225-.004A6 6 0 0 0 30 9l-.004-.225A6 6 0 0 0 24 3zm2.637 6.694h-5.275A.697.697 0 0 1 20.668 9a.697.697 0 0 1 .694-.694h5.275a.697.697 0 0 1 .694.694.697.697 0 0 1-.694.694z" />
    </svg>
  )),
);
MissedCallDnd.displayName = 'MissedCallDnd';
MissedCallDnd['iconName'] = 'missed-call-dnd';
export default MissedCallDnd;
