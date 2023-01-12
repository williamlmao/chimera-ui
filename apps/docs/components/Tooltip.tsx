export const Tooltip = ({ message }: { message: string }) => {
  return (
    <div className="hidden absolute -top-2 -translate-y-[100%] left-1/2 -translate-x-1/2 group-hover:block">
      <div className="p-1 bg-neutral-800 text-neutral-200  text-sm text-center rounded-theme ">
        {message}
      </div>
      <div className="bg-neutral-800 h-2 w-2 rotate-45 -translate-y-1/2 left-1/2 absolute -translate-x-1/2"></div>
    </div>
  );
};
