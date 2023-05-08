import 'styled-components';

declare module 'styled-components' {
  type InitTheme = typeof theme;
  export interface DefaultTheme extends InitTheme {}
}

//밝은색 -> 어두운색 순
const baseColors = {
  white: ['#fff'],
  black: ['#000', '#353535'],
  gray: ['#dfdfdf', '#c4c4c4', '#b3b3b3', '#979797'],
  blue: ['#5f68c8'],
  red: ['#ff5e5e'],
  green: ['#45ff7a'],
};

const theme = {
  colors: {
    base: baseColors,
    main: {
      //text
      textWhite: baseColors.white[0],
      textGray: baseColors.gray[2],
      textBlack: baseColors.black[0],
      subTextGray: baseColors.gray[3],

      //background
      bgWhite: baseColors.white[0],
      bgBlack: baseColors.black[1],
      hoverBg: baseColors.gray[0],

      //line
      border: baseColors.gray[1],
      line: baseColors.gray[1],

      //main color
      blue: baseColors.blue[0],
      red: baseColors.red[0],
      green: baseColors.green[0],
    },
  },
  /**단위 px */
  screenSize: {
    mobile: 768,
    tablet: 1024,
  },
} as const;

export default theme;
