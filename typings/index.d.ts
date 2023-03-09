/**
 * - The color type for Discord.js
 * - It has 50 colors with number type
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
  LightSeaGreen: number;
  SkyBlue: number;
  LightSkyBlue: number;
  SpringGreen: number;
  Tomato: number;
  Chartreuse: number;
  DarkChartreuse: number;
  SandyBrown: number;
  Plum: number;
  MysticMauve: number;
  ElectricKiwi: number;
  VelvetMaroon: number;
  TurquoiseSurf: number;
  MidnightSun: number;
  CherryBlossomPink: number;
  LavenderHaze: number;
  CaramelLatte: number;
  Goldenrod: number;
  IndigoNight: number;
  SeafoamSplash: number;
  LimeFizz: number;
  SapphireDepths: number;
  MintMist: number;
  FrostyFern: number;
  MidnightMarina: number;
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
    LightSeaGreen: number;
    SkyBlue: number;
    LightSkyBlue: number;
    SpringGreen: number;
    Tomato: number;
    Chartreuse: number;
    DarkChartreuse: number;
    SandyBrown: number;
    Plum: number;
    MysticMauve: number;
    ElectricKiwi: number;
    VelvetMaroon: number;
    TurquoiseSurf: number;
    MidnightSun: number;
    CherryBlossomPink: number;
    LavenderHaze: number;
    CaramelLatte: number;
    Goldenrod: number;
    IndigoNight: number;
    SeafoamSplash: number;
    LimeFizz: number;
    SapphireDepths: number;
    MintMist: number;
    FrostyFern: number;
    MidnightMarina: number;
  };
};
/**
 * - The color object for Discord.js
 * - It has 30 colors
 * - It only works with Discord.js
 */
declare const colors: colorsType;

/**
 * - 50 Colors
 * @param {number} amount
 * @returns all the colors name
 * @example ```js
 * console.log(colorNames(10)); // It'll log the first 10 colors
 * console.log(colorNames()); // It'll log all the colors
 * ```
 */
declare function colorNames(amount?: number): string;

export { colors, colorNames };
