// Select.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "chimera-tw";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Select> = (args) => {
  const [selected, setSelected] = React.useState(args.items[0]);
  return <Select {...args} selected={selected} setSelected={setSelected} />;
};

export const Primary = Template.bind({});

Primary.args = {
  items: [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
  ],
};

export const Customized = Template.bind({});

Customized.args = {
  items: [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
  ],
  containerClassName: "w-64",
  buttonClassName: "text-xs bg-yellow-300 rounded-none",
  listClassName: "bg-yellow-100 rounded-none",
  listItemClassName: "text-xs",
  listItemActiveClassName: "bg-yellow-400 text-on-surface-1",
};
