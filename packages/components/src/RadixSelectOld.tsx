import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { Button } from "./ButtonOld";

export type Item = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type Group = {
  groupLabel: string;
  items: Item[];
};

export type Items = Item[] | Group[];

export const RadixSelect = ({
  items,
  className,
  buttonClassName,
  placeholder = "Select",
  showSelectedValue = true,
  selected,
  setSelected,
  onValueChange,
}: {
  items: Items;
  className?: string;
  buttonClassName?: string;
  placeholder?: string;
  showSelectedValue?: boolean;
  selected?: Item;
  setSelected?: (item: Item) => void;
  onValueChange?: (e: string) => void;
}) => {
  return (
    <Select.Root
      defaultValue="granola"
      // value={selected?.value}
      onValueChange={(e) => {
        if (onValueChange) {
          onValueChange(e);
        }
        if (setSelected) {
          // Check if the items is an array of type Group
          if (Array.isArray(items) && items[0].hasOwnProperty("items")) {
            // If it is, then we need to find the item in the array of groups
            // @ts-ignore
            const group = items.find((group: Group) =>
              group.items.find((item) => item.value === e)
            );

            const item = group?.items.find((item: Item) => item.value === e);
            setSelected(item as Item);
          } else {
            // If it's not an array of groups, then we can just find the item in the array of items
            // @ts-ignore
            const item = items.find((item) => item.value === e);
            setSelected(item as Item);
          }
        }
      }}
    >
      <Select.Trigger className="SelectTrigger">
        <div className="flex gap-1">
          <Select.Icon className="SelectIcon">
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
        </div>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent bg-overlay text-on-surface p-1 rounded-md">
          <Select.ScrollUpButton className="SelectScrollButton flex justify-center ">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            {items.map((item, index) => {
              if ("groupLabel" in item) {
                return (
                  <>
                    <Select.Group className="" key={index}>
                      <Select.Label className="SelectLabel text-on-surface-1 px-4 text-sm mt-2">
                        {item.groupLabel}
                      </Select.Label>
                      {item.items.map((item, itemIdx) => (
                        <SelectItem item={item} key={itemIdx} />
                      ))}
                    </Select.Group>
                    {index !== items.length - 1 && (
                      <Select.SelectSeparator className="SelectSeparator h-[1px] bg-primary opacity-50 mt-2" />
                    )}
                  </>
                );
              } else {
                return <SelectItem item={item} key={index} />;
              }
            })}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton flex justify-center ">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = ({ item }: { item: Item }) => {
  return (
    <Select.Item
      value={item.value}
      className=" relative  flex items-center px-4 py-1 rounded-md text-sm hover:bg-primary hover:text-on-primary hover:cursor-pointer"
      disabled={item.disabled}
    >
      <Select.ItemIndicator className="SelectItemIndicator absolute left-0 top-1/2 -translate-y-1/2">
        <CheckIcon />
      </Select.ItemIndicator>
      <Select.ItemText>{item.label}</Select.ItemText>
    </Select.Item>
  );
};
