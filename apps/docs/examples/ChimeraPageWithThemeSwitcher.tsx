import { useState } from "react";
import { Items, Select } from "../components/Select";

const themes: Items = [
  {
    label: <span>Playful</span>,
    value: "playful",
  },
  {
    label: <span>🌕 Minimal</span>,
    value: "minimal",
  },
];

export const ChimeraPageWithThemeSwitcher = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(themes[0]);
  return (
    <div className={theme.value}>
      <div className="bg-base-100 p-12 relative flex-center">
        <Select
          items={themes}
          selected={theme}
          setSelected={setTheme}
          className="w-[200px] text-xs absolute top-2 right-2"
        />
        {children}
      </div>
    </div>
  );
};
