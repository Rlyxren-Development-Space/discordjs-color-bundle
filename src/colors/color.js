/**
 * - The color object for Discord.js
 * - It has 50 colors
 * - It only works with Discord.js
 */
const colors = {
  Red: 0xff0000,
  Orange: 0xffa500,
  Yellow: 0xffff00,
  Green: 0x008000,
  Blue: 0x0000ff,
  Indigo: 0x4b0082,
  Violet: 0xee82ee,
  Purple: 0x8c03fc,
  Lime: 0x66fc03,
  LemonJuice: 0xffffcc,
  CadetBlue: 0x5f9ea0,
  HotPink: 0xff69b4,
  CornFlowerBlue: 0x6495ed,
  Brick: 0x8b0000,
  OliveDrab: 0x6b8e23,
  Olive: 0x808000,
  Coral: 0xff7f50,
  LightCoral: 0xf08080,
  Cyan: 0x00ffff,
  LightCyan: 0xe0ffff,
  Aqua: 0x00ffff,
  Aquamarine: 0x7fffd4,
  Salmon: 0xfa8072,
  SeaGreen: 0x2e8b57,
  SeaBlue: 0x006994,
  LightSeaGreen: 0x20b2aa,
  SkyBlue: 0x87ceeb,
  LightSkyBlue: 0x87ceeb,
  SpringGreen: 0x00ff7f,
  Tomato: 0xff6347,
  Chartreuse: 0xdfff00,
  DarkChartreuse: 0x7fff00,
  SandyBrown: 0xf4a460,
  Plum: 0x673147,
  MysticMauve: 0xb699ae,
  ElectricKiwi: 0xcfff04,
  VelvetMaroon: 0x800020,
  TurquoiseSurf: 0x00c5cd,
  MidnightSun: 0xffcb6b,
  CherryBlossomPink: 0xffb7c5,
  LavenderHaze: 0xb57edc,
  CaramelLatte: 0xaf6f09,
  Goldenrod: 0xdaa520,
  IndigoNight: 0x4b0082,
  SeafoamSplash: 0x00ffc6,
  LimeFizz: 0x9acd32,
  SapphireDepths: 0x082567,
  MintMist: 0xb0e0e6,
  FrostyFern: 0x4f7942,
  MidnightMarina: 0x003366,
  Colors: {
    Red: 0xff0000,
    Orange: 0xffa500,
    Yellow: 0xffff00,
    Green: 0x008000,
    Blue: 0x0000ff,
    Indigo: 0x4b0082,
    Violet: 0xee82ee,
    Purple: 0x8c03fc,
    Lime: 0x66fc03,
    LemonJuice: 0xffffcc,
    CadetBlue: 0x5f9ea0,
    HotPink: 0xff69b4,
    CornFlowerBlue: 0x6495ed,
    Brick: 0x8b0000,
    OliveDrab: 0x6b8e23,
    Olive: 0x808000,
    Coral: 0xff7f50,
    LightCoral: 0xf08080,
    Cyan: 0x00ffff,
    LightCyan: 0xe0ffff,
    Aqua: 0x00ffff,
    Aquamarine: 0x7fffd4,
    Salmon: 0xfa8072,
    SeaGreen: 0x2e8b57,
    SeaBlue: 0x006994,
    LightSeaGreen: 0x20b2aa,
    SkyBlue: 0x87ceeb,
    LightSkyBlue: 0x87ceeb,
    SpringGreen: 0x00ff7f,
    Tomato: 0xff6347,
    Chartreuse: 0xdfff00,
    DarkChartreuse: 0x7fff00,
    SandyBrown: 0xf4a460,
    Plum: 0x673147,
    MysticMauve: 0xb699ae,
    ElectricKiwi: 0xcfff04,
    VelvetMaroon: 0x800020,
    TurquoiseSurf: 0x00c5cd,
    MidnightSun: 0xffcb6b,
    CherryBlossomPink: 0xffb7c5,
    LavenderHaze: 0xb57edc,
    CaramelLatte: 0xaf6f09,
    Goldenrod: 0xdaa520,
    IndigoNight: 0x4b0082,
    SeafoamSplash: 0x00ffc6,
    LimeFizz: 0x9acd32,
    SapphireDepths: 0x082567,
    MintMist: 0xb0e0e6,
    FrostyFern: 0x4f7942,
    MidnightMarina: 0x003366,
  },
};

let colorArray = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Voilet",
  "Purple",
  "Lime",
  "LemonJuice",
  "CadetBlue",
  "HotPink",
  "CornFlowerBlue",
  "Brick",
  "OliveDrab",
  "Olive",
  "Coral",
  "LightCoral",
  "Cyan",
  "LightCyan",
  "Aqua",
  "Aquamarine",
  "Salmon",
  "SeaGreen",
  "SeaBlue",
  "LightSeaGreen",
  "SkyBlue",
  "LightSkyBlue",
  "SpringGreen",
  "Tomato",
];

class AmountError extends Error {
  constructor(message) {
    super(`[InvalidAmount]: ${message}`);
    this.name = "AmountError";
  }
}

/**
 * - 30 Colors
 * @param {number} amount
 * @returns all the colors name
 * @example ```js
 * console.log(colorNames(10)); // It'll log the first 10 colors
 * console.log(colorNames()); // It'll log all the colors
 * ```
 */

function colorNames(amount = 50) {
  if (amount < 0 || amount > 50) {
    throw new AmountError(
      `Whoa there, hold on a sec! We've got a problem here. The amount you entered is not within the acceptable range. It should be between 0 and 50, but you entered ${amount}. Let's try that again with a value within the specified range, shall we?`
    );
  }
  if (typeof amount !== "number" || typeof amount !== "undefined") {
    throw new TypeError(
      `Expected type to be "number" but got "${typeof amount}" instead.`
    );
  }
  let colors = colorArray.slice(0, amount);
  return colors.join(", ");
}

module.exports = {
  colors,
  colorNames,
};
