import { CheckIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Popover } from "./Popover";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";
// This component is super hacky.. using local storage to store the theme, and then using useEffect to set the theme on mount

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

const ThemeButton = ({
  theme,
  setSelectedTheme,
  selectedTheme,
  className,
}: {
  theme: Item;
  setSelectedTheme: Function;
  selectedTheme: Item;
  className?: string;
}) => {
  return (
    <RadioGroup.Item
      className={twMerge(
        `text-sm rounded-theme relative text-left hover:bg-primary-subtle w-full pl-4 ${
          theme.value === selectedTheme.value ? "bg-overlay-2 font-bold" : ""
        }`,
        className
      )}
      value={theme.value}
      type="button"
      onClick={() => {
        setSelectedTheme(theme);
      }}
    >
      {theme.value === selectedTheme.value && (
        <CheckIcon className="absolute left-0 top-1/2 -translate-y-1/2" />
      )}{" "}
      {theme.label}
    </RadioGroup.Item>
  );
};

const themes = [
  {
    value: "tresleches",
    label: "Tres Leches",
  },
  {
    value: "granola",
    label: "Granola",
  },
  {
    value: "elegant",
    label: "Elegant",
  },
  {
    value: "cool",
    label: "Cool",
  },
  {
    value: "chimeratheme",
    label: "Chimera",
  },
];

export const ThemePicker = ({ className }: { className: string }) => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("theme");
    // Set the theme if it exists in localStorage
    if (themeFromLocalStorage) {
      setSelectedTheme({
        value: themeFromLocalStorage,

        label:
          themeFromLocalStorage.charAt(0).toUpperCase() +
          themeFromLocalStorage.slice(1),
      });
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme.value);
    localStorage.setItem("theme", selectedTheme.value);
  }, [selectedTheme]);

  return (
    <Popover
      onClick={() => {
        // get the current theme from localStorage
        const themeFromLocalStorage = localStorage.getItem("theme");
        // set the theme if it exists in localStorage
        if (themeFromLocalStorage) {
          setSelectedTheme({
            value: themeFromLocalStorage,
            label:
              themeFromLocalStorage.charAt(0).toUpperCase() +
              themeFromLocalStorage.slice(1),
          });
        }
      }}
      buttonContent={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
          />
        </svg>
      }
      className={className}
    >
      <RadioGroup.Root>
        {themes.map((theme) => {
          return (
            <ThemeButton
              key={theme.value}
              theme={theme}
              setSelectedTheme={setSelectedTheme}
              selectedTheme={selectedTheme}
              className={className}
            />
          );
        })}
      </RadioGroup.Root>
    </Popover>
  );
};
