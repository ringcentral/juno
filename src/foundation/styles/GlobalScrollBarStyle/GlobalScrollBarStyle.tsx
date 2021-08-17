import { createGlobalStyle } from '../../styled-components';

// TODO: wait for designer confirm that color
const scrollBarColor = 'rgba(80,80,80,0.7)';

/** Provide you to change whole app scrollBar color */
export const RcGlobalScrollBarStyle = createGlobalStyle`
  /*  Firefox-only */
  * {
    scrollbar-color: ${scrollBarColor} transparent;
  }
  /*
  /* Works on Chrome/Edge/Safari */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  };

  ::-webkit-scrollbar-track {
    background-color: transparent;
  };

  ::-webkit-scrollbar-thumb {
    background-color: ${scrollBarColor};
    border-radius: 10px;
  };
`;
