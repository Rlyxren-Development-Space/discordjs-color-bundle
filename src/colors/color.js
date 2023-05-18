/**
 *
 * @returns {RandomHex} RandomHex
 */
function getRandomHexColor() {
  var letters = "0123456789ABCDEF";
  var color = "0x";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return parseInt(color, 16);
}

function ColorConvertError(prefix, ...message) {
  Error.call(this);
  this.message = `[${prefix}]: ${message.join(" ")}`;
  this.name = "ColorConvertError";
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ColorConvertError);
  }
}

ColorConvertError.prototype = Object.create(Error.prototype);

/**
 *
 * @param {string} hexCode
 * @returns {number} number
 */
function CustomHex(hexCode) {
  if (typeof hexCode !== "string") {
    throw new ColorConvertError(
      "TypeError",
      `Expected type to be a\x1b[1m\x1b[31m "string"\x1b[0m.`,
      `But got a\x1b[1m\x1b[31m "${typeof hexCode}"\x1b[0m instead.`
    );
  }
  if (!hexCode.startsWith("#")) {
    throw new ColorConvertError("InvalidFormat", "Color must be a valid hex");
  }
  if (hexCode.length < 2) {
    throw new ColorConvertError(
      "InvalidHex",
      "The hex you provided is not valid"
    );
  }
  var prefix = "0x";
  var hCode = hexCode.toString().replace(/^#/, prefix);
  return parseInt(hCode, 16);
}

/**
 *
 * @param {RedInput} red
 * @param {GreenInput} green
 * @param {NumberInput} blue
 * @returns {HexValue} hexValue
 */

function CustomRGB(red, green, blue) {
  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");

  const hexString = `0x${redHex}${greenHex}${blueHex}`;

  return parseInt(hexString.toLowerCase());
}

/**
 *
 * @param {RedInput} red
 * @param {GreenInput} green
 * @param {BlueInput} blue
 * @param {AlphaInput} alpha
 * @returns {HexCode} hexCode
 */

function CustomRGBA(red, green, blue, alpha) {
  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0");

  const hexString = `0x${redHex}${greenHex}${blueHex}${alphaHex}`;

  return parseInt(hexString.toLowerCase());
}

/**
 * - The color object for Discord.js
 * - It has more than 148 colors
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
  CoralPink: 0xf88379,
  DeepLilac: 0x9955bb,
  ElectricLime: 0xceff1d,
  NeonFuchsia: 0xfe59c2,
  OrchidPurple: 0x784384,
  PaleCyan: 0x87ffeb,
  TealGreen: 0x00a99d,
  VividMarigold: 0xffc600,
  BlushPink: 0xf29b9b,
  IceBlue: 0xd7efff,
  LemonZest: 0xfff700,
  MauveMist: 0xe0b0ff,
  PeridotGreen: 0xa4c639,
  RadiantRose: 0xff4871,
  RichLavender: 0xa76bcf,
  SummerSky: 0x38b0de,
  TwinklingTurquoise: 0x54ffd2,
  ElectricCrimson: 0xff003f,
  FluorescentGreen: 0x08ff08,
  GrapePurple: 0x5d1451,
  HotPurple: 0xcb00f5,
  LavenderPurple: 0x967bb6,
  NavyGreen: 0x35530a,
  PaleViolet: 0xcc99ff,
  RoyalGold: 0xcca500,
  TidalBlue: 0x0a98c4,
  AntiqueFuchsia: 0x915c83,
  BubblegumPink: 0xff69af,
  CyberGrape: 0x58427c,
  ElectricOrange: 0xff3503,
  FlamingoPink: 0xff66ff,
  KiwiGreen: 0x8ee53f,
  Limeade: 0x6f9e02,
  MardiGras: 0x880085,
  PastelGreen: 0x77dd77,
  RazzleDazzleRose: 0xff33cc,
  ShamrockGreen: 0x009e60,
  SunburntCyclops: 0xff404c,
  ViperGreen: 0x46cb18,
  WinterSky: 0xff007c,
  AmberRose: 0xff7e4e,
  BabyBlueEyes: 0xa1caf1,
  CarnationPink: 0xffa6c9,
  DeepMagenta: 0xcc00cc,
  ElectricPurple: 0xbf00ff,
  Honeydew: 0xf0fff0,
  Iceberg: 0x71a6d2,
  JungleGreen: 0x29ab87,
  LavenderBlush: 0xfff0f5,
  Malibu: 0x5f9ea0,
  NeonYellow: 0xccff00,
  PaleCornflowerBlue: 0xabcdef,
  RaspberryPink: 0xe25098,
  RoseQuartz: 0xaa98a9,
  Saffron: 0xf4c430,
  SillyGreen: 0x76ff7a,
  TangerineYellow: 0xffcc00,
  UltraPink: 0xff6fff,
  VanDykeBrown: 0x664228,
  WildBlueYonder: 0xa2add0,
  AcidGreen: 0xb0bf1a,
  BahamaBlue: 0x0067a5,
  CaribbeanGreen: 0x00cc99,
  CoralReef: 0xfd7c6e,
  DarkLiver: 0x534b4f,
  Emerald: 0x50c878,
  FluorescentOrange: 0xffbf00,
  Grullo: 0xa99a86,
  HotMagenta: 0xff1dce,
  Icterine: 0xfcf75e,
  Jonquil: 0xfada5e,
  Keppel: 0x3ab09e,
  LightApricot: 0xfdd5b1,
  MintCream: 0xf5fffa,
  Mystic: 0xd65282,
  NavyPurple: 0x9457eb,
  OldLace: 0xfdf5e6,
  PaleSilver: 0xc9c0bb,
  QueenBlue: 0x436b95,
  RaisinBlack: 0x242124,
  SalmonPink: 0xff91a4,
  Sunset: 0xfad6a5,
  TickleMePink: 0xfc89ac,
  UCLABlue: 0x536895,
  VeryLightBlue: 0x6666ff,
  WindsorTan: 0xa75502,
  YoungGreen: 0xa9ba9d,
  Zinnwaldite: 0xe4d5b7,
  AirSuperiorityBlue: 0x72a0c1,
  BabyPowder: 0xfefefa,
  CandyAppleRed: 0xff0800,
  DeepChestnut: 0xb94e48,
  ElectricBlue: 0x7df9ff,
  FuchsiaPink: 0xff77ff,
  GreenLizard: 0xa7f432,
  IrisBlue: 0x5a4fcf,
  JetStream: 0xbeeef4,
  LavenderRose: 0xfba0e3,
  Mantis: 0x74c365,
  NapierGreen: 0x2a8000,
  Ochre: 0xcc7722,
  PaleMagenta: 0xf984e5,
  PlumWeb: 0xdda0dd,
  RazzmicBerry: 0x8d4e85,
  SizzlingRed: 0xff3855,
  SpanishCarmine: 0xd10047,
  TerraCotta: 0xe2725b,
  TurquoiseBlue: 0x00ffef,
  VividRaspberry: 0xff006c,
  Watermelon: 0xfd5b78,
  YellowOrange: 0xffae42,
  Zomp: 0x39a78e,
  RandomAdvanced: getRandomHexColor(),
};

/**
 * - The Product Color Object for Discord.js
 * - It has unique colors
 * - Colors of Electronics, Soaps etc
 * - More than 15 colors
 */

const productColors = {
  Soap: {
    DettolOriginalSoap: 0xc5e6a4,
    LifebuoyTotal10Soap: 0xfc8d8e,
    DoveWhiteBeautyBarSoap: 0xf3f3f3,
    IvoryOriginalBathSoap: 0xf2f2f2,
    LuxSoftTouchSoap: 0xe4c3d0,
    PalmoliveAromaMorningTonicSoap: 0xf7e9cc,
    PearsNaturalGlycerineSoap: 0xeae6e0,
    YardleyEnglishLavenderSoap: 0x9683a2,
  },
  Electronics: {
    RazerBlade15GamingLaptop: 0x00ff7f,
    AppleiPhone13ProMax: 0x0e8cbd,
    SamsungGalaxyS21Ultra: 0xc2185b,
    SonyPlayStation5: 0x000000,
    MicrosoftSurfaceBook3: 0x696969,
    LenovoThinkPadX1Carbon: 0x263238,
    DellXPS15: 0xfedcba,
    HPEnvy13: 0x00ffff,
  },
  FoodAndBeverages: {
    CocaColaClassic: 0xf40009,
    Pepsi: 0x0078c1,
    KitKat: 0xd40000,
    Oreo: 0x0d1c2e,
    LaysClassicChips: 0xf7f7f7,
    Snickers: 0x8b4513,
    Nutella: 0x601309,
    MAndMs: 0xff8000,
  },
  Clothing: {
    NikeAirMax97: 0xb2b2b2,
    AdidasOriginalsSuperstar: 0xffffff,
    Levis501OriginalJeans: 0x263238,
    HAndMBasicTshirt: 0xefefef,
    ZaraDenimJacket: 0x0f4d92,
    Forever21PrintedDress: 0xff69b4,
    GucciLogoTee: 0x008000,
    BurberryCheckScarf: 0x800000,
  },
};

/**
 * - The Internet Color Object for Discord.js
 * - It has awesome colors
 * - Colors of popular apps
 * - More than 10 colors
 */

const internetColors = {
  SocialMedia: {
    FacebookLogo: 0x1877f2,
    TwitterLogo: 0x1da1f2,
    InstagramLogo: 0xe4405f,
    LinkedInLogo: 0x0a66c2,
    SnapchatLogo: 0xfffc00,
    PinterestLogo: 0xbd081c,
    TikTokLogo: 0x69c9d0,
    RedditLogo: 0xff4500,
  },
  Communication: {
    DiscordLogo: 0x7289da,
    ZoomLogo: 0x2d8cff,
    SkypeLogo: 0x00aff0,
    SlackLogo: 0x4a154b,
    MicrosoftTeamsLogo: 0x6264a7,
    WhatsAppLogo: 0x25d366,
    TelegramLogo: 0x0088cc,
    SignalLogo: 0x5ac8fa,
  },
  ECommerce: {
    AmazonLogo: 0xff9900,
    eBayLogo: 0xe53238,
    ShopifyLogo: 0x7ab55c,
    AliExpressLogo: 0xff6d01,
    EtsyLogo: 0xd8a7b1,
    WalmartLogo: 0x007dc6,
    TargetLogo: 0xdb2828,
    BestBuyLogo: 0x003b64,
  },
  Musics: {
    MusicStreaming: {
      SpotifyLogo: 0x1db954,
      AppleMusicLogo: 0xfe2c55,
      TidalLogo: 0xffffff,
      DeezerLogo: 0x00c7f2,
      AmazonMusicLogo: 0x231f20,
      GooglePlayMusicLogo: 0xff5722,
      PandoraLogo: 0x005483,
      SoundCloudLogo: 0xff3300,
    },
    MusicRecognition: {
      ShazamLogo: 0x0088ff,
      MusixmatchLogo: 0xf05028,
      SoundHoundLogo: 0xff6600,
      GeniusLogo: 0xfbbc05,
    },
    MusicalInstruments: {
      FenderLogo: 0xff8c00,
      GibsonLogo: 0x000000,
      YamahaLogo: 0xe40045,
      RolandLogo: 0x00b0de,
      KorgLogo: 0xff4300,
      SteinwayAndSonsLogo: 0x000080,
      CasioLogo: 0xcc3333,
      PearlDrumsLogo: 0xffcc00,
    },
  },
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

/**
 *
 * @param {prefixInput} prefix
 * @param {...any} message
 * @returns {ColorNameError} ColorNamesError
 */

function ColorNameError(prefix, ...message) {
  Error.call(this);
  this.message = `[${prefix}]: ${message.join(" ")}`;
  this.name = "ColorNameError";
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ColorNameError);
  }
}

