import {
  colors,
  ColorsType,
  ColorType,
  setSupportingColors,
} from "@/utils/colors";
import Color from "color";
import { useEffect, useState } from "react";
import { ColorSelector } from "../ThemeGenerator/ColorSelectorWithName";
import { TodoExample } from "./ToDoExample";
import { Button } from "@chimera-ui/components";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code } from "../Code";
import { ButtonExample } from "./ButtonExample";

const Hero = ({
  handleColorChange,
  themeColors,
}: {
  handleColorChange: (color: string, value: string) => void;
  themeColors: ColorsType;
}) => {
  return (
    <div className="flex flex-col md:flex-row  justify-between  mt-8 md:mt-12 w-full gap-8">
      <div className="font-bold text-left w-full md:w-1/2 flex flex-col justify-between relative">
        <div className="">
          <h1 className="text-center md:text-left text-4xl md:font-extrabold md:text-5xl opcacity-0 transition-opacity opacity-100">
            Infinitely customizable,
          </h1>
          <h1 className="text-center md:text-left text-4xl md:font-extrabold md:text-5xl  ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Theme-adaptive,
            </span>
          </h1>
          <h1 className="text-center md:text-left text-4xl md:font-extrabold md:text-5xl ">
            Importable,
          </h1>
          <h1 className="text-center md:text-left text-4xl md:font-extrabold md:text-5xl ">
            Accessible,
          </h1>
          <h1 className="text-center md:text-left text-4xl md:font-extrabold md:text-5xl ">
            React + Tailwind components
          </h1>
          <div className="font-light mt-6 text-center md:text-left">
            Chimera components look great out of the box, but can be easily
            customized with Tailwind, allowing you to build beautiful and
            accessible interfaces quickly. Free & open source.
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/docs/install">
              <Button className="mt-8 ">Get Started</Button>
            </Link>
            <Button className="mt-8" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full  md:w-1/2">
        <div className="relative w-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="relative">
            <TodoExample />
            <div className="flex sm:divide-x-2 justify-around mt-4 rounded-md py-2 bg-base-2 opacity-90">
              <ColorSelector
                color={themeColors.base as ColorType}
                handleColorChange={handleColorChange}
              />

              <ColorSelector
                color={themeColors.primary as ColorType}
                handleColorChange={handleColorChange}
              />

              <ColorSelector
                color={themeColors.secondary as ColorType}
                handleColorChange={handleColorChange}
              />
            </div>
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
    <div className="flex flex-col gap-24 items-center p-4 md:p-8">
      <Hero handleColorChange={handleColorChange} themeColors={themeColors} />
      <NoRestylingNeeded />
      <Customize />
    </div>
  );
};

export const NoRestylingNeeded = () => {
  return (
    <div className="flex gap-4">
      <div className="w-1/2">
        <div className="flex flex-col gap-2">
          <Code>
            {`import { Button } from "@chimera-ui/components";

export const ButtonExample = () => {
  return (
    <Button>Boop</Button>
  );
};
`}
          </Code>
          <ButtonExample />
        </div>
      </div>
      <div className="w-1/2 px-6">
        <h1 className="text-4xl font-bold">
          Importable & tree-shakeable components that look great out of the box,
          no re-styling necessary
        </h1>
        <p className="my-6">
          {`No more copy, pasting, and restyling, like you have to from other
        Tailwind libraries. Just import it and it will instantly pick up the
        theme you’ve set.`}
        </p>
      </div>
    </div>
  );
};

export const Customize = () => {
  return (
    <div className="flex gap-4">
      <div className="w-1/3 px-6">
        <h1 className="text-4xl font-bold">Customize with the Tailwind</h1>
        <p className="my-6">
          {`No need to learn a new library-specific styling stystem. All you need is the Tailwind you already know and love.`}
        </p>
      </div>
      <div className="w-2/3">
        <div className="flex flex-col gap-2">
          <Code>
            {`import { Button } from "@chimera-ui/components";

export const ButtonExample = () => {
  return (
    <Button className="w-full h-24 text-4xl">BOOOOOOOOOOOP</Button>
  );
};
`}
          </Code>
          <div className="w-full rounded-md bg-gray-800 flex items-center justify-center flex-1 p-4">
            <Button className="w-full h-24 text-4xl">BOOOOOOOOOOOP</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
