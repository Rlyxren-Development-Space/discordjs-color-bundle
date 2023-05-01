type RedInput = number;
type GreenInput = number;
type BlueInput = number;
type AlphaInput = number;
type HexValue = number;
type HexCode = number;
type RandomHex = number;

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
  WildStrawberry: number;
  DeepAqua: number;
  BerrySorbet: number;
  DreamyLavender: number;
  WildWatermelon: number;
  FrostyMint: number;
  PeachyPink: number;
  PastelPeach: number;
  CandyPink: number;
  PowderBlue: number;
  Azzurro: number;
  AmaranthPink: number;
  Aubergine: number;
  Byzantium: number;
  CaputMortuum: number;
  CeruleanFrost: number;
  Coquelicot: number;
  DarkByzantium: number;
  EtonBlue: number;
  Feldgrau: number;
  Gainsboro: number;
  HeliotropeGray: number;
  InternationalKleinBlue: number;
  Jasper: number;
  KhakiRose: number;
  LemonCurry: number;
  Malachite: number;
  MikadoYellow: number;
  NadeshikoPink: number;
  Olivine: number;
  PansyPurple: number;
  PapayaWhip: number;
  Periwinkle: number;
  PersianPlum: number;
  PhthaloGreen: number;
  PineGreen: number;
  QuinacridoneMagenta: number;
  RoseMadder: number;
  SapphireBlue: number;
  SeafoamGreen: number;
  Smalt: number;
  Tan: number;
  TaupeGray: number;
  Tawny: number;
  Tumbleweed: number;
  TyrianPurple: number;
  Ube: number;
  Verdigris: number;
  ViridianGreen: number;
  Wheat: number;
  Wisteria: number;
  Xanadu: number;
  YaleBlue: number;
  Zaffre: number;
  Zomp: number;
  Sarcoline: number;
  Coquelicot: number;
  Sinopia: number;
  Smaragdine: number;
  Glaucous: number;
  AmaranthDeepPurple: number;
  BlueSapphire: number;
  Byzantine: number;
  CeladonGreen: number;
  Cinnabar: number;
  CobaltBlue: number;
  CoralRed: number;
  CurrantRed: number;
  DarkSeaGreen: number;
  DeepCarminePink: number;
  DeepJungleGreen: number;
  DeepViolet: number;
  ElectricIndigo: number;
  Fandango: number;
  Heliotrope: number;
  IndigoDye: number;
  Iridescent: number;
  LavenderGray: number;
  Lava: number;
  LemonGlacier: number;
  LightSlateGray: number;
  MaximumBlueGreen: number;
  MidnightGreen: number;
  OldRose: number;
  OtterBrown: number;
  PaleTaupe: number;
  PeachPuff: number;
  PersianBlue: number;
  Phlox: number;
  Pineapple: number;
  PrussianBlue: number;
  Raspberry: number;
  RichBlack: number;
  RoseGold: number;
  Russet: number;
  SmokyBlack: number;
  SpanishGray: number;
  TiffanyBlue: number;
  RandomAdvanced: Function;
}
/**

An object containing internet app color names as keys and their corresponding number representation as values.
*/
interface InternetColors {
  SocialMedia: {
    FacebookLogo: number;
    TwitterLogo: number;
    InstagramLogo: number;
    LinkedInLogo: number;
    SnapchatLogo: number;
  };
  Communication: {
    DiscordLogo: number;
    ZoomLogo: number;
    SkypeLogo: number;
    SlackLogo: number;
  };
  ECommerce: {
    AmazonLogo: number;
    eBayLogo: number;
    ShopifyLogo: number;
  };
  Musics: {
    MusicStreaming: {
      SpotifyLogo: number;
      AppleMusicLogo: number;
      TidalLogo: number;
    };
    MusicRecognition: {
      ShazamLogo: number;
      MusixmatchLogo: number;
    };
    MusicalInstruments: {
      FenderLogo: number;
      GibsonLogo: number;
      YamahaLogo: number;
    };
  };
}
/**

- An object containing product color names as keys and their corresponding number representation as values.
*/
interface ProductColors {
  Soap: {
    DettolOriginalSoap: number;
    LifebuoyTotal10Soap: number;
    DoveWhiteBeautyBarSoap: number;
    IvoryOriginalBathSoap: number;
  };
  Electronics: {
    RazerBlade15GamingLaptop: number;
    AppleiPhone13ProMax: number;
    SamsungGalaxyS21Ultra: number;
    SonyPlayStation5: number;
  };
  FoodAndBeverages: {
    CocaColaClassic: number;
    Pepsi: number;
    KitKat: number;
    Oreo: number;
  };
  Clothing: {
    NikeAirMax97: number;
    AdidasOriginalsSuperstar: number;
    Levis501OriginalJeans: number;
    HAndMBasicTshirt: number;
  };
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
