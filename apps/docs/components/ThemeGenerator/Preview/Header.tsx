/* eslint-disable @next/next/no-img-element */

import { DropDownExample } from "./DropdownExample";
import { Sprout } from "lucide-react";
import { Input } from "@chimera-ui/components";

export const Header = () => {
  return (
    <div className="bg-base w-full p-4 border-b border-line font-bold text-base-content flex justify-between items-center">
      <div className="text-2xl flex items-center gap-1">
        logo <Sprout className="text-primary" />
      </div>
      <div className="">
        <Input type="text" placeholder="Search" className="w-64 h-8" />
      </div>
      <div className="flex items-center">
        <DropDownExample />
      </div>
    </div>
  );
};
