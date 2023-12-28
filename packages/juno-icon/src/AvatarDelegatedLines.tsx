import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AvatarDelegatedLines = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M9.241 12.001a1.75 1.75 0 0 1 2.384.665l.235.414.293.5.155.252.186.285.111.164.405.578a1.554 1.554 0 0 1-.532 2.275l-.41.22.046.12c.095.217.268.491.524.813l.135.165c.401.478.767.81 1.087 1l.104.058.298-.357.108-.11a1.543 1.543 0 0 1 2.18.094c.175.19.334.359.479.506l.269.264.119.11c.033.03.068.061.106.093l.258.215.318.252.398.305.148.129a1.75 1.75 0 0 1 .129 2.362l-.337.41a3.437 3.437 0 0 1-3.892 1.026c-1.654-.637-3.269-1.909-4.856-3.801l-.272-.331c-1.238-1.538-2.019-2.974-2.335-4.32a3.75 3.75 0 0 1 1.586-3.987l.467-.308zm1.077 1.401a.25.25 0 0 0-.341-.095l-.481.317a2.249 2.249 0 0 0-.951 2.392c.278 1.183 1.039 2.531 2.296 4.029l.269.314c1.345 1.536 2.673 2.549 3.977 3.051.78.3 1.664.067 2.194-.578l.337-.41a.25.25 0 0 0-.035-.352l-.217-.165-.374-.292-.316-.257-.259-.223a9.72 9.72 0 0 1-.444-.427l-.342-.356-.185-.2a.044.044 0 0 0-.061-.003l-.39.467a1.25 1.25 0 0 1-1.403.369c-.654-.248-1.301-.774-1.967-1.568-.644-.767-1.012-1.434-1.084-2.049a1.25 1.25 0 0 1 .652-1.247l.579-.31a.053.053 0 0 0 .022-.074l-.432-.617-.226-.339-.096-.149-.168-.273-.198-.335zM20 7.25A4.753 4.753 0 0 1 24.645 11H25a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1l-.691.001A4.75 4.75 0 0 1 20 16.75a.75.75 0 0 1 0-1.5 3.25 3.25 0 1 0-3.245-3.434L16.75 12v1.251a.75.75 0 0 1-.75.75L15.985 14H15a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h.355A4.752 4.752 0 0 1 20 7.25zm0 2.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
    </svg>
  )),
);
AvatarDelegatedLines.displayName = 'AvatarDelegatedLines';
AvatarDelegatedLines['iconName'] = 'avatar-delegated-lines';
export default AvatarDelegatedLines;
