import { Fragment } from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Link from "next/link";
import { Button } from "@chimera-ui/components";
import { Code } from "@/components/Code";
import { Logo } from "@/components/Logo";
import {
  Download,
  Palette,
  Key,
  Component,
  Sprout,
  HelpCircle,
  Coins,
} from "lucide-react";

// Used to generate the sidebar. The key is the sidebar title. This might be problematic when changing page titles in _meta.json and forgetting to update it here, but I can't think of a better way to do it for now.
const pages = {
  Introduction: {
    icon: <Sprout />,
  },
  Installation: {
    icon: <Download />,
  },
  "Key Concepts": {
    icon: <Key />,
  },
  Components: {
    icon: <Component />,
  },
  "Theme Generator": {
    icon: <Palette />,
  },
  FAQ: {
    icon: <HelpCircle />,
  },
  Credits: {
    icon: <Coins />,
  },
  Accordion: {
    radix: true,
  },
  "Alert Dialog": {
    radix: true,
  },
  "Aspect Ratio": {
    radix: true,
  },
  Avatar: {
    radix: true,
  },
  Button: {
    radix: false,
  },
  Checkbox: {
    radix: true,
  },
  Collapsible: {
    radix: true,
  },
  "Context Menu": {
    radix: true,
  },
  Dialog: {
    radix: true,
  },
  "Dropdown Menu": {
    radix: true,
  },
  Input: {
    radix: true,
  },
  Label: {
    radix: true,
  },
  Menubar: {
    radix: true,
  },
  "Navigation Menu": {
    radix: true,
  },
  Popover: {
    radix: true,
  },
  Tooltip: {
    radix: true,
  },
  Progress: {
    radix: true,
  },
  "Radio Group": {
    radix: true,
  },
  Select: {
    radix: true,
  },
  Switch: {
    radix: true,
  },
  Tabs: {
    radix: true,
  },
  Toggle: {
    radix: true,
  },
};

const config = {
  logo: <Logo />,
  docsRepositoryBase:
    "https://github.com/williamlmao/chimera-ui/blob/main/apps/docs",
  project: {
    link: "https://github.com/williamlmao/chimera-ui",
  },
  toc: {
    extraContent: <Fragment></Fragment>,
  },
  main: ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();

    return (
      <main className="">
        <h1 className="mt-2 text-5xl font-bold tracking-tight">
          {frontMatter?.title}
        </h1>
        <p className="text-xl my-4">{frontMatter?.description}</p>
        {frontMatter?.radix && (
          <div className="flex gap-4">
            <Link href={frontMatter.radix.link}>
              <Button
                className="rounded-xl whitespace-nowrap flex items-center gap-2 h-6"
                size="xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
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
                Radix Docs
              </Button>
            </Link>
            <Link href={frontMatter.radix.link}>
              <Button
                className="rounded-xl whitespace-nowrap flex items-center gap-2 h-6"
                size="xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
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
                API Reference
              </Button>
            </Link>
          </div>
        )}

        {frontMatter?.component && (
          <div className="my-4">
            <h2 className="nx-font-semibold nx-tracking-tight nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">
              Import
            </h2>

            <div className="my-4">
              <Code>{`import { ${frontMatter.component} } from '@chimera-ui/components'`}</Code>
            </div>
          </div>
        )}
        <div className="">{children}</div>
      </main>
    );
  },
  footer: {
    text: (
      <span>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/williamlmao"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          @williamlmao
        </a>
        . View the source on{" "}
        <a
          href="https://github.com/williamlmao/chimera-ui"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Github
        </a>
      </span>
    ),
  },
  banner: {
    key: "pre-alpha",
    text: "You're looking at an early version of Chimera. All feedback is welcome, please submit through Github Issues!",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Chimera",
    };
  },
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath } = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();
    return (
      <>
        <meta
          property="og:url"
          content={`https://https://chimera-ui.com${asPath || ""}`}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "A beautiful, accessible, and customizable UI library for React + Tailwind"
          }
        />
        <meta
          property="og:image"
          content={frontMatter.image || "/chimera-og-image.png"}
        />
        <meta property="og:title" content="Chimera UI" />
      </>
    );
  },
  sidebar: {
    titleComponent({ title }) {
      return (
        <div className="flex items-center gap-2">
          {pages?.[title]?.icon && (
            <div className="w-[25px] h-[25px]  flex items-center border border-gray-500 rounded-md p-1">
              {pages[title].icon}
            </div>
          )}
          {title}
          {pages?.[title]?.radix && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
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
          )}
        </div>
      );
    },
  },
  // ...
};

export default config;
