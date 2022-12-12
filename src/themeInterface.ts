import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      headerBackground: string;
      basicBackground: string;
      secondBackground: string;
      black: string;
      white: string;
    };
    space: number[];
    fonts: {
      body: string;
      monospace: string;
      roboto: string;
    };
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    fontWeights: {
      normal: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    borders: {
      none: string;
      normal: string;
    };
    radii: {
      none: string;
      mini: string;
      normal: string;
      round: string;
    };
  }
}
