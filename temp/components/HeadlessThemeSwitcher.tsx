"use client";
import { Listbox } from "@headlessui/react";

interface Item {
  label: string;
  value: string;
}

type Items = Item[];

/**
 * Extended version of Headless UI's Select component. Supports oui themes.
 */
export const Select = ({
  items,
  selected,
  setSelected,
  className,
}: {
  items: Items;
  selected: Item;
  setSelected: (item: Item) => void;
  className?: string;
}): JSX.Element => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button className="relative w-full cursor-default hover:cursor-pointer rounded-theme bg-base-0 py-2 pl-3 pr-10 text-left shadow-theme focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-base-0 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-accent-300">
        <span className="block truncate">{selected?.label}</span>
      </Listbox.Button>
      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-theme bg-base-0 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
        {items?.map((item, itemIdx) => (
          <Listbox.Option
            key={itemIdx}
            className={({ active }) =>
              `relative cursor-default hover:cursor-pointer select-none py-2 pl-10 pr-4 ${
                active ? "bg-accent-100 text-accent-900" : "text-on-base"
              }`
            }
            value={item}
          >
            <span
              className={`block truncate ${
                selected ? "font-medium" : "font-normal"
              }`}
            >
              {item.label}
            </span>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
