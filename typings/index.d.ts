/**

Returns a random hexadecimal color as a number.
*/
declare function getRandomHexColor(): number;
/**

Returns the number representation of the given hexadecimal color code.
@param hexCode The hexadecimal color code (e.g. '#ff0000').
@returns The number representation of the color.
*/
declare function CustomHex(hexCode: string): number;
/**

An object containing color names as keys and their corresponding number representation as values.
*/
interface Colors {
  [key: number]: number;
}
/**

An object containing internet app color names as keys and their corresponding number representation as values.
*/
interface InternetColors {
  [key: number]: number;
}
/**

- An object containing product color names as keys and their corresponding number representation as values.
*/
interface ProductColors {
  [key: number]: number;
}
/**

- The color object for Discord.js.
- Contains more than 148 colors.
- Only works with Discord.js.
*/
declare const colors: Colors;
/**

- The Internet Color Object for Discord.js.
- Contains awesome colors of popular apps.
- More than 10 colors.
*/
declare const internetColors: InternetColors;
/**
- The Product Color Object for Discord.js.
- Contains unique colors of electronics, soaps, etc.
- More than 15 colors.
*/
declare const productColors: ProductColors;
export {
  getRandomHexColor,
  CustomHex,
  colors,
  internetColors,
  productColors,
  Colors,
  InternetColors,
  ProductColors,
};
