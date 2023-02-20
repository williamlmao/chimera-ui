"use client";
import { ColorType } from "@/utils/colors";
import { Popover } from "@chimera-ui/components";
import clsx from "clsx";
import { ChromePicker } from "react-color";
export const ColorSelector = ({
  color,
  handleColorChange,
  step,
}: {
  color: ColorType;
  handleColorChange: (color: string, value: string) => void;
  step: number;
}) => {
  const handleChange = (pickerValue: any) => {
    handleColorChange(color.name, pickerValue.hex);
  };

  return (
    <div className="group relative px-2 py-1 w-full">
      <Popover.Root>
        <div className="flex items-center gap-2 ">
          <Popover.Trigger
            className={clsx(
              "@[50px]:block h-6 w-6  border-line border-2 rounded-full",
              `bg-${color.name} hover:bg-${color.name} hover:opacity-90`
            )}
          ></Popover.Trigger>
          <div
            className={clsx(
              "text-xs hidden @[50px]:flex w-full justify-between",
              {
                "font-bold": color.type === "main",
              }
            )}
          >
            <div className="">{color.name}</div>
            <div className="whitespace-nowrap">{color.value}</div>
          </div>
        </div>

        <Popover.Portal>
          <Popover.Content className="p-1 w-64">
            <Popover.Arrow />
            <div className="flex flex-col w-full">
              <div className="my-2">
                <div className="text-center font-bold text-lg">
                  {color.name}
                </div>
                <div className="text-center font-medium text-sm">
                  {" "}
                  {color.description}
                </div>
              </div>

              <ChromePicker
                color={color.value}
                onChange={handleChange}
                className="w-full h-full shadow-none rounded-md"
              />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
