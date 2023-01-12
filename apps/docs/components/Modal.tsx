import { Dialog } from "@headlessui/react";
import { handleTailwindClassOverrides } from "../utils/utils";

export const Modal = ({
  isOpen,
  setIsOpen,
  title,
  children,
  className,
}: {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-30 flex items-center justify-center overflow-y-auto backdrop-blur-sm shadow-theme-lg"
    >
      <Dialog.Panel
        className={`${handleTailwindClassOverrides(
          "bg-base-200 p-12 rounded-md",
          className
        )}`}
      >
        <Dialog.Title className="text-center text-on-primary-900 text-sm pb-2 border-b-2 ">
          {title}
        </Dialog.Title>
        {children}
      </Dialog.Panel>
    </Dialog>
  );
};
