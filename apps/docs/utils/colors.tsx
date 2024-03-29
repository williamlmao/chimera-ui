import Color from "color";

const isDescendantOfMainColor = (
  colorName: string,
  mainColor: string,
  colors: ColorsType
): boolean => {
  const colorObj = colors[colorName as keyof typeof colors];
  if (colorObj.reference === mainColor) return true;
  if (colorObj.reference) {
    return isDescendantOfMainColor(colorObj.reference, mainColor, colors);
  }
  return false;
};

/**
 *
 * @param themeColors
 * @param mainColor If mainColor is passed in, only modify colors that are supporting colors of mainColor.
 * @returns
 */
export const setSupportingColors = (
  themeColors: ColorsType,
  mainColor?: string
) => {
  themeColors = { ...themeColors };
  // Iterate through themeColors.
  // For each color, if it is a supporting color, set its value according to adjustment against the main color.
  Object.entries(themeColors).forEach(([colorName, colorObj]) => {
    if (
      !isDescendantOfMainColor(colorName, colorObj.reference || "", themeColors)
    )
      return;
    if (colorObj.type === "supporting" && colorObj.adjustment) {
      const mainColor = Color(
        themeColors[colorObj.reference as keyof typeof themeColors].value
      );
      const direction = mainColor.isLight() ? "darken" : "lighten";

      // Color, the npm package we are using does not have a great way to adjust lumincance other than a percentage, which does not work for white and blacks.
      // Each color in the colors object has an adjustment value that is applied to its reference color.
      const newValue =
        direction === "lighten" || colorObj.dontAccountForDirection
          ? mainColor
              .lightness(mainColor.object().l + colorObj.adjustment[2] * 1.1) // Darker colors need more adjustment
              .hsl()
          : mainColor
              .lightness(mainColor.object().l + colorObj.adjustment[2] * -1)
              .hsl();

      themeColors[colorName as keyof typeof themeColors].value = newValue
        .hsl()
        .string();
    }
  });
  return themeColors;
};

export type ColorType = {
  name: string;
  displayName: string;
  description: string;
  cssVariable: string;
  example: string;
  usage: string;
  contrast?: string[];
  value: string;
  type: "main" | "supporting";
  dontAccountForDirection?: boolean; // For colors like primary, light -> dark or dark -> light don't matter and raw adjustment should
  reference?: string;
  adjustment?: [number, number, number]; // hsl
};

export type ColorsType = {
  base: ColorType;
  "base-focus": ColorType;
  "base-2": ColorType;
  "base-2-focus": ColorType;
  "base-content": ColorType;
  "base-content-2": ColorType;
  "base-content-3": ColorType;
  overlay: ColorType;
  "overlay-focus": ColorType;
  "overlay-2": ColorType;
  "overlay-2-focus": ColorType;
  "overlay-content": ColorType;
  "overlay-content-2": ColorType;
  "overlay-content-3": ColorType;
  input: ColorType;
  "input-focus": ColorType;
  "input-content": ColorType;
  "input-content-2": ColorType;
  line: ColorType;
  "line-focus": ColorType;
  primary: ColorType;
  "primary-focus": ColorType;
  "primary-content": ColorType;
  "primary-subtle": ColorType;
  "primary-subtle-content": ColorType;
  secondary: ColorType;
  "secondary-focus": ColorType;
  "secondary-content": ColorType;
  "secondary-subtle": ColorType;
  "secondary-subtle-content": ColorType;
  info: ColorType;
  "info-focus": ColorType;
  "info-content": ColorType;
  "info-subtle": ColorType;
  "info-subtle-content": ColorType;
  success: ColorType;
  "success-focus": ColorType;
  "success-content": ColorType;
  "success-subtle": ColorType;
  "success-subtle-content": ColorType;
  danger: ColorType;
  "danger-focus": ColorType;
  "danger-content": ColorType;
  "danger-subtle": ColorType;
  "danger-subtle-content": ColorType;
  warning: ColorType;
  "warning-focus": ColorType;
  "warning-content": ColorType;
  "warning-subtle": ColorType;
  "warning-subtle-content": ColorType;
};

