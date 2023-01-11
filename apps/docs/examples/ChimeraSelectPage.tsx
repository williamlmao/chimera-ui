import { useState } from "react";
import { Items, Select } from "../components/Select";

const themes: Items = [
  {
    label: <span>☼ Light</span>,
    value: "light",
  },
  {
    label: <span>☾ Dark</span>,
    value: "dark",
  },
  {
    label: <span>🥾 Park Ranger</span>,
    value: "park-ranger",
  },
];

export const ChimeraSelectPage = () => {
  const [theme, setTheme] = useState(themes[0]);
  return (
    <div className={theme.value}>
      <div className="bg-base-100 p-12">
        <h1 className="text-on-base text-2xl">Example Page</h1>
        <Select items={themes} selected={theme} setSelected={setTheme} />
      </div>
    </div>
  );
};
