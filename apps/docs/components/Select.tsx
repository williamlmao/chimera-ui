"use client";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export interface Item {
  label: React.ReactNode;
  value: string;
}

export type Items = Item[];

export const Select = ({
  items,
  selected,
  setSelected,
  containerClassName = "relative mt-1 bg-base-0 rounded-theme shadow-theme",
  buttonClassName = "",
  listClassName,
  listItemClassName,
}: {
  items: Items;
  selected: Item;
  setSelected: (item: Item) => void;
  containerClassName?: string;
  buttonClassName?: string;
  listClassName?: string;
  listItemClassName?: string;
}): JSX.Element => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1 bg-base-0 rounded-theme shadow-theme">
        <Listbox.Button className="relative w-full cursor-default hover:cursor-pointer py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-base-0 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-accent-300">
          <span className="block truncate text-on-base">{selected?.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-primary-700"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto rounded-theme bg-base-0 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
            {items ? (
              items?.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default hover:cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-accent-100 text-on-accent-900"
                        : "text-on-base"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block whitespace-nowrap ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-on-base whitespace-nowrap">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))
            ) : (
              <Listbox.Option
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 bg-base-200`
                }
                value={null}
              >
                <span
                  className={`block ${
                    selected ? "font-medium" : "font-normal"
                  }`}
                >
                  No items available
                </span>
              </Listbox.Option>
            )}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