export const colors: ColorsType = {
  base: {
    name: "base",
    displayName: "base",
    description:
      "base is your main background color. It's recommended to use a color with luminosity of >90 or <20.",
    cssVariable: "--base",
    example: "bg-base",
    usage: "bg-base",
    contrast: ["base-content", "base-content-2", "base-content-3"],
    value: "hsl(240, 7%, 11%)",
    type: "main",
  },
  "base-focus": {
    name: "base-focus",
    displayName: "base-focus",
    description:
      "base-focus is used to provide a focus/hover states for elements using a base background.",
    cssVariable: "--base-focus",
    example: "bg-base-focus",
    usage: "bg-base-focus",
    contrast: ["base-content", "base-content-2", "base-content-focus"],
    value: "hsl(240, 7%, 28.6%)",
    type: "supporting",
    reference: "base",
    adjustment: [0, 0, 16],
  },
  "base-2": {
    name: "base-2",
    displayName: "base-2",
    description:
      "base-2 is used to provide another layer on top of base, like a card or a section. Use it to create height/depth.",
    cssVariable: "--base-2",
    example: "bg-base-2",
    usage: "bg-base-2",
    contrast: ["base-content", "base-content-2", "base-content-3"],
    value: "hsl(240, 7%, 15.4%)",
    type: "supporting",
    reference: "base",
    adjustment: [0, 0, 4],
  },
  "base-2-focus": {
    name: "base-2-focus",
    displayName: "base-2-focus",
    description:
      "base-2-focus is used to provide a focus/hover states for elements using a base background.",
    cssVariable: "--base-2-focus",
    example: "bg-base-2-focus",
    usage: "bg-base-2-focus",
    contrast: ["base-content", "base-content-2", "base-content-focus"],
    value: "hsl(240, 7%, 19.8%)",
    type: "supporting",
    reference: "base-2",
    adjustment: [0, 0, 4],
  },
  "base-content": {
    name: "base-content",
    displayName: "base-content / base-content",
    description:
      "Main text color to be used on top of base. This is the most commonly used color on your site.",
    cssVariable: "--base-content",
    example: "bg-base-content",
    usage: "bg-base-content",
    contrast: ["base", "base-2", "base-3"],
    value: "hsl(240, 7%, 100%)",
    type: "supporting",
    reference: "base",
    adjustment: [0, 0, 88],
  },
  "base-content-2": {
    name: "base-content-2",
    displayName: "base-content-2",
    description:
      "Text color used to provide contrast from base-content, usually for headers or labels",
    cssVariable: "--base-content-2",
    example: "bg-base-content-2",
    usage: "bg-base-content-2",
    contrast: ["base", "base-2", "base-3"],
    value: "hsl(240, 7%, 90%)",
    adjustment: [0, 0, 10],
    type: "supporting",
    reference: "base-content",
  },
  "base-content-3": {
    name: "base-content-3",
    displayName: "base-content-3",
    description:
      "Text color used to provide contrast from base-content and 2, usually for small details. Should be rarely used",
    cssVariable: "--base-content-3",
    example: "bg-base-content-3",
    usage: "bg-base-content-3",
    contrast: ["base", "base-2", "base-3"],
    value: "hsl(240, 7%, 70%)",
    adjustment: [0, 0, 30],
    type: "supporting",
    reference: "base-content",
  },
  overlay: {
    name: "overlay",
    displayName: "overlay / overlay",
    description:
      "The main overlay color. Used for modals, popovers, menus. Anything in the foreground.",
    cssVariable: "--overlay",
    example: "bg-overlay",
    usage: "bg-overlay",
    contrast: ["overlay-content", "overlay-content-2", "overlay-content-3"],
    value: "hsl(240, 7%, 18.7%)",
    type: "supporting",
    reference: "base",
    adjustment: [0, 0, 7],
  },
  "overlay-focus": {
    name: "overlay-focus",
    displayName: "overlay-focus",
    description: "Overlay color used for focus/hover states",
    cssVariable: "--overlay-focus",
    example: "bg-overlay-focus",
    usage: "bg-overlay-focus",
    contrast: ["overlay-content", "overlay-content-2", "overlay-content-3"],
    value: "hsl(240, 7%, 38.5%)",
    type: "supporting",
    reference: "overlay",
    adjustment: [0, 0, 18],
  },
  "overlay-2": {
    name: "overlay-2",
    displayName: "overlay-2",
    description:
      "The second overlay color. Used for modals, popovers, menus. Provides a second layer of contrast to overlay.",
    cssVariable: "--overlay-2",
    example: "bg-overlay-2",
    usage: "bg-overlay-2",
    contrast: ["overlay-content", "overlay-content-2", "overlay-content-3"],
    value: "hsl(240, 7%, 26.4%)",
    type: "supporting",
    reference: "overlay",
    adjustment: [0, 0, 7],
  },
  "overlay-2-focus": {
    name: "overlay-2-focus",
    displayName: "overlay-2-focus",
    description: "Overlay color used for focus/hover states on overlay-2",
    cssVariable: "--overlay-2-focus",
    example: "bg-overlay-2-focus",
    usage: "bg-overlay-2-focus",
    contrast: ["overlay-content", "overlay-content-2", "overlay-content-3"],
    value: "hsl(240, 7%, 38.5%)",
    type: "supporting",
    reference: "overlay",
    adjustment: [0, 0, 18],
  },
  "overlay-content": {
    name: "overlay-content",
    displayName: "overlay-content / overlay-content",
    description:
      "The main overlay text color. This is the most prominent color on your overlay.",
    cssVariable: "--overlay-content",
    example: "bg-overlay-content",
    usage: "text-overlay-content",
    contrast: ["overlay", "overlay-2", "overlay-3"],
    value: "hsl(240, 7%, 100%)",
    type: "supporting",
    reference: "base",
    adjustment: [0, 0, 88],
  },
  "overlay-content-2": {
    name: "overlay-content-2",
    displayName: "overlay-content-2",
    description:
      "The second overlay text color. This is the second most prominent color on your overlay. Often used for labels.",
    cssVariable: "--overlay-content-2",
    example: "bg-overlay-content-2",
    usage: "text-overlay-content-2",
    contrast: ["overlay", "overlay-2", "overlay-3"],
    value: "hsl(240, 7%, 90%)",
    type: "supporting",
    reference: "overlay-content",
    adjustment: [0, 0, 10],
  },
  "overlay-content-3": {
    name: "overlay-content-3",
    displayName: "overlay-content-3",
    description:
      "The third overlay text color. Used for very small details, less important information that needs to be visually distinguished from content or content-2.",
    cssVariable: "--overlay-content-3",
    example: "bg-overlay-content-3",
    usage: "text-overlay-content-3",
    contrast: ["overlay", "overlay-2", "overlay-3"],
    value: "hsl(240, 7%, 80%)",
    type: "supporting",
    reference: "overlay-content",
    adjustment: [0, 0, 20],
  },
  line: {
    name: "line",
    displayName: "line",
    description: "Used for borders, dividers, or any other thin lines",
    cssVariable: "--line",
    example: "bg-line",
    usage: "divide-y-line",
    contrast: [],
    value: "hsl(240, 7%, 2.2%)",
    type: "supporting",
    reference: "base",
    adjustment: [5, 10, -8],
    dontAccountForDirection: true,
  },
  "line-focus": {
    name: "line-focus",
    displayName: "line-focus",
    description:
      "Used for borders, dividers, or any other thin lines in focus/hover states",
    cssVariable: "--line-focus",
    example: "bg-line-focus",
    usage: "divide-y-line-focus",
    contrast: [],
    value: "hsl(240, 7%, 18.7%)",
    type: "supporting",
    reference: "line",
    adjustment: [0, 0, 15],
  },
  input: {
    name: "input",
    displayName: "input",
    description: "The main background color for inputs.",
    cssVariable: "--input",
    example: "bg-input",
    usage: "bg-input",
    contrast: ["input-content"],
    value: "hsl(240, 7%, 14.3%)",
    type: "supporting",
    reference: "base",
    adjustment: [5, 10, 3],
    dontAccountForDirection: true,
  },
  "input-focus": {
    name: "input-focus",
    displayName: "input-focus",
    description: "The background color for inputs in focus/hover states.",
    cssVariable: "--input-focus",
    example: "hover:bg-input-focus",
    usage: "bg-input-focus",
    contrast: ["input-content"],
    value: "hsl(240, 7%, 14.3%)",
    type: "supporting",
    reference: "base",
    adjustment: [5, 10, 3],
    dontAccountForDirection: true,
  },
  "input-content": {
    name: "input-content",
    displayName: "input-content",
    description: "Input content color. Used for input values.",
    cssVariable: "--input-content",
    example: "bg-input-content",
    usage: "bg-input-content",
    contrast: ["input"],
    value: "hsl(240, 7%, 100%)",
    type: "supporting",
    reference: "input",
    adjustment: [0, 0, 85],
  },
  "input-content-2": {
    name: "input-content-2",
    displayName: "input-content-2",
    description: "Secondary input color. Generally used for placeholders.",
    cssVariable: "--input-content-2",
    example: "bg-input-content-2",
    usage: "bg-input-content-2",
    contrast: ["input"],
    type: "supporting",
    value: "hsl(240, 7%, 80%)",
    reference: "input-content",
    adjustment: [0, 0, 20],
  },
  primary: {
    name: "primary",
    displayName: "primary",
    description:
      "Primar color used for buttons, links, etc. This is most likely your main brand color. Can be used for backgrounds, borders, or text.",
    cssVariable: "--primary",
    example: "bg-primary",
    usage: "bg-primary",
    contrast: ["primary-content"],
    value: "hsl(41, 100%, 51%)",
    type: "main",
  },
  "primary-focus": {
    name: "primary-focus",
    displayName: "primary-focus",
    description: "Primary color in focus/hover states.",
    cssVariable: "--primary-focus",
    example: "bg-primary-focus",
    usage: "bg-primary-focus",
    contrast: ["primary-content"],
    value: "hsl(41, 100%, 45.5%)",
    type: "supporting",
    reference: "primary",
    adjustment: [0, 10, -5],
    dontAccountForDirection: true,
  },
  "primary-subtle": {
    name: "primary-subtle",
    displayName: "primary-subtle",
    description:
      "Subtle primary color. Used for backgrounds, borders, or text. This is always lighter than primary regardless of a light or dark theme.",
    cssVariable: "--primary-subtle",
    example: "bg-primary-subtle",
    usage: "bg-primary-subtle",
    contrast: ["primary-content"],
    value: "hsl(41, 100%, 78.5%)",
    adjustment: [0, 10, 25],
    type: "supporting",
    reference: "primary",
    dontAccountForDirection: true,
  },
  "primary-content": {
    name: "primary-content",
    displayName: "primary-content",
    description: "The text color for content on bg-primary",
    cssVariable: "--primary-content",
    example: "bg-primary-content",
    usage: "bg-primary-content",
    contrast: ["primary"],
    value: "hsl(41, 100%, 0%)",
    type: "supporting",
    reference: "primary",
    adjustment: [0, 10, 95],
  },
  "primary-subtle-content": {
    name: "primary-subtle-content",
    displayName: "primary-subtle-content",
    description: "Used for content on bg-primary-subtle.",
    cssVariable: "--primary-subtle-content",
    example: "bg-primary-subtle-content",
    usage: "text-primary-subtle-content",
    contrast: ["primary-content"],
    value: "hsl(41, 100%, 0%)",
    type: "supporting",
    reference: "primary-subtle",
    adjustment: [0, 10, 95],
  },
  secondary: {
    name: "secondary",
    displayName: "secondary",
    description: "Secondary color. Used for buttons, links, etc.",
    cssVariable: "--secondary",
    example: "bg-secondary",
    usage: "bg-secondary",
    contrast: ["secondary-content"],
    value: "hsl(200, 97%, 41%)",
    type: "main",
  },
  "secondary-focus": {
    name: "secondary-focus",
    displayName: "secondary-focus",
    description: "Secondary color in focus/hover states.",
    cssVariable: "--secondary-focus",
    example: "bg-secondary-focus",
    usage: "bg-secondary-focus",
    contrast: ["secondary-content"],
    value: "hsl(200, 97%, 35.5%)",
    reference: "secondary",
    adjustment: [0, 10, -5],
    dontAccountForDirection: true,
    type: "supporting",
  },
  "secondary-subtle": {
    name: "secondary-subtle",
    displayName: "secondary-subtle",
    description:
      "Subtle secondary color. Used for backgrounds, borders, or text. This is always lighter than secondary regardless of a light or dark theme.",
    cssVariable: "--secondary-subtle",
    example: "bg-secondary-subtle",
    usage: "bg-secondary-subtle",
    contrast: ["secondary-content"],
    value: "hsl(200, 97%, 68.5%)",
    adjustment: [0, 10, 25],
    type: "supporting",
    reference: "secondary",
    dontAccountForDirection: true,
  },
  "secondary-subtle-content": {
    name: "secondary-subtle-content",
    displayName: "secondary-subtle-content",
    description: "Used for content on bg-secondary-subtle.",
    cssVariable: "--secondary-subtle-content",
    example: "bg-secondary-subtle-content",
    usage: "text-secondary-subtle-content",
    contrast: ["secondary-content"],
    value: "hsl(200, 97%, 0%)",
    type: "supporting",
    reference: "secondary-subtle",
    adjustment: [0, 10, 95],
  },
  "secondary-content": {
    name: "secondary-content",
    displayName: "secondary-content",
    description: "The text color for content on bg-secondary",
    cssVariable: "--secondary-content",
    example: "bg-secondary-content",
    usage: "bg-secondary-content",
    contrast: ["secondary"],
    value: "hsl(200, 97%, 100%)",
    type: "supporting",
    reference: "secondary",
    adjustment: [0, 10, 95],
  },
  info: {
    name: "info",
    displayName: "info",
    description:
      "Info color. Used for alerts, badges, etc. Usually a shade of blue.",
    cssVariable: "--info",
    example: "bg-info",
    usage: "bg-info",
    contrast: ["info-content"],
    value: "hsl(212, 50%, 40%)",
    type: "main",
  },
  "info-focus": {
    name: "info-focus",
    displayName: "info-focus",
    description:
      "Info color in focus/hover states. Usually a shade of blue and darker than info.",
    cssVariable: "--info-focus",
    example: "bg-info-focus",
    usage: "bg-info-focus",
    contrast: ["info-content"],
    value: "hsl(212, 50%, 34.5%)",
    type: "supporting",
    reference: "info",
    adjustment: [0, 10, -5],
    dontAccountForDirection: true,
  },
  "info-subtle": {
    name: "info-subtle",
    displayName: "info-subtle",
    description:
      "Subtle info color. Used for backgrounds, borders, or text. Usually a shade of blue and is always lighter than info regardless of a light or dark theme.",
    cssVariable: "--info-subtle",
    example: "bg-info-subtle",
    usage: "bg-info-subtle",
    contrast: ["info-content"],
    value: "hsl(212, 50%, 67.5%)",
    adjustment: [0, 10, 25],
    type: "supporting",
    reference: "info",
  },
  "info-subtle-content": {
    name: "info-subtle-content",
    displayName: "info-subtle-content",
    description: "Used for content on bg-info-subtle.",
    cssVariable: "--info-subtle-content",
    example: "bg-info-subtle-content",
    usage: "text-info-subtle-content",
    contrast: ["info-content"],
    value: "hsl(212, 50%, 0%)",
    type: "supporting",
    reference: "info-subtle",
    adjustment: [0, 10, 95],
  },
  "info-content": {
    name: "info-content",
    displayName: "info-content",
    description: "The text color for content on bg-info",
    cssVariable: "--info-content",
    example: "bg-info-content",
    usage: "bg-info-content",
    contrast: ["info"],
    value: "hsl(212, 50%, 100%)",
    type: "supporting",
    reference: "info",
    adjustment: [0, 10, 95],
  },
  danger: {
    name: "danger",
    displayName: "danger",
    description:
      "Danger color. Used for alerts, badges, errors, etc. Usually a shade of red.",
    cssVariable: "--danger",
    example: "bg-danger",
    usage: "bg-danger",
    contrast: ["danger-content"],
    value: "hsl(0, 75%, 42%)",
    type: "main",
  },
  "danger-focus": {
    name: "danger-focus",
    displayName: "danger-focus",
    description:
      "Danger color in focus/hover states. Usually a shade of red and darker than danger.",
    cssVariable: "--danger-focus",
    example: "bg-danger-focus",
    usage: "bg-danger-focus",
    contrast: ["danger-content"],
    value: "hsl(0, 75%, 36.5%)",
    type: "supporting",
    reference: "danger",
    adjustment: [0, 10, -5],
    dontAccountForDirection: true,
  },
  "danger-subtle": {
    name: "danger-subtle",
    displayName: "danger-subtle",
    description:
      "Subtle danger color. Used for backgrounds, borders, or text. Usually a shade of red and is always lighter than danger regardless of a light or dark theme.",
    cssVariable: "--danger-subtle",
    example: "bg-danger-subtle",
    usage: "bg-danger-subtle",
    contrast: ["danger-content"],
    value: "hsl(0, 75%, 69.5%)",
    type: "supporting",
    adjustment: [0, 10, 25],
    reference: "danger",
  },
  "danger-subtle-content": {
    name: "danger-subtle-content",
    displayName: "danger-subtle-content",
    description: "Used for content on bg-danger-subtle.",
    cssVariable: "--danger-subtle-content",
    example: "bg-danger-subtle-content",
    usage: "text-danger-subtle-content",
    contrast: ["danger-content"],
    value: "hsl(0, 75%, 0%)",
    type: "supporting",
    reference: "danger-subtle",
    adjustment: [0, 10, 95],
  },
  "danger-content": {
    name: "danger-content",
    displayName: "danger-content",
    description: "The text color for content on bg-danger",
    cssVariable: "--danger-content",
    example: "bg-danger-content",
    usage: "bg-danger-content",
    contrast: ["danger"],
    value: "hsl(0, 75%, 100%)",
    type: "supporting",
    adjustment: [0, 10, 95],
    reference: "danger",
  },
  success: {
    name: "success",
    displayName: "success",
    description:
      "Success color. Used for alerts, badges, etc. Usually a shade of green.",
    cssVariable: "--success",
    example: "bg-success",
    usage: "bg-success",
    contrast: ["success-content"],
    value: "hsl(159, 61%, 41%)",
    type: "main",
  },
  "success-focus": {
    name: "success-focus",
    displayName: "success-focus",
    description:
      "Success color in focus/hover states. Usually a shade of green and darker than success.",
    cssVariable: "--success-focus",
    example: "bg-success-focus",
    usage: "bg-success-focus",
    contrast: ["success-content"],
    value: "hsl(159, 61%, 35.5%)",
    type: "supporting",
    reference: "success",
    adjustment: [0, 10, -5],
    dontAccountForDirection: true,
  },
  "success-subtle": {
    name: "success-subtle",
    displayName: "success-subtle",
    description:
      "Subtle success color. Used for backgrounds, borders, or text. Usually a shade of green and is always lighter than success regardless of a light or dark theme.",
    cssVariable: "--success-subtle",
    example: "bg-success-subtle",
    usage: "bg-success-subtle",
    contrast: ["success-content"],
    value: "hsl(159, 61%, 16%)",
    adjustment: [0, 10, 25],
    type: "supporting",
    reference: "success",
  },
  "success-subtle-content": {
    name: "success-subtle-content",
    displayName: "success-subtle-content",
    description: "Used for content on bg-success-subtle.",
    cssVariable: "--success-subtle-content",
    example: "bg-success-subtle-content",
    usage: "text-success-subtle-content",
    contrast: ["success-content"],
    value: "hsl(159, 61%, 100%)",
    type: "supporting",
    reference: "success-subtle",
    adjustment: [0, 10, 95],
  },
  "success-content": {
    name: "success-content",
    displayName: "success-content",
    description: "The text color for content on bg-success",
    cssVariable: "--success-content",
    example: "bg-success-content",
    usage: "bg-success-content",
    contrast: ["success"],
    value: "hsl(159, 61%, 0%)",
    adjustment: [0, 10, 95],
    type: "supporting",
    reference: "success",
  },
  warning: {
    name: "warning",
    displayName: "warning",
    description:
      "Warning color. Used for alerts, badges, etc. Usually a shade of yellow.",
    cssVariable: "--warning",
    example: "bg-warning",
    usage: "bg-warning",
    contrast: ["warning-content"],
    value: "hsl(49, 95%, 53%)",
    type: "main",
  },
  "warning-focus": {
    name: "warning-focus",
    displayName: "warning-focus",
    description:
      "Warning color in focus/hover states. Usually a shade of yellow and darker than warning.",
    cssVariable: "--warning-focus",
    example: "bg-warning-focus",
    usage: "bg-warning-focus",
    contrast: ["warning-content"],
    value: "hsl(49, 95%, 47.5%)",
    type: "supporting",
    reference: "warning",
    adjustment: [0, 10, -5],
    dontAccountForDirection: true,
  },
  "warning-subtle": {
    name: "warning-subtle",
    displayName: "warning-subtle",
    description:
      "Subtle warning color. Used for backgrounds, borders, or text. Usually a shade of yellow and is always lighter than warning regardless of a light or dark theme.",
    cssVariable: "--warning-subtle",
    example: "bg-warning-subtle",
    usage: "bg-warning-subtle",
    contrast: ["warning-content"],
    value: "hsl(49, 95%, 28%)",
    adjustment: [0, 10, 25],
    type: "supporting",
    reference: "warning",
  },
  "warning-subtle-content": {
    name: "warning-subtle-content",
    displayName: "warning-subtle-content",
    description: "Used for content on bg-warning-subtle.",
    cssVariable: "--warning-subtle-content",
    example: "bg-warning-subtle-content",
    usage: "text-warning-subtle-content",
    contrast: ["warning-content"],
    value: "hsl(49, 95%, 100%)",
    type: "supporting",
    reference: "warning-subtle",
    adjustment: [0, 10, 95],
  },
  "warning-content": {
    name: "warning-content",
    displayName: "warning-content",
    description: "Warning content contrast color",
    cssVariable: "--warning-content",
    example: "bg-warning-content",
    usage: "bg-warning-content",
    contrast: ["warning"],
    value: "hsl(49, 95%, 0%)",
    adjustment: [0, 10, 95],
    type: "supporting",
    reference: "warning",
  },
};
