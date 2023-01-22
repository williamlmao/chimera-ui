import { Callout } from 'nextra-theme-docs'

# Installation

This assumes you already have a React project with Tailwind configured.

1. `npm install chimera-tw`
2. Extend your Tailwind configuration like so:

<Callout emoji="📌">
 This configuration will be converted to a plugin in the future!
</Callout>
```js
/** @type {import('tailwindcss').Config} */

module.exports = {
important: true,
content: [
"./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
"./components/**/*.{js,ts,jsx,tsx}",
"./node_modules/chimera-tw/dist/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
transitionProperty: {
width: "width",
},
colors: {
base: "var(--base-1)",
"base-1": "var(--base-1)",
"base-2": "var(--base-2)",
"base-3": "var(--base-3)",
"base-content": "var(--base-content-1)",
"base-content-1": "var(--base-content-1)",
"base-content-2": "var(--base-content-2)",
"base-content-3": "var(--base-content-3)",
"base-content-contrast": "var(--base-content-contrast)",
line: "var(--line)",
overlay: "var(--overlay-1)",
"overlay-1": "var(--overlay-1)",
"overlay-2": "var(--overlay-2)",
"overlay-3": "var(--overlay-3)",
"overlay-content": "var(--overlay-content-1)",
"overlay-content-1": "var(--overlay-content-1)",
"overlay-content-2": "var(--overlay-content-2)",
"overlay-content-3": "var(--overlay-content-3)",
"overlay-content-contrast": "var(--overlay-content-contrast)",
input: "var(--input)",
"input-content": "var(--input-content)",
primary: "var(--primary)",
"primary-focus": "var(--primary-focus)",
"primary-subtle": "var(--primary-subtle)",
"primary-content": "var(--primary-content)",
"primary-content-contrast": "var(--primary-content-contrast)",
secondary: "var(--secondary)",
"secondary-focus": "var(--secondary-focus)",
"secondary-subtle": "var(--secondary-subtle)",
"secondary-content": "var(--secondary-content)",
"secondary-content-contrast": "var(--secondary-content-contrast)",
info: "var(--info)",
"info-focus": "var(--info-focus)",
"info-subtle": "var(--info-subtle)",
"info-content": "var(--info-content)",
"info-content-contrast": "var(--info-content-contrast)",
success: "var(--success)",
"success-focus": "var(--success-focus)",
"success-subtle": "var(--success-subtle)",
"success-content": "var(--success-content)",
"success-content-contrast": "var(--success-content-contrast)",
error: "var(--error)",
"error-focus": "var(--error-focus)",
"error-subtle": "var(--error-subtle)",
"error-content": "var(--error-content)",
"error-content-contrast": "var(--error-content-contrast)",
warning: "var(--warning)",
"warning-focus": "var(--warning-focus)",
"warning-subtle": "var(--warning-subtle)",
"warning-content": "var(--warning-content)",
"warning-content-contrast": "var(--warning-content-contrast)",
},
borderWidth: {
"width-theme": "var(--theme-border-width)",
},
borderColor: {
"color-theme": "var(--line)",
},
borderRadius: {
theme: "var(--theme-rounded)",
"theme-md": "var(--theme-rounded-md)",
"theme-lg": "var(--theme-rounded-lg)",
},
boxShadow: {
theme: "var(--theme-shadow)",
"theme-lg": "var(--theme-shadow-lg)",
"theme-sm": "var(--theme-shadow-sm)",
"theme-xs": "var(--theme-shadow-xs)",
"theme-md": "var(--theme-shadow-md)",
},
outlineWidth: {
"width-theme": "var(--theme-border-width)",
},
outlineColor: {
"color-theme": "var(--line)",
},
divideWidth: {
theme: "var(--theme-border-width)",
},
divideColor: {
theme: "var(--theme-border-color)",
},
},
},
plugins: [],
};

````

1. Define and add your theme to a global css file like so:
<Callout emoji="🧰">
 The plan is to create a theme builder tool!
</Callout>

```css
@layer base {
  :root,
  html[data-theme="tresleches"] {
    --base-1: hsl(60, 20%, 98%);
    --base-2: hsl(54, 38%, 95%);
    --base-3: hsl(51, 59%, 93%);
    --base-content-1: hsl(0, 0%, 25%);
    --base-content-2: hsl(0, 0%, 45%);
    --base-content-3: hsl(0, 0%, 75%);
    --base-content-contrast: hsl(0, 0%, 100%);
    --overlay-1: hsl(60, 20%, 95%);
    --overlay-2: hsl(60, 5%, 96%);
    --overlay-3: hsl(49, 50%, 94%);
    --overlay-content-1: hsl(0, 0%, 25%);
    --overlay-content-2: hsl(0, 0%, 40%);
    --overlay-content-3: hsl(0, 0%, 60%);
    --overlay-content-contrast: hsl(0, 0%, 100%);
    --input: hsl(0, 0%, 100%);
    --input-content: hsl(0, 0%, 45%);
    --line: hsl(0, 0%, 80%);
    --primary: hsl(0, 57%, 36%);
    --primary-focus: hsl(0, 68%, 28%);
    --primary-subtle: hsl(0, 27%, 76%);
    --primary-content: hsl(0, 0%, 100%);
    --primary-content-contrast: hsl(0, 0%, 0%);
    --secondary: hsl(210, 64%, 36%);
    --secondary-focus: hsl(210, 76%, 26%);
    --secondary-subtle: hsl(210, 41%, 73%);
    --secondary-content: hsl(0, 0%, 100%);
    --secondary-content-contrast: hsl(0, 0%, 0%);
    --info: hsl(212, 50%, 40%);
    --info-focus: hsl(212, 77%, 31%);
    --info-subtle: hsl(212, 75%, 75%);
    --info-content: hsl(0, 0%, 100%);
    --info-content-contrast: hsl(212, 98%, 16%);
    --success: hsl(159, 61%, 41%);
    --success-focus: hsl(159, 90%, 24%);
    --success-subtle: hsl(159, 42%, 72%);
    --success-content: hsl(0, 0%, 100%);
    --success-content-contrast: hsl(159, 76%, 16%);
    --error: hsl(0, 75%, 42%);
    --error-focus: hsl(354, 90%, 27%);
    --error-subtle: hsl(355, 80%, 81%);
    --error-content: hsl(0, 0%, 100%);
    --error-content-contrast: hsl(355, 93%, 17%);
    --warning: hsl(47, 95%, 55%);
    --warning-focus: hsl(47, 100%, 45%);
    --warning-subtle: hsl(48, 42%, 84%);
    --warning-content: hsl(0, 0%, 15%);
    --warning-content-contrast: hsl(0, 0%, 15%);
    --theme-border-width: 10px;
    --theme-rounded: 0.25rem;
    --theme-rounded-sm: 0rem;
    --theme-rounded-md: 0rem;
    --theme-rounded-lg: 0rem;
    --theme-rounded-xl: 0rem;
    --theme-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);
    --theme-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --theme-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    --theme-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --theme-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    --theme-shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  }
````

4. Import and use a component

```
import {Button} from 'chimera-tw'

<Button> Click Me! </Button>
```

5. Add a theme switcher (optional)

The first theme you put after `:root` is used by default. If your site does not use themes, this is all you need. If you want to use multiple themes, add them into your css file. To switch the themes, you just need to update the `data-theme` attribute on `<html>`. You can do this however you like, but Chimera does provide a `ThemeSwitcher` component.
