# About Chimera

Chimera is an opinionated UI library designed for React and Tailwind. This library was created because I wanted to be able to use the same components across different projects, without having to re-style them over and over. At the same time, I didn't want to lock myself into any design decisions so any default styles can be overwritten with normal Tailwind utility classes.

- **Accessible** - Chimera uses Radix Primitives under the hood for interactive components like accordions and selects
- **Themeable & Reusable** - Chimera components come pre-styled with a semantic color system (such as bg-primary). This makes it easy to switch themes and re-use components across apps. Similar to Daisy UI.
- **Customizable** - Components come with sensible default styles that look great out of the box, but can be completely customized with Tailwind utility classes (we use tailwind-merge under the hood to handle this). The result is faster development and cleaner code!

### Benefits

- Cleaner JSX
- Build faster
- Use the same components across apps and styles

## How Chimera Works Under the Hood

In order to provide out of the box styles and full Tailwind customization, Chimera components use tailwind-merge to allow you to write new styles and overide the defaults in one go.

```typescript
import { twMerge } from "tailwind-merge";

export const ExampleComponent = ({className}:{className:string}) => {
  return <div className={twMerge("p-2 bg-base", className)>I'm an example!</div>
}

```

When you use the component

```typescript
import { ExampleComponent } from "chimera-tw";

<ExampleComponent className="p-4" />;
// p-4 will override the p-2 in the block above, final style resulting in "p-4 bg-base"
```