ColorNameError.prototype = Object.create(Error.prototype);

function colorNames(...colors) {
  if (colors.length === 0) {
    throw new ColorNameError("NoObjectProvided", "No colors object provided.");
  }

  var colorNames = [];

  colors.forEach((colorsObj) => {
    if (typeof colorsObj !== "object") {
      throw new ColorNameError(
        "TypeError",
        `
  Expected colors to be an "object" but got "${typeof colorsObj}" instead.`
      );
    }
    var getObjectColorNames = function (obj) {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object") {
          getObjectColorNames(obj[key]);
        } else {
          if (typeof obj[key] !== "number") {
            throw new ColorNameError(
              "InvalidColorObject",
              `Invalid color object ${key}`
            );
          }
          colorNames.push(key);
        }
      });
    };
    getObjectColorNames(colorsObj);
  });

  colorNames = [...new Set(colorNames)].sort();

  var colorIndexMap = {};
  colorNames.forEach((colorName, index) => {
    colorIndexMap[colorName] = index;
  });

  var formattedColors = "";
  var responseTime = new Date();
  for (var i = 0; i < colorNames.length; i++) {
    var colorName = colorNames[i];
    var colorValue = "";
    var colorsObjIndex = 0;
    while (!colorValue && colorsObjIndex < colors.length) {
      colorValue = getObjectPropertyValue(colors[colorsObjIndex], colorName);
      colorsObjIndex++;
    }
    if (!colorValue) {
      continue;
    }
    var ansiColor = hexToAnsi(colorValue);
    var fromIndex = colorIndexMap[colorName] + 1;
    var toIndex = colorNames.length;
    if (i < colorNames.length - 1) {
      var nextColorName = colorNames[i + 1];
      toIndex = colorIndexMap[nextColorName];
    }
    formattedColors += `${ansiColor}${ansiColor}${toIndex}. \x1b[1m${colorName}\x1b[0m\n`;
  }
  var totalColors = colorNames.length;
  var elapsedTime = new Date() - responseTime;
  formattedColors += `\u001b[1mTotal Colors: \u001b[31m${totalColors}\u001b[0m\n\u001b[1mResponse Time: \u001b[34m${elapsedTime}ms\u001b[0m`;

  return formattedColors;

  function getObjectPropertyValue(obj, property) {
    var value;
    Object.keys(obj).some(function (key) {
      if (key === property) {
        value = obj[key];
        return true;
      } else if (typeof obj[key] === "object") {
        value = getObjectPropertyValue(obj[key], property);
        if (value !== undefined) {
          return true;
        }
      }
    });
    return value;
  }
}

/**
 *
 * @param {HexValueInput} hexValue
 * @returns {ansiCode} ansiCode
 */

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
  ProductColors: productColors,
  InternetColors: internetColors,
  CustomRGB: CustomRGB,
  CustomRGBA: CustomRGBA,
};
