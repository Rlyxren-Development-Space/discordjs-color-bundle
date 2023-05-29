const {
  colors,
  colorNames,
  CustomHex,
  internetColors,
  productColors,
  CustomRGB,
  CustomRGBA,
  Colors,
  logColorsNames,
  LogColor,
} = require("../colors-bundle");

console.log(colors.AmberRose);
console.log(Colors.Watermelon);
logColorsNames(LogColor.Bold, colors, productColors, internetColors);
console.log(colors.RandomAdvanced);
console.log(colors.WildWatermelon);
console.log(CustomHex("#F"));
console.log(CustomRGBA(200, 41, 11, 1));
console.log(internetColors.Musics.MusicRecognition.MusixmatchLogo);
