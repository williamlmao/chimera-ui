---
title: "Installation"
---

import { Callout } from 'nextra-theme-docs'
import Link from 'next/link'

This guide assumes you already have a React project with Tailwind configured.

1. `npm install @chimera-ui/components @chimera-ui/tw-plugin`
2. Modify your `tailwind.config.js` to include:

   - `"./node_modules/@chimera-ui/components/dist/**/*.{js,mjs}",` in the `content` array
   - `require("@chimera-ui/tw-plugin")` in the `plugins` array
   - ```js
     module.exports = {
       content: [
         "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
         "./components/**/*.{js,ts,jsx,tsx}",
         "./node_modules/@chimera-ui/components/dist/**/*.{js,mjs}", // This line is important! If you don't include this, Chimera's styles will be purged
         ,
       ],
       plugins: [
         require("@chimera-ui/tw-plugin"), // This is important! This extends your tailwind theme to consume the CSS variables.
       ],
     };
     ```

3. Use the <Link href="/docs/theme" className="text-primary underline">theme generator</Link> to generate CSS themes. Add the CSS variables to your global css file.

<details>
<summary>Click this dropdown for an example of what your CSS file should look like. The first theme you put after `:root` is used by default. If your site does not use multiple themes, this is all you need. To switch between multiple themes, you just need to update the `data-theme` attribute on `<html>` using javascript.</summary>

```

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
:root,
html[data-theme="tresleches"] {
--base: hsl(60, 20%, 98%);
--base-2: hsl(54, 38%, 95%);
--base-3: hsl(51, 59%, 93%);
--base-content: hsl(0, 0%, 25%);
--base-content-2: hsl(0, 0%, 45%);
--base-content-3: hsl(0, 0%, 75%);
--base-content-contrast: hsl(0, 0%, 100%);
--overlay: hsl(60, 20%, 95%);
--overlay-2: hsl(60, 5%, 96%);
--overlay-3: hsl(49, 50%, 94%);
--overlay-focus: hsl(49, 50%, 94%);
--overlay-content: hsl(0, 0%, 25%);
--overlay-content-2: hsl(0, 0%, 40%);
--overlay-content-3: hsl(0, 0%, 60%);
--overlay-content-contrast: hsl(0, 0%, 100%);
--input: hsl(0, 0%, 100%);
--input-content: hsl(0, 0%, 45%);
--input-content-2: hsl(0, 0%, 30%);
--line: hsl(51, 59%, 83%);
--line-focus: hsl(51, 59%, 83%);
--primary: hsl(0, 57%, 36%);
--primary-focus: hsl(0, 68%, 28%);
--primary-subtle: hsl(0, 27%, 76%);
--primary-subtle-content: hsl(0, 0%, 15%);
--primary-content: hsl(0, 0%, 100%);
--primary-content-contrast: hsl(0, 0%, 0%);
--secondary: hsl(210, 64%, 36%);
--secondary-focus: hsl(210, 76%, 26%);
--secondary-subtle: hsl(210, 41%, 73%);
--secondary-content: hsl(0, 0%, 100%);
--secondary-subtle-content: hsl(0, 0%, 15%);
--secondary-content-contrast: hsl(0, 0%, 0%);
--info: hsl(212, 50%, 40%);
--info-focus: hsl(212, 77%, 31%);
--info-subtle: hsl(212, 75%, 75%);
--info-subtle-content: hsl(0, 0%, 15%);
--primary-subtle-content: hsl(0, 0%, 15%);
--info-content: hsl(0, 0%, 100%);
--info-content-contrast: hsl(212, 70%, 10%);
--success: hsl(159, 61%, 41%);
--success-focus: hsl(159, 90%, 24%);
--success-subtle: hsl(159, 42%, 72%);
--success-subtle-content: hsl(0, 0%, 15%);
--success-content: hsl(0, 0%, 100%);
--success-content-contrast: hsl(159, 76%, 16%);
--error: hsl(0, 75%, 42%);
--error-focus: hsl(354, 90%, 27%);
--error-subtle: hsl(355, 80%, 81%);
--error-subtle-content: hsl(0, 0%, 15%);
--error-content: hsl(0, 0%, 100%);
--error-content-contrast: hsl(355, 93%, 17%);
--warning: hsl(47, 95%, 55%);
--warning-focus: hsl(47, 100%, 45%);
--warning-subtle: hsl(48, 42%, 84%);
--warning-subtle-content: hsl(0, 0%, 15%);
--warning-content: hsl(0, 0%, 15%);
--warning-content-contrast: hsl(0, 0%, 15%);
}

html[data-theme="zookeper"] {
--base: #d6c5aa;
--base-2: #c3b091;
--base-3: #b09d7e;
--base-content: hsl(99, 26%, 13%);
--base-content-2: hsl(128, 37%, 15%);
--base-content-3: hsl(128, 42%, 18%);
--base-content-contrast: hsl(200, 100%, 95%);
--overlay: #c8b28e;
--overlay-2: #cab187;
--overlay-3: #ae946b;
--overlay-content: hsl(120, 25%, 14%);
--overlay-content-2: hsl(116, 22%, 14%);
--overlay-content-3: hsl(127, 48%, 25%);
--overlay-content-contrast: hsl(220, 100%, 95%);
--input: #ddccae;
--input-content: #322d25;
--line: #a4844d;
--primary: hsl(104, 17%, 32%);
--primary-focus: hsl(104, 17%, 32%);
--primary-subtle: hsl(103, 6%, 45%);
--primary-content: hsl(0, 0%, 100%);
--primary-content-contrast: hsl(0, 0%, 0%);
--secondary: hsl(25, 81%, 35%);
--secondary-focus: hsl(25, 90%, 24%);
--secondary-subtle: hsl(25, 50%, 53%);
--secondary-content: hsl(280, 100%, 15%);
--secondary-content-contrast: hsl(280, 100%, 95%);
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
}

```

</details>
