import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = ({ children }: { children: React.ReactNode }) => {
  return (
    <AspectRatioPrimitive.Root ratio={16 / 9}>{}</AspectRatioPrimitive.Root>
  );
};

const Root = AspectRatioPrimitive.Root;
Root.displayName = "AspectRatio.Root";
AspectRatio.Root = Root;

export { AspectRatio };
