import { useState } from "react";
import { SketchPicker } from "react-color";

const TestPage = ({ destructuredProp }: { destructuredProp: string }) => {
  const [color, setColor] = useState("#ffffff"); // define a state for the color prop

  // setState when onChange event triggered
  const handleChange = (color: any) => {
    setColor(color.hex);
  };

  const handleChangeComplete = (color: any) => {
    console.log("handleChangeComplete", color);
  };

  return (
    <SketchPicker
      color={color}
      onChange={handleChange}
      onChangeComplete={handleChangeComplete}
    />
  );
};

export default TestPage;
