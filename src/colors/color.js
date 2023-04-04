function getRandomHexColor() {
  var letters = "0123456789ABCDEF";
  var color = "0x";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return parseInt(color, 16);
}

function CustomHex(hexCode) {
  var prefix = "0x";
  var hCode = hexCode.toString();
  hCode.replace(/#/g, prefix);

  return parseInt(hCode);
}

/**
 * - The color object for Discord.js
 * - It has more than 50 colors
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
  WildStrawberry: 0xff43a4,
  DeepAqua: 0x0077be,
  BerrySorbet: 0xff4d79,
  DreamyLavender: 0xa2a1c6,
  WildWatermelon: 0xff7a7a,
  FrostyMint: 0x8fffd7,
  PeachyPink: 0xffdab9,
  PastelPeach: 0xffb347,
  CandyPink: 0xff1cbd,
  PowderBlue: 0xb0e0e6,
  Azzurro: 0x007fff,
  AmaranthPink: 0xf19cbb,
  Aubergine: 0x3b0910,
  Byzantium: 0x702963,
  CaputMortuum: 0x592720,
  CeruleanFrost: 0x6d9bc3,
  Coquelicot: 0xff3800,
  DarkByzantium: 0x5d3954,
  EtonBlue: 0x96c8a2,
  Feldgrau: 0x4d5d53,
  Gainsboro: 0xdcdcdc,
  HeliotropeGray: 0xaa98a9,
  InternationalKleinBlue: 0x002fa7,
  Jasper: 0xd73b3e,
  KhakiRose: 0xc8a2c8,
  LemonCurry: 0xcca300,
  Malachite: 0x0bda51,
  MikadoYellow: 0xffc40c,
  NadeshikoPink: 0xf6adc6,
  Olivine: 0x9ab973,
  PansyPurple: 0x78184a,
  PapayaWhip: 0xffefd5,
  Periwinkle: 0xccccff,
  PersianPlum: 0x701c1c,
  PhthaloGreen: 0x123524,
  PineGreen: 0x01796f,
  QuinacridoneMagenta: 0x8e3a59,
  RoseMadder: 0xe32636,
  SapphireBlue: 0x0067a5,
  SeafoamGreen: 0x9fe2bf,
  Smalt: 0x003399,
  Tan: 0xd2b48c,
  TaupeGray: 0x8b8589,
  Tawny: 0xcd5700,
  Tumbleweed: 0xdeaa88,
  TyrianPurple: 0x66023c,
  Ube: 0x8878c3,
  Verdigris: 0x43bfc7,
  ViridianGreen: 0x009698,
  Wheat: 0xf5deb3,
  Wisteria: 0xc9a0dc,
  Xanadu: 0x738678,
  YaleBlue: 0x0f4d92,
  Zaffre: 0x0014a8,
  Zomp: 0x39a78e,
  Sarcoline: 0xffa07a,
  Coquelicot: 0xff3800,
  Sinopia: 0xcb410b,
  Smaragdine: 0x50c878,
  Glaucous: 0x6082b6,
  AmaranthDeepPurple: 0x9f2b68,
  BlueSapphire: 0x126180,
  Byzantine: 0xbd33a4,
  CeladonGreen: 0x2f847c,
  Cinnabar: 0xe34234,
  CobaltBlue: 0x0047ab,
  CoralRed: 0xff4040,
  CurrantRed: 0x9b111e,
  DarkSeaGreen: 0x8fbc8f,
  DeepCarminePink: 0xef3038,
  DeepJungleGreen: 0x004b49,
  DeepViolet: 0x330066,
  ElectricIndigo: 0x6f00ff,
  Fandango: 0xb53389,
  Heliotrope: 0xdf73ff,
  IndigoDye: 0x091f92,
  Iridescent: 0x6e819f,
  LavenderGray: 0xc4c3d0,
  Lava: 0xcf1020,
  LemonGlacier: 0xfdff00,
  LightSlateGray: 0x778899,
  MaximumBlueGreen: 0x30bfbf,
  MidnightGreen: 0x004953,
  OldRose: 0xc08081,
  OtterBrown: 0x654321,
  PaleTaupe: 0xbc987e,
  PeachPuff: 0xffdab9,
  PersianBlue: 0x1c39bb,
  Phlox: 0xdf00ff,
  Pineapple: 0x563c5c,
  PrussianBlue: 0x003153,
  Raspberry: 0xe30b5c,
  RichBlack: 0x010203,
  RoseGold: 0xb76e79,
  Russet: 0x80461b,
  SmokyBlack: 0x100c08,
  SpanishGray: 0x989898,
  TiffanyBlue: 0x0abab5,
  RandomAdvanced: getRandomHexColor(),
};

var colorArray = [
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
  "Chartreuse",
  "DarkChartreuse",
  "SandyBrown",
  "Plum",
  "MysticMauve",
  "ElectricKiwi",
  "VelvetMaroon",
  "TurquoiseSurf",
  "MidnightSun",
  "CherryBlossomPink",
  "LavenderHaze",
  "CaramelLatte",
  "Goldenrod",
  "IndigoNight",
  "SeafoamSplash",
  "LimeFizz",
  "SapphireDepths",
  "MintMist",
  "FrostyFern",
  "MidnightMarina",
  "WildStrawberry",
  "DeepAqua",
  "BerrySorbet",
  "DreamyLavender",
  "WildWatermelon",
  "FrostyMint",
  "PeachyPink",
  "PastelPeach",
  "CandyPink",
  "PowderBlue",
];

function AmountError(message) {
  Error.call(this);
  this.message = `[InvalidAmount]: ${message}`;
  this.name = "AmountError";
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, AmountError);
  }
}

AmountError.prototype = Object.create(Error.prototype);

function colorNames(colors) {
  if (typeof colors === "undefined") {
    throw new Error("No colors object provided.");
  }
  if (typeof colors !== "object") {
    throw new TypeError(`
  Expected colors to be an "object" but got "${typeof colors}" instead.`);
  }
  var colorNames = Object.keys(colors);
  var formattedColors = "";
  var responseTime = new Date();
  for (var i = 0; i < colorNames.length; i++) {
    var colorName = colorNames[i];
    var colorValue = colors[colorName];
    var ansiColor = hexToAnsi(colorValue);
    formattedColors += `${
      i + 1
    }. \x1b[1m${colorName}\x1b[0m ${ansiColor}${ansiColor}\n`;
  }
  var totalColors = colorNames.length;
  var elapsedTime = new Date() - responseTime;
  formattedColors += `\u001b[1mTotal Colors: \u001b[36m${totalColors}\u001b[0m\n\u001b[1mResponse Time: \u001b[33m${elapsedTime}ms\u001b[0m`;

  return formattedColors;
}

function hexToAnsi(hexValue) {
  var hexString = hexValue.toString(16).padStart(6, "0");
  var r = parseInt(hexString.substring(0, 2), 16);
  var g = parseInt(hexString.substring(2, 4), 16);
  var b = parseInt(hexString.substring(4, 6), 16);
  var ansiColorCode =
    16 +
    36 * Math.round((r / 255) * 5) +
    6 * Math.round((g / 255) * 5) +
    Math.round((b / 255) * 5);
  return `\u001b[38;5;${ansiColorCode}m`;
}

module.exports = {
  colors: colors,
  colorNames: colorNames,
  CustomHex: CustomHex,
};
