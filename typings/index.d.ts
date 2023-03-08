/**
 * - The color type for Discord.js
 * - It has 25 colors with number type
 */

type colorsType = {
  Red: number;
  Orange: number;
  Yellow: number;
  Green: number;
  Blue: number;
  Indigo: number;
  Violet: number;
  Purple: number;
  Lime: number;
  LemonJuice: number;
  CadetBlue: number;
  HotPink: number;
  CornFlowerBlue: number;
  Brick: number;
  OliveDrab: number;
  Olive: number;
  Coral: number;
  LightCoral: number;
  Cyan: number;
  LightCyan: number;
  Aqua: number;
  Aquamarine: number;
  Salmon: number;
  SeaGreen: number;
  SeaBlue: number;
  Colors: {
    Red: number;
    Orange: number;
    Yellow: number;
    Green: number;
    Blue: number;
    Indigo: number;
    Violet: number;
    Purple: number;
    Lime: number;
    LemonJuice: number;
    CadetBlue: number;
    HotPink: number;
    CornFlowerBlue: number;
    Brick: number;
    OliveDrab: number;
    Olive: number;
    Coral: number;
    LightCoral: number;
    Cyan: number;
    LightCyan: number;
    Aqua: number;
    Aquamarine: number;
    Salmon: number;
    SeaGreen: number;
    SeaBlue: number;
  };
};
/**
 * - The color object for Discord.js
 * - It has 25 colors
 * - It only works with Discord.js
 */
declare const colors: colorsType;

/**
 * - 25 Colors
 * @param {number} amount
 * @returns all the colors name
 * @example ```js
 * console.log(colorNames(10)); // It'll log the first 10 colors
 * console.log(colorNames()); // It'll log all the colors
 * ```
 */
declare function colorNames(amount?: number): string;

export { colors, colorNames };
