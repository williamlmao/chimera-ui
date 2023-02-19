import { ThemePicker } from "chimera-tw";
import { ColorType, ColorsType } from "@/utils/colors";
import { colors } from "@/utils/colors";

const ColorTableItem = ({ color }: { color: ColorType }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 flex items-center">
        <div
          className={`w-8 h-8 mx-auto rounded-theme border-2 border-line ${color.example}`}
        ></div>
      </div>
      <div className="p-2 col-span-3">
        <div className="">
          <div className="font-semibold text-base-content">{color.name}</div>
          <div className="text-xs text-base-content-2">{color.usage}</div>
        </div>
      </div>
      <div className="p-2 text-xs col-span-5">{color.description}</div>
      <div className="p-2 col-span-3">{color.cssVariable}</div>
    </div>
  );
};

export const ColorTable = ({ colorPrefix }: { colorPrefix: string }) => {
  return (
    <div className="w-full text-left border-[1px] border-line rounded-lg border-separate bg-base text-base-content relative px-4 py-2 my-4">
      <div className="absolute top-4 right-4">
        <ThemePicker className="" />
      </div>

      <div className="border-[1px] border-base w-full">
        <div className="grid grid-cols-12 justify-start">
          <div className="p-2 col-span-1"></div>
          <div className="p-2 col-span-3">Name & Usage</div>
          <div className="p-2 col-span-5">Description</div>
          <div className="p-2 col-span-3">CSS Variable</div>
        </div>
      </div>
      <div className="divide-y-[1px] divide-line">
        {Object.keys(colors).map((colorName) => {
          if (colorName.startsWith(colorPrefix)) {
            return (
              <ColorTableItem
                key={colorName}
                color={colors[colorName as keyof ColorsType]}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
