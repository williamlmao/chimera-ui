// Popover.stories.ts|tsx

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Popover } from "chimera-tw";
import fs from "fs";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Popover> = (args) => {
  return <Popover {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  buttonChildren: "Click me",
  popoverChildren: (
    <div>
      <div className="text-2xl">Title</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl eget aliquam tincidunt, nunc nisl aliquam elit, nec lacinia nunc
        nisl eget dolor. Sed euismod, nisl eget aliquam tincidunt, nunc nisl
        aliquam elit, nec lacinia nunc nisl eget dolor.
      </p>
    </div>
  ),
};

export const WithoutArrow = Template.bind({});
WithoutArrow.args = {
  popoverArrowClassName: "hidden",
  buttonChildren: "Click me",
  buttonClassName: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  popoverClassName: "bg-gray-100",
  popoverChildren: (
    <div>
      <div className="text-2xl">Title</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl eget aliquam tincidunt, nunc nisl aliquam elit, nec lacinia nunc
        nisl eget dolor. Sed euismod, nisl eget aliquam tincidunt, nunc nisl
        aliquam elit, nec lacinia nunc nisl eget dolor.
      </p>
    </div>
  ),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  buttonChildren: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  ),
  popoverChildren: (
    <div>
      <div className="text-2xl">Title</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl eget aliquam tincidunt, nunc nisl aliquam elit, nec lacinia nunc
        nisl eget dolor. Sed euismod, nisl eget aliquam tincidunt, nunc nisl
        aliquam elit, nec lacinia nunc nisl eget dolor.
      </p>
    </div>
  ),
};

const Button = fs.readFileSync("./Button.tsx");

console.log(Button);

export const CustomSource = Template.bind({});
CustomSource.parameters = {
  docs: {
    source: {
      code: Button,
      language: "yml",
      type: "auto",
    },
  },
};
