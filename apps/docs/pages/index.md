# About Chimera

Chimera is an opinionated UI library designed for React and Tailwind. This library was created because I wanted to be able to use the same components across different projects, without having to re-style them over and over. At the same time, I didn't want to lock myself into any design decisions so any default styles can be overwritten with normal Tailwind utility classes.

- **Accessible** - Chimera uses Radix Primitives under the hood for interactive components like accordions and selects
- **Themeable & Reusable** - Chimera components come pre-styled with a semantic color system (such as bg-primary). This makes it easy to switch themes and re-use components across apps. Similar to Daisy UI.
- **Customizable** - Components come with sensible default styles that look great out of the box, but can be completely customized with Tailwind utility classes (we use tailwind-merge under the hood to handle this). The result is faster development and cleaner code!
