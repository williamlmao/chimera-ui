import {
  colors,
  ColorsType,
  ColorType,
  setSupportingColors,
} from "@/utils/colors";
import {
  Button,
  DropdownMenu,
  Input,
  Select,
  Tooltip,
} from "@chimera-ui/components";
import Color from "color";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Code } from "../Code";
import { ColorSelector } from "../ThemeGenerator/ColorSelectorWithName";
import { ButtonExample } from "./ButtonExample";
import { TodoExample } from "./ToDoExample";
import { motion, useInView } from "framer-motion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

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
      <ColorSystem />
      <Accessibility />
    </div>
  );
};

const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headlineText = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Hero = ({
  handleColorChange,
  themeColors,
}: {
  handleColorChange: (color: string, value: string) => void;
  themeColors: ColorsType;
}) => {
  return (
    <div className="flex flex-col md:flex-row  justify-between  w-full gap-8 md:h-[calc(100vh_-_100px)] md:-mt-12 items-center relative">
      <div className="font-bold text-left w-full md:w-1/2 flex flex-col justify-between relative">
        <div className="">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={headlineText}
              className="text-center md:text-left text-2xl md:font-extrabold md:text-5xl opcacity-0 transition-opacity opacity-100"
            >
              Infinitely customizable,
            </motion.h1>
            <motion.h1
              variants={headlineText}
              className="text-center md:text-left text-2xl md:font-extrabold md:text-5xl  "
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Theme-adaptive,
              </span>
            </motion.h1>
            <motion.h1
              variants={headlineText}
              className="text-center md:text-left text-2xl md:font-extrabold md:text-5xl "
            >
              Importable,
            </motion.h1>
            <motion.h1
              variants={headlineText}
              className="text-center md:text-left text-2xl md:font-extrabold md:text-5xl "
            >
              Accessible,
            </motion.h1>
            <motion.h1
              variants={headlineText}
              className="text-center md:text-left text-2xl md:font-extrabold md:text-5xl "
            >
              React + Tailwind components
            </motion.h1>
          </motion.div>

          <motion.div
            className="font-light mt-6 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            {`Chimera not only allows you to build beautiful and accessible
            interfaces faster than ever before, but it makes re-using Tailwind
            styles across your projects much easier. Free & open source. Works
            great with Next.js!`}
          </motion.div>
          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <Link href="/docs/install">
              <Button className="mt-8 ">Get Started</Button>
            </Link>
            <Button className="mt-8" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full  md:w-1/2">
        <div className="relative w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 3 }}
          >
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <TodoExample />
            <Tooltip.Provider>
              <Tooltip.Root open>
                <Tooltip.Trigger asChild>
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
                </Tooltip.Trigger>

                <Tooltip.Content
                  side="left"
                  className="bg-secondary text-secondary-content"
                >
                  <Tooltip.Arrow className="fill-secondary" />

                  <span>Change a color!</span>
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        Learn More
        <ChevronDownIcon className="animate-bounce" />
      </motion.div>
    </div>
  );
};

export const NoRestylingNeeded = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 items-center w-full">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-2">
          <Code>
            {`import { Button } from "@chimera-ui/components";

export const ButtonExample = () => {
  return (
    <Button>
      Boop
    </Button>
  );
};
`}
          </Code>
          <ButtonExample />
        </div>
      </div>
      <motion.div className="w-full md:w-1/2 px-6">
        <h1 className=" text-2xl md:text-4xl font-bold">
          Importable & tree-shakeable components that look great out of the box,
          no re-styling necessary
        </h1>
        <p className="my-6">
          {`No more copy, pasting, and restyling, like you have to from other
        Tailwind libraries. Just import it and it will instantly pick up the
        theme you’ve set.`}
        </p>
      </motion.div>
    </div>
  );
};

export const Customize = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center w-full">
      <div className="w-full md:w-1/2 px-6">
        <h1 className="text-2xl md:text-4xl font-bold">
          Customize with the Tailwind, like you would with any other HTML
          element
        </h1>
        <p className="my-6">
          {`No need to learn a new library-specific styling stystem. All you need is the Tailwind you already know and love.`}
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-2">
          <Code>
            {`import { Button } from "@chimera-ui/components";

export const ButtonExample = () => {
  return (
    <Button className="w-full h-18 text-2xl bg-gradient-to-r from-primary to-secondary">
      BOOOOOOOOOOOP
    </Button>
  );
};
`}
          </Code>
          <div className="w-full rounded-md bg-base-2 flex items-center justify-center flex-1 p-4">
            <Button className="w-full h-18 text-2xl bg-gradient-to-r from-primary to-secondary">
              BOOOOOOOOOOOP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ColorSystem = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
      <div className="w-full">
        <div className="flex flex-col gap-2">
          <CreditCardForm />
        </div>
      </div>
      <div className="w-full px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          A color for every situation
        </h1>
        <p className="my-6 text-center md:text-left">
          {`Chimera themes uses an intuitive semantic color system which uses color modifiers to make it easy to pick the right color in any situation. Putting text on a background of primary? Just use primary-content. Start by picking 3 colors, and the theme generator will take care of generating the 58 variations you might need to reach for.`}
        </p>
      </div>
    </div>
  );
};

export const Accessibility = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center w-full">
      <div className="w-full md:w-1/2 px-6">
        <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-2">
          Out of the box accessibility{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
              fill="currentcolor"
            ></path>
            <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
            <path
              d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
              fill="currentcolor"
            ></path>
          </svg>
        </h1>

        <p className="my-6">
          Chimera uses{" "}
          <a href="https://www.radix-ui.com/" rel="noreferrer" target="_blank">
            Radix Primitives
          </a>{" "}
          under the hood, which means you get all of the awesome features that
          come with it. WAI-ARIA compliant, keyboard navigable, focus
          management, screen reader compatibility, collision awareness, and
          more.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-2">
          <div className="w-full rounded-md bg-base-2 flex items-center justify-center p-4 h-[150px]">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button className="text-base-content relative" variant="ghost">
                  <Menu />
                  <span className="absolute top-1 right-0 flex h-5 w-5 animate-bounce items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-45"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                  </span>
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="w-56">
                <DropdownMenu.Label>My Account</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>

                    <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>

                    <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>

                    <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>

                    <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent>
                        <DropdownMenu.Item>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>Message</span>
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                  <DropdownMenu.Item>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Team</span>

                    <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item disabled>
                  <Cloud className="mr-2 h-4 w-4" />
                  <span>API</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>

                  <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CreditCardForm = () => {
  const months = [
    { label: "January", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];

  const years = [
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
    { label: "2028", value: "2028" },
  ];

  return (
    <form className="w-full md:w-[540px] rounded-md border border-line bg-base p-8 shadow-md relative">
      <Tooltip.Provider>
        <Tooltip.Root open>
          <Tooltip.Trigger asChild>
            <div className="absolute top-4 right-4"></div>
          </Tooltip.Trigger>
          <Tooltip.Content side="top">
            <Tooltip.Arrow />
            <span>bg-base</span>
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
      <div className="mb-4">
        <Tooltip.Provider>
          <Tooltip.Root open>
            <Tooltip.Trigger asChild>
              <span className="mb-8 text-2xl font-bold text-base-content">
                Credit Card Info
              </span>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <Tooltip.Arrow />
              <span>bg-base-content</span>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <label className="text-base-content-2">Card Number</label>
      <Tooltip.Provider>
        <Tooltip.Root open>
          <Tooltip.Trigger asChild>
            <Input type="text" className="mt-2" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            <Tooltip.Arrow />
            <span>bg-input</span>
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>

      <div className="mt-4 flex justify-between gap-4 md:gap-8 ">
        <div className="w-full">
          <label className="text-base-content-2">Expiration</label>

          <div className="flex gap-2 mt-2">
            <Select.Root>
              <Select.Trigger className="w-18 md:w-28">
                <Select.Value placeholder="Month" />
                <Select.Icon />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  {months.map((month) => {
                    return (
                      <Select.Item key={month.value} value={month.value}>
                        {month.label}
                      </Select.Item>
                    );
                  })}
                </Select.Group>
              </Select.Content>
            </Select.Root>
            <Select.Root>
              <Tooltip.Provider>
                <Tooltip.Root open>
                  <Tooltip.Trigger asChild>
                    <Select.Trigger className="w-18 md:w-28">
                      <Select.Value placeholder="Year" />
                      <Select.Icon />
                    </Select.Trigger>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="top" className="invisible md:visible">
                    <Tooltip.Arrow />
                    <span>click in for bg-overlay</span>
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>

              <Select.Content>
                <Select.Group>
                  {years.map((year) => {
                    return (
                      <Select.Item key={year.value} value={year.value}>
                        {year.label}
                      </Select.Item>
                    );
                  })}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
        </div>
        <div className="w-full">
          <Tooltip.Provider>
            <Tooltip.Root open>
              <Tooltip.Trigger asChild>
                <label className="text-base-content-2">CVV</label>
              </Tooltip.Trigger>
              <Tooltip.Content side="top">
                <Tooltip.Arrow />
                <span>text-base-content-2</span>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>

          <Input type="text" placeholder="***" className="mt-2" />
        </div>
      </div>
      <div className="flex gap-12 items-center mt-4">
        <Tooltip.Provider>
          <Tooltip.Root open>
            <Tooltip.Trigger asChild>
              <p className="text-base-content-3 text-[11px]">
                {` This is some fake fine print. If you're reading this, I hope you
                enjoy using Chimera! If you do or don't, drop me a line. Would
                love to know what you think.`}
              </p>
            </Tooltip.Trigger>
            <Tooltip.Content side="bottom">
              <Tooltip.Arrow />
              <span>text-base-content-3</span>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Tooltip.Provider>
          <Tooltip.Root open>
            <Tooltip.Trigger asChild>
              <Button className="float-left">Submit</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="bottom">
              <Tooltip.Arrow />
              <span>bg-primary text-primary-content</span>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </form>
  );
};
