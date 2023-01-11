// Import raw text of DaisySelect.tsx
// @ts-ignore
import DaisySelectRaw from "!!raw-loader!../../../packages/ui/src/Button.tsx";

export const ShowCode = ({
  destructuredProp,
}: {
  destructuredProp: string;
}) => {
  return <div>{DaisySelectRaw}</div>;
};
