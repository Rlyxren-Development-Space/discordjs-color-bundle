type RedInput = number;
type GreenInput = number;
type BlueInput = number;
type AlphaInput = number;
type HexValue = number;
type HexCode = number;
type RandomHex = number;

class ColorConvertError extends Error {
  constructor(prefix: string, ...message: string[]) {
    super(`[${prefix}]: ${message.join(" ")}`);
    this.name = "ColorConvertError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ColorConvertError);
    }
  }
}

/**
 * Returns a random hexadecimal color value as a number.
 * @returns {RandomHex} RandomHex
 */
declare function getRandomHexColor(): RandomHex;

/**
 * Converts a hexadecimal color code to a number.
 * @param {string} hexCode The hexadecimal color code.
 * @returns {number} The converted number.
 * @throws {ColorConvertError} If the input is not a string or is an invalid format.
 */
declare function CustomHex(hexCode: string): number;

/**
 * Converts RGB color values to a hexadecimal color code.
 * @param {RedInput} red The red color value.
 * @param {GreenInput} green The green color value.
 * @param {BlueInput} blue The blue color value.
 * @returns {HexValue} The hexadecimal color code.
 */
declare function CustomRGB(
  red: RedInput,
  green: GreenInput,
  blue: BlueInput
): HexValue;

/**
 * Converts RGBA color values to a hexadecimal color code.
 * @param {RedInput} red The red color value.
 * @param {GreenInput} green The green color value.
 * @param {BlueInput} blue The blue color value.
 * @param {AlphaInput} alpha The alpha (transparency) value.
 * @returns {HexCode} The hexadecimal color code.
 */
declare function CustomRGBA(
  red: RedInput,
  green: GreenInput,
  blue: BlueInput,
  alpha: AlphaInput
): HexCode;

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
  colors,
  internetColors,
  productColors,
  Colors,
  InternetColors,
  ProductColors,
  CustomRGB,
  CustomHex,
  CustomRGBA,
};
