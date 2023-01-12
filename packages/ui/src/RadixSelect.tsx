import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { Button } from "./Button";

export const RadixSelect = () => (
  <Select.Root>
    <Select.Trigger className="SelectTrigger" aria-label="Food">
      <Button>
        <Select.Value
          placeholder=""
          className="bg-red-500 text-green-400 p-24"
        />
        <Select.Icon className="SelectIcon ">
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
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
            />
          </svg>
        </Select.Icon>
      </Button>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport bg-blue-500 p-4">
          <Select.Group>
            <Select.Label className="SelectLabel">Fruits</Select.Label>
            <Select.Item value={"apple"}>
              <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
              <Select.ItemText className="bg-red-500">Apple</Select.ItemText>
            </Select.Item>
            <Select.Item value={"banana"}>
              <Select.ItemIndicator className="SelectItemIndicator">
                xx
              </Select.ItemIndicator>
              <Select.ItemText className="bg-red-500">Banana</Select.ItemText>
            </Select.Item>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
