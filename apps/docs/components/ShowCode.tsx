// Import raw text of DaisySelect.tsx
// @ts-ignore
import ButtonRaw from "!!raw-loader!../../../packages/ui/src/Button.tsx";

export const ShowCode = ({
  destructuredProp,
}: {
  destructuredProp: string;
}) => {
  return <div>{ButtonRaw}</div>;
};
