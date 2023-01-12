import { useState } from "react";
import { Select, Items } from "./Select";

export const ThemePicker = () => {
  const themes: Items = [
    {
      label: <span>🧸 Playful</span>,
      value: "playful",
    },
    {
      label: <span>✒️ Minimal</span>,
      value: "minimal",
    },
    {
      label: <span>Gallery</span>,
      value: "gallery",
    },
  ];

  const [selected, setSelected] = useState(themes[0]);

  return (
    <Select items={themes} selected={selected} setSelected={setSelected} />
  );
};
