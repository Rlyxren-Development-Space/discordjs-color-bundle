# 🌈 DiscordJS Colors Bundle

Tons of colors pack for your Discord Bot's embed

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

- More than 100 unique colors
- Zero-Dependency module
- Light weight
- TypeScript support

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

If you want to log all the colors (just in case) you can use the **`colorNames()`** function.

Here's an example of it:

```js
console.log(colorNames(colors)); // You have to provide the object.
```

It will log color names with random colors, note that the color will not be synced with the color names.

## 📝 License

[**MIT LICENSE**](/LICENSE);
