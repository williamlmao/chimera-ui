"use client";
import { useState } from "react";

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`h-full ${
        isOpen ? "w-[300px]" : "w-[50px]"
      }  bg-base-100 text-accent-300 border-r-theme relative transition-width ease-in-out duration-200`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6 top-4 right-4 absolute hover:cursor-pointer transition-transform ease-in-out duration-200 transform ${
          !isOpen && "rotate-180"
        } `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        />
      </svg>

      {children}
    </div>
  );
};
