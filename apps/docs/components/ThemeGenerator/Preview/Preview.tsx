/* eslint-disable @next/next/no-img-element */
import { Button } from "@chimera-ui/components";
import { AlertDialogExample } from "./AlertDialogExample";
import { Alerts } from "./Alerts";
import { Buttons } from "./Buttons";
import { Card } from "./Card";
import { DropDownExample } from "./DropdownExample";
import { Header } from "./Header";
import { Landing } from "./Landing";
import { SelectExample } from "./SelectExample";

export const Preview = () => {
  return (
    <div className="w-full h-full border-line rounded-md bg-base">
      <Header />
      <div
        className="p-8 bg-base flex flex-col divide-y-2 divide-line"
        id="body"
      >
        <div className="pt-8 pb-16">
          <Landing />
        </div>

        <div className="py-8">
          <div className="text-xl font-bold mb-4 text-base-content">
            Text Examples
          </div>
          <div className="text-base-content-2 font-bold text-2xl mb-2">
            Title (text-base-content-2)
          </div>
          <div className="text-base-content-3 text-sm">
            11/11/2040 (text-base-content-3)
          </div>
          <p className="text-base-content mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquet, nunc nisl aliquet nisl, nec
            tincidunt nisl nunc vel nunc. Sed condimentum, nisl ut aliquam
            aliquet, nunc nisl aliquam nisl, nec tincidunt nisl nunc vel nunc.
            (text-base-content).
          </p>
          <div className="flex gap-2">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="py-8">
          <div className="text-xl font-bold mb-4 text-base-content">
            Overlays (Click them)
          </div>
          <div className="flex gap-8 items-center">
            <DropDownExample />
            <AlertDialogExample />
            <SelectExample />
          </div>
        </div>

        <div className="py-8">
          <div className="text-xl font-bold mb-4 text-base-content">
            Buttons
          </div>
          <Buttons />
        </div>

        <div className="py-8">
          <div className="text-xl font-bold mb-4 text-base-content">
            Callouts
          </div>
          <Alerts />
        </div>
      </div>
    </div>
  );
};
