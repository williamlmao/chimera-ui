import { Button } from "../components/Button.tsx";
import { Test } from "../components/Test.tsx";
import { Callout } from 'nextra-theme-docs'
import { Tab, Tabs } from 'nextra-theme-docs'
import {ChimeraSelectPage} from "../examples/ChimeraSelectPage.tsx"
import {TailwindButtonPlayful} from "../examples/TailwindButtonPlayful.tsx"
import {TailwindButtonLuxury} from "../examples/TailwindButtonLuxury.tsx"
import {ChimeraButton} from "../examples/ChimeraButton.tsx"

# Another UI library? Why?

The goal of this page is NOT to point out issues with other libraries. Its purpose is to justify the existence of Chimera. For every problem I've had, there's a library that solves it. But every library that solves those problems comes with its own.

Here's what I mean. Tailwind does not easily support multiple themes and components aren't easily reusable across projects, so maybe Daisy UI is the solution! But Daisy UI has accessibility issues, so maybe I need to use Headless UI and write styles from scratch with Tailwind. But then I'm right back where I started, and thus Chimera was born (though I'm sure it's going to end up with a lot of its own problems too).

### Tailwind

I love Tailwind so much. But I find myself running into these two issues frequently.

1. If I want to re-use a component in another app, I find myself having to rewrite a lot of styles. A good solution for this problem is a combination of using presets and semantic color names (`bg-primary`), but I have not found a good solution to switch between presets in a light/dark mode.
2. I really dislike having to define dark mode styles inline. Defining `bg-white dark:bg-slate-900` for every component can become really tedious.

<Tabs items={['Tailwind', 'Chimera']}>

<Tab>
When using Tailwind, components are not easily re-usable across multiple projects that require each different styling. The styles need to be re-written.
<br/>
<TailwindButtonPlayful/>

```jsx
<button className="px-4 py-2 rounded-md flex items-center justify-center hover:cursor-pointer w-fit bg-blue-500 dark:bg-blue-300 text-white dark:text-black">
  Button
</button>
```

<TailwindButtonLuxury/>
```jsx
<button className="px-4 py-2 flex items-center justify-center hover:cursor-pointer w-fit bg-black dark:bg-gray-700 text-gold-500 ">
  Button
</button>
```
</Tab>

<Tab>
With Chimera, the same component and JSX can be written the same way but used across apps with different styles.

<ChimeraButton>hi</ChimeraButton>

```jsx
import { Button } from "chimera/Button";

export const Example = () => {
  return (
    <div className="flex-center">
      <Button>Button</Button>
    </div>
  );
};
```

</Tab>

</Tabs>

### Daisy UI

Daisy UI is fantastic for themeing and works well with Tailwind, and many of the themeing/color system ideas in Chimera are borrowed from Daisy UI. However, Daisy has accessibility issues since it is pure css.

### MUI, Mantine, Bootstrap, Chakra.

These component libraries lock you too deep into their design decisions, and were not built to be used with Tailwind. I dislike having to learn the library-specific classes and methods for overriding default styles when I primarily think in Tailwind.

### Flowbite

I like Flowbite because it's purpose built for Tailwind. However, I feel that Flowbite React has lost some of the Tailwind spirit. Many of its components are expecting specific props, such as style, title, size. What I do love about vanilla Flowbite is how they provide the raw JSX for each component. Chimera will provide every example as JSX that you can adapt yourself, wherever you disagree with our design decisions.

```html
<Tabs.Group aria-label="Tabs with underline" style="underline">
  <Tabs.Item title="Profile"> Profile content </Tabs.Item>
  <Tabs.Item active="{true}" title="Dashboard"> Dashboard content </Tabs.Item>
  ...
</Tabs.Group>
<button size="lg">Open</button>
```

### Headless UI

Many components in Chimera are essentially extensions of Headless UI. Chimera just adds theme styles since Headless comes unstyled, and also ships components that are ready to receive data as props.
