/* eslint-disable react-hooks/exhaustive-deps */
import { colors, ColorsType, setSupportingColors } from "@/utils/colors";
import { Button } from "@chimera-ui/components";
import { clsx } from "clsx";
import Color from "color";
import { ChevronLeft, Clipboard, ClipboardCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { ColorSelector } from "./ColorSelector";
import { Preview } from "./Preview";
import { RefreshCw } from "lucide-react";

export const ThemeGenerator = () => {
  const [themeColors, setThemeColors] = useState(colors);
  const [step, setStep] = useState(1);
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

  // const handleSupportingColorUpdate = () => {
  //   const supportingColors = setSupportingColors(themeColors);
  //   setThemeColors(supportingColors);
  // };

  const handleColorChange = (color: string, value: string) => {
    const updatedColor = Color(value);
    console.log("color", updatedColor.hsl().string(0));
    const newThemeColors = {
      ...themeColors,
      [color]: {
        ...themeColors[color as keyof typeof themeColors],
        value: updatedColor.hsl().string(0),
      },
    };

    // Update supporting colors if step is 1 without re-rendering
    if (step === 1) {
      const supportingColors = setSupportingColors(newThemeColors, color);
      setThemeColors(supportingColors);
    }

    if (step === 2 || step === 3) {
      setThemeColors(newThemeColors);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:h-[80vh] mt-8 gap-4">
      <Sidebar step={step} setStep={setStep}>
        <div className="flex flex-col gap-1 my-2 overflow-y-auto bg-slate-300 bg-opacity-20 items-center @[50px]:items-start rounded-md">
          {Object.keys(themeColors).map((color) => {
            if (
              step === 1 &&
              themeColors[color as keyof typeof themeColors].type !== "main"
            ) {
              return null;
            }
            return (
              <div className="w-full">
                {themeColors[color as keyof typeof themeColors].type ===
                  "main" &&
                  step === 2 && (
                    <>
                      <div className="h-px w-full bg-line my-4 first:mt-0"></div>
                      <div className="mx-4 mb-2">
                        {themeColors[color as keyof typeof themeColors].type ===
                          "main" &&
                          step === 2 && (
                            <>
                              <Button
                                size="xs"
                                onClick={() => {
                                  const newColors = setSupportingColors(
                                    themeColors,
                                    color
                                  );
                                  setThemeColors(newColors);
                                }}
                                className="text-xs hidden @[50px]:flex w-full"
                              >
                                <RefreshCw className="h-3 w-3 mr-2" /> {color}{" "}
                                supporting colors
                              </Button>
                            </>
                          )}
                      </div>
                    </>
                  )}
                <div
                  key={color}
                  className="flex items-center justify-center @[50px]:justify-between"
                >
                  <ColorSelector
                    color={themeColors[color as keyof typeof themeColors]}
                    step={step}
                    handleColorChange={handleColorChange}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Sidebar>
      <div className="w-full overflow-y-auto rounded-md border border-line bg-slate-300 bg-opacity-20">
        {step === 3 ? (
          <>
            <CopyCss themeColors={themeColors} />
          </>
        ) : (
          <Preview />
        )}
      </div>
    </div>
  );
};

const Sidebar = ({
  children,
  step,
  setStep,
}: {
  children: React.ReactNode;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const stepTitle = {
    1: "Set main colors",
    2: "Adjust supporting colors",
    3: "Copy CSS",
  };

  const stepDescription = {
    1: "Supporting colors will be automatically inferred from the main colors. They might look a little off at this stage, but don't worry. You can tweak them in step 2!",
    2: "Modifying main colors in this step will not automatically change supporting colors. Click the ⟲ button to update them.",
    3: "Make sure to update your tailwind config as well.",
  };

  return (
    <div
      className={clsx(
        " relative flex flex-col transition-all duration-200  @container border-line border gap-2 rounded-md mr-4",
        {
          "w-full md:w-2/5 p-4 max-h-[600px] md:max-h-full": sidebarExpanded,
          "w-[40px] no-scrollbar": !sidebarExpanded,
        }
      )}
    >
      <button
        className="top-2  absolute @[10px]:right-0 @[10px]:translate-x-1/2 right-1/2 translate-x-1/2 shadow-md rounded-full p-1 bg-base"
        onClick={() => {
          setSidebarExpanded(!sidebarExpanded);
        }}
      >
        <ChevronLeft
          className={clsx({
            "h-4 w-4 text-base-content": true,
            "transform rotate-180": !sidebarExpanded,
          })}
        />
      </button>
      <div className=" hidden @[50px]:block">
        <div className="font-bold text-xl mb-2">{`Step ${step} : ${
          stepTitle[step as keyof typeof stepTitle]
        }`}</div>
        <div className="text-sm">
          {stepDescription[step as keyof typeof stepDescription]}
        </div>
      </div>

      {children}
      <div className="gap-4 w-full hidden @[50px]:flex">
        {step > 1 && (
          <Button
            className="hidden @[10px]:block w-full"
            variant="grey"
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Previous
          </Button>
        )}

        <Button
          className="hidden @[10px]:block w-full"
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const CopyCss = ({ themeColors }: { themeColors: ColorsType }) => {
  const [copied, setCopied] = useState(false);
  const codeColors = Object.keys(themeColors).map((color) => {
    return `\t\t--${color}: ${
      themeColors[color as keyof typeof themeColors].value
    };\n`;
  });
  const code = `
  @layer base {
    :root,
    html[data-theme="custom-theme"] {
  ${codeColors.join("")}
     }
    } 
      `;
  return (
    <pre>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
        className="absolute top-2 right-2 text-xs px-2 py-1 rounded-md-md"
      >
        {copied ? (
          <ClipboardCheck className="w-4 h-4" />
        ) : (
          <Clipboard className="w-4 h-4" />
        )}
      </Button>
      <code className="px-8">{code}</code>
    </pre>
  );
};

const CopyTailwindConfig = ({ themeColors }: { themeColors: ColorsType }) => {
  const [copied, setCopied] = useState(false);
  const codeColors = Object.keys(themeColors).map((color) => {
    return `\t\t"${color}": "var(--${color})",\n`;
  });
  const code = `
  module.exports = {
    theme: {
      colors: {
${codeColors.join("")}
      },
    },
  };
      `;
  return (
    <pre>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
        className="absolute top-2 right-2 text-xs px-2 py-1 rounded-md-md"
      >
        {copied ? (
          <ClipboardCheck className="w-4 h-4" />
        ) : (
          <Clipboard className="w-4 h-4" />
        )}
      </Button>
      <code className="px-8">{code}</code>
    </pre>
  );
};
