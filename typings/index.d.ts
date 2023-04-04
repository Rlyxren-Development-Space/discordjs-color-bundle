declare function getRandomHexColor(): number;

declare function CustomHex(hexCode: string): number;

declare interface DiscordColors {
  [key: number]: number;
}

interface ColorsObject {
  obj: object;
}

declare function colorNames(obj: ColorsObject): string;

declare const colors: DiscordColors;

export { getRandomHexColor, CustomHex, colors, colorNames };
