# 🌈 DiscordJS Colors Bundle

> An extensive color pack to elevate your Discord Bot's embed visuals.

# ✨ Comprehensive Color Pack for Enhancing Discord Bot Embeds

Colors play a crucial role in enhancing visual aesthetics and improving user experience in various digital platforms. Discord, a popular communication platform, provides the ability to embed content, which allows developers to enrich their Discord bots with visually appealing and informative displays. In this context, a comprehensive color pack offers a wide range of color options to customize Discord bot embeds, enabling developers to create engaging and visually captivating user interfaces. This article presents an in-depth exploration of the vast selection of colors available in this pack and the potential benefits they bring to Discord bot development.

## 💻 Installation

### Npm

```sh
npm i discordjs-colors-bundle
```

### Yarn

```sh
yarn add discordjs-colors-bundle
```

## 🚀 Features

- More than 300 unique colors
- Zero-Dependency module
- Light weight
- TypeScript support
- Product Colors
- Internet Apps Colors

## ❓ How to use

Here's a basic example to work with it

```js
const { colors } = require("discordjs-colors-bundle");

if (command == "e?color-name") {
  const ColorsEmbed = new EmbedBuilder()
    .setTitle("Just an embed")
    .setDescription(
      "This embed is colored by [discordjs-colors-bundle](https://npmjs.com/package/discordjs-colors-bundle)"
    )
    .setColor(colors.MaximumBlueGreen); // Maximum Blue Green color

  message.reply({ embeds: [ColorsEmbed] });
}
```

You can also use the ENUM:

```js
const { Colors } = require("discordjs-colors-bundle");

if (command == "e?color-name") {
  const ColorsEmbed = new EmbedBuilder()
    .setTitle("Just an embed")
    .setDescription(
      "This embed is colored by [discordjs-colors-bundle](https://npmjs.com/package/discordjs-colors-bundle)"
    )
    .setColor(Colors.MaximumBlueGreen); // Maximum Blue Green color

  message.reply({ embeds: [ColorsEmbed] });
}
```

If you want to log all the colors (just in case) you can use the **`colorNames()`** function.

Here's an example of it:

```js
console.log(colorNames(colors)); // You have to provide the object.
```

NOTE: THIS FEATURE IS DEPRECATED USE `logColorsNames()` INSTEAD.

```js
logColorsNames("Italic", colors); // Param1: Styling. Available: Bold, Italic, Regular, Bold Italic. param 2 and rest are for objects
```

## Available Color Objects

- colors
- internetColors
- productColors

## Available Color Enums

- Colors

## 📝 License

[**MIT LICENSE**](/LICENSE)
