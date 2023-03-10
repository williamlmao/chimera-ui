import {
  colors,
  ColorsType,
  ColorType,
  setSupportingColors,
} from "@/utils/colors";
import { Button } from "@chimera-ui/components";
import Color from "color";
import { useEffect, useState } from "react";
import { ColorSelector } from "../ThemeGenerator/ColorSelector";
import { TodoExample } from "./ToDoExample";

const Hero = ({
  handleColorChange,
  themeColors,
}: {
  handleColorChange: (color: string, value: string) => void;
  themeColors: ColorsType;
}) => {
  return (
    <div className="flex flex-col md:flex-row  justify-between  mt-8 md:mt-12 w-full gap-8">
      <div className="font-bold text-left w-full md:w-1/2 flex flex-col justify-between">
        <div className="">
          <h1 className="text-center md:text-left text-2xl md:font-extrabold md:text-4xl ">
            Infinitely customizable, theme-adaptive, Tailwind-ready components
          </h1>
          <div className="font-light mt-4">
            Chimera UI is a collection of React components that are built to be
            infinitely customizable and theme-adaptive. Chimera UI is built on
            top of Tailwind CSS and is designed to be used with{" "}
          </div>
        </div>
        <div className="flex divide-x-2 justify-around">
          <div className="flex items-center gap-2 px-2">
            <ColorSelector
              color={themeColors.base as ColorType}
              handleColorChange={handleColorChange}
            />
            <span className=" font-medium">Base</span>
          </div>
          <div className="flex items-center gap-2 px-2">
            <ColorSelector
              color={themeColors.primary as ColorType}
              handleColorChange={handleColorChange}
            />
            <span className=" font-medium">Primary</span>
          </div>
          <div className="flex items-center gap-2 px-2">
            <ColorSelector
              color={themeColors.secondary as ColorType}
              handleColorChange={handleColorChange}
            />
            <span className=" font-medium">Secondary</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full  md:w-1/2">
        <div className="relative w-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-input rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="relative">
            <TodoExample />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LandingPage = () => {
  const [themeColors, setThemeColors] = useState(colors);

  useEffect(() => {
    const supportingColors = setSupportingColors(themeColors);
    setThemeColors(supportingColors);
  }, []);

  useEffect(() => {
    // For every key in theme, set a CSS variable
    Object.keys(themeColors).forEach((key) => {
      document.documentElement.style.setProperty(
        `--${key}`,
        themeColors[key as keyof typeof themeColors].value
      );
    });
  }, [themeColors]);

  useEffect(
    () => () => {
      // Reset CSS variables on unmount
      Object.keys(themeColors).forEach((key) => {
        document.documentElement.style.setProperty(`--${key}`, "");
      });
    },
    []
  );

  const handleColorChange = (color: string, value: string) => {
    const updatedColor = Color(value);
    const newThemeColors = {
      ...themeColors,
      [color]: {
        ...themeColors[color as keyof typeof themeColors],
        value: updatedColor.hsl().string(0),
      },
    };
    const supportingColors = setSupportingColors(newThemeColors, color);
    setThemeColors(supportingColors);
  };
  return (
    <div className="flex flex-col items-center h-screen p-4 md:p-8">
      <Hero handleColorChange={handleColorChange} themeColors={themeColors} />
    </div>
  );
};
