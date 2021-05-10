const theme = "dark";
//const theme = 'light';
export const lightTheme = theme === "light";

export const color = lightTheme ? "#DFE6F3" : "#0C0B0F";
export const color2 = lightTheme ? "white" : "#010e2c";
export const color3 = lightTheme ? "#4ab49f" : "#4ab49f";

if (lightTheme) {
  document.body.style.background = "#e1eaee";
  document.body.style.color = "#232228";
}

export const lightGreyBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
// export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${
//   lightTheme ? "#a9b6ff" : "#121d5b"
// }`;
export const subtleBoxShadow = `  box-shadow: -4px -4px 4px rgba(255, 255, 255, 0.08), 4px 4px 4px rgba(0, 0, 0, 0.56), 0 0 0 rgba(255, 255, 255, 0.08) inset, 0 0 0 rgba(0, 0, 0, 0.56) inset;
border: 1px solid rgba(0, 0, 0, 0.08);`;

export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #4ab49f`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = "font-size: 2em";
export const fontSize1 = "font-size: 1.5em;";
export const fontSize2 = "font-size: 1.0em";
export const fontSize3 = "font-size: .75em";

export const textAlignCenter = "text-align: center;";
