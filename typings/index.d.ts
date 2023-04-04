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
/**
 * - The color object for Discord.js
 * - It has more than 50 colors
 * - It only works with Discord.js
 */
declare const colors: Colors;

export { getRandomHexColor, CustomHex, colors };
