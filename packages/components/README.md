<!-- Write the readme for Chimera TW -->

# Chimera UI

To see the full documentation, visit [chimera-ui.com](https://chimera-ui.com).

## Features

- Fully accessible components, with Radix Primitives under the hood.
- Includes additinal components beyond Radix, such as Button and Input.
- Components come pre-styled. Styles can be easily overwritten with Tailwind (Chimera uses tw-merge under the hood).
- Semantic color system built in. No more guessing what color to use, just use the same semantic color names across all your projects.
- Theme generator that quickly generates CSS themes for you.
- Tailwind plugin to keep tailwind.config.js nice and clean.
- Tree-shakeable. Use named imports without worrying about bundle-size!

## Installation

See [official docs](https://chimera-ui.com) for more information

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
