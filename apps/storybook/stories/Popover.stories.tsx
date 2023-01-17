// Popover.stories.ts|tsx

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Popover } from "chimera-tw";
import { FaceIcon } from "@radix-ui/react-icons";
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
  return (
    // <Popover buttonChildren="hi">yo yo </Popover>
    <Popover.Root>
      <Popover.Trigger className="text-2xl ">
        <FaceIcon />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="flex flex-col justify-center">
          <div className="text-2xl">Emojis</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl eget aliquam tincidunt, nunc nisl aliquam elit, nec
            lacinia nunc nisl eget dolor. Sed euismod, nisl eget aliquam
            tincidunt, nunc nisl aliquam elit, nec lacinia nunc nisl eget dolor.
          </p>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
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
