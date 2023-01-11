import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type MenuItem = {
  label: string;
  path?: string;
  onClick?: Function;
  icon?: React.ReactNode;
};

export const Menu = ({
  children,
  items,
  buttonClassName,
  menuItemClassName,
  menuContainerClassName,
}: {
  children: React.ReactNode;
  items: MenuItem[];
  buttonClassName?: string;
  menuItemClassName?: string;
  menuContainerClassName?: string;
}) => {
  return (
    <HeadlessMenu as="div" className="relative inline-block text-left">
      <div>
        <HeadlessMenu.Button className="inline-flex w-full justify-center rounded-theme-md px-4 py-2 text-sm font-medium text-on-base hover:text-primary-500">
          {children}
        </HeadlessMenu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <HeadlessMenu.Items className="absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map((item) => (
            <div className="px-1 py-1 ">
              <HeadlessMenu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-accent-500 text-on-accent-100"
                        : "text-on-base"
                    } group flex gap-2 w-full items-center rounded-md px-4 py-2 text-sm whitespace-nowrap`}
                  >
                    {item.icon} {item.label}
                  </button>
                )}
              </HeadlessMenu.Item>
            </div>
          ))}
        </HeadlessMenu.Items>
      </Transition>
    </HeadlessMenu>
  );
};
