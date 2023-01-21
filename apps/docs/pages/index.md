import { Button, Showcase } from "chimera-tw";

# About Chimera

Chimera is an opinionated UI library designed for React and Tailwind. This library was created because I wanted to be able to use the same components across different projects, without having to re-style them over and over. At the same time, I didn't want to lock myself into any design decisions so any default styles can be overwritten with normal Tailwind utility classes.

### Why Chimera?

- The same JSX can be re-used across multiple projects or themes without needing to re-write styles
- Fully customizable with Tailwind
- Instead of writing two classes `bg-white dark:bg-black`, define your themes with only one custom Tailwind utility class `bg-base`
- Cleaner JSX
- Faster development
- Accessibility - WAI ARIA complaint, keyboard navigation, focus management, screen reader tested

### Example

Change the theme in the preview below. See how the Button can take on different styles with the same JSX? The second Button is an example of how the default styles can be easily overwritten.
<Showcase>
<Showcase.Preview>
<Button>Click Me</Button>
<Button className="text-xs w-64 rounded-full">Click Me</Button>
</Showcase.Preview>
</Showcase>

## Key Features

### Themeable & Reusable

Chimera extends Tailwind by adding a semantic color system with which components come pre-styled with. This makes it easy to switch themes and re-use components across apps. Learn more: [Color System](colors).

### Accessibility

Chimera uses Radix Primitives under the hood for interactive components like accordions and selects. Learn more: [Accessibility](accessibility).

### Customizable

Components come with sensible default styles that look great out of the box, but can be completely customized with Tailwind utility classes. Chimera uses [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) under the hood to handle this. Learn more: [Customization](customization)

## Inspiration

This library is called Chimera, because it's a blend of code and ideas that I love about other open-source UI libraries.

- Themeing from Daisy UI
- Accessible / Headless components from Radix UI & Headless UI
- Bootstrap, MUI, Chakra for their works out of the box approach
