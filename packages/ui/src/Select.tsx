import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

export interface Item {
  label: React.ReactNode;
  value: string;
}

export type Items = Item[];

export const Select = ({
  items,
  selected = { label: "No items available", value: "" },
  setSelected,
  containerClassName,
  buttonClassName,
  listClassName,
  listItemClassName,
  listItemActiveClassName,
}: {
  items: Items;
  selected: Item;
  setSelected: (item: Item) => void;
  containerClassName?: string;
  buttonClassName?: string;
  listClassName?: string;
  listItemClassName?: string;
  listItemActiveClassName?: string;
}): JSX.Element => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={twMerge("relative", containerClassName)}>
        <Listbox.Button
          className={twMerge(
            "rounded-theme relative bg-input w-full cursor-default hover:cursor-pointer py-2 pl-3 pr-10 text-left",
            buttonClassName
          )}
        >
          <span className="block truncate text-on-surface">
            {selected?.label}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-on-surface"
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
          <Listbox.Options
            className={twMerge(
              "absolute rounded-theme bg-overlay py-1 shadow-theme sm:text-sm z-30 w-full",
              listClassName
            )}
          >
            {items ? (
              items?.map((item, itemIdx) => (
                <Listbox.Option
                  key={item.value + itemIdx}
                  className={({ active }) => {
                    return twMerge(
                      `relative cursor-default hover:cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active
                          ? twMerge(
                              "bg-primary text-on-primary",
                              listItemActiveClassName
                            )
                          : "text-on-surface-1"
                      }`,
                      listItemClassName
                    );
                  }}
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
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 whitespace-nowrap">
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
                  twMerge(
                    `relative cursor-default select-none py-2 pl-10 pr-4 bg-base-200`,
                    listItemClassName
                  )
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
