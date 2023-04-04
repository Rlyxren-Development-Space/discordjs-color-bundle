declare function getRandomHexColor(): number;
/**
 *
 * @param {string} hexCode
 * @returns {number} number
 */
declare function CustomHex(hexCode: string): number;

interface Colors {
  [key: string]: number;
}
interface ProductColorsI {
  [key: string]: number;
}
interface InternetColorsI {
  [key: string]: number;
}

/**
 * - The color object for Discord.js
 * - It has more than 148 colors
 * - It only works with Discord.js
 */
declare const colors: Colors;
/**
 * - The Internet Color Object for Discord.js
 * - It has awesome colors
 * - Colors of popular apps
 * - More than 10 colors
 */
declare const InternetColors: InternetColorsI;
/**
 * - The Product Color Object for Discord.js
 * - It has unique colors
 * - Colors of Electronics, Soaps etc
 * - More than 15 colors
 */
declare const ProductColors: ProductColorsI;

export {
  getRandomHexColor,
  CustomHex,
  colors,
  InternetColors,
  ProductColors,
  ProductColorsI,
  InternetColorsI,
  Colors,
};
