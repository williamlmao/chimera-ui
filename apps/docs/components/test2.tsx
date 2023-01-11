const themes = [
  {
    label: <span>☼ Light</span>,
    value: "light",
  },
  {
    label: <span>☾ Dark</span>,
    value: "dark",
  },
  {
    label: <span>🧛 Dracula</span>,
    value: "black",
  },
];

export const Example = ({
  className = "bg-blue-300 border-2 border-blue-500 w-full h-full p-12",
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return <div className={className}>{children}</div>;
};
