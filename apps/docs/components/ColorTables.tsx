import { ThemePicker } from "chimera-tw";

type Color = {
  name: string;
  description: string;
  cssVariable: string;
  example: string;
  usage: string;
  contrast?: string[];
};

export const colorSystem = {
  base: [
    {
      name: "base / base-1",
      description: "Main background color",
      cssVariable: "--base",
      example: "bg-base",
      usage: "bg-base",
      contrast: ["base-content-1", "base-content-2", "base-content-3"],
    },
    {
      name: "base-2",
      description: "Background for closer content, like cards",
      cssVariable: "--base-2",
      example: "bg-base-2",
      usage: "bg-base-2",
    },
    {
      name: "base-3",
      description:
        "Used to provide additional contrast / layers. Should be rarely used.",
      cssVariable: "--base-3",
      example: "bg-base-3",
      usage: "bg-base-3",
    },
    {
      name: "base-content / base-content-1",
      description: "Main text color",
      cssVariable: "--base-content-1",
      example: "bg-base-content-1",
      usage: "bg-base-content-1",
    },
    {
      name: "base-content-2",
      description:
        "Text color used to provide contrast from base-content-1, usually for headers or labels",
      cssVariable: "--base-content-2",
      example: "bg-base-content-2",
      usage: "bg-base-content-2",
    },
    {
      name: "base-content-3",
      description:
        "Text color used to provide contrast from base-content-1 and 2, usually for small details. Should be rarely used",
      cssVariable: "--base-content-3",
      example: "bg-base-content-3",
      usage: "bg-base-content-3",
    },
    {
      name: "base-content-inverse",
      description: "Base content contrast color",
      cssVariable: "--base-content-inverse",
      example: "bg-base-content-inverse",
      usage: "bg-base-content-inverse",
    },
    {
      name: "line",
      description: "Used for borders, dividers, or any other thin lines",
      cssVariable: "--line",
      example: "bg-line",
      usage: "divide-y-line",
    },
  ],
  overlay: [
    {
      name: "overlay / overlay-1",
      description: "Overlay color one",
      cssVariable: "--overlay",
      example: "bg-overlay",
      usage: "bg-overlay",
    },
    {
      name: "overlay-2",
      description: "Overlay color two",
      cssVariable: "--overlay-2",
      example: "bg-overlay-2",
      usage: "bg-overlay-2",
    },
    {
      name: "overlay-3",
      description: "Overlay color three",
      cssVariable: "--overlay-3",
      example: "bg-overlay-3",
      usage: "bg-overlay-3",
    },
    {
      name: "overlay-content / overlay-content-1",
      description: "Overlay content color one",
      cssVariable: "--overlay-content",
      example: "bg-overlay",
      usage: "bg-overlay",
    },
    {
      name: "overlay-content-2",
      description: "Overlay content color two",
      cssVariable: "--overlay-content-2",
      example: "bg-overlay-content-2",
      usage: "bg-overlay-content-2",
    },
    {
      name: "overlay-content-3",
      description: "Overlay content color three",
      cssVariable: "--overlay-content-3",
      example: "bg-overlay-content-3",
      usage: "bg-overlay-content-3",
    },
    {
      name: "overlay-content-inverse",
      description: "Overlay content contrast color",
      cssVariable: "--overlay-content-inverse",
      example: "bg-overlay-content-inverse",
      usage: "bg-overlay-content-inverse",
    },
  ],
  input: [
    {
      name: "input",
      description: "Input color one",
      cssVariable: "--input",
      example: "bg-input",
      usage: "bg-input",
    },
    {
      name: "input-content",
      description: "Input content color",
      cssVariable: "--input-content",
      example: "bg-input-content",
      usage: "bg-input-content",
    },
  ],
  primary: [
    {
      name: "primary",
      description: "Primary color",
      cssVariable: "--primary",
      example: "bg-primary",
      usage: "bg-primary",
    },
    {
      name: "primary-focus",
      description: "Primary focus color",
      cssVariable: "--primary-focus",
      example: "bg-primary-focus",
      usage: "bg-primary-focus",
    },
    {
      name: "primary-subtle",
      description: "Primary subtle color",
      cssVariable: "--primary-subtle",
      example: "bg-primary-subtle",
      usage: "bg-primary-subtle",
    },
    {
      name: "primary-content",
      description: "Primary content color",
      cssVariable: "--primary-content",
      example: "bg-primary-content",
      usage: "bg-primary-content",
    },
    {
      name: "primary-content-inverse",
      description: "Primary content contrast color",
      cssVariable: "--primary-content-inverse",
      example: "bg-primary-content-inverse",
      usage: "bg-primary-content-inverse",
    },
  ],
  secondary: [
    {
      name: "secondary",
      description: "Secondary color",
      cssVariable: "--secondary",
      example: "bg-secondary",
      usage: "bg-secondary",
    },
    {
      name: "secondary-focus",
      description: "Secondary focus color",
      cssVariable: "--secondary-focus",
      example: "bg-secondary-focus",
      usage: "bg-secondary-focus",
    },
    {
      name: "secondary-subtle",
      description: "Secondary subtle color",
      cssVariable: "--secondary-subtle",
      example: "bg-secondary-subtle",
      usage: "bg-secondary-subtle",
    },
    {
      name: "secondary-content",
      description: "Secondary content color",
      cssVariable: "--secondary-content",
      example: "bg-secondary-content",
      usage: "bg-secondary-content",
    },
    {
      name: "secondary-content-inverse",
      description: "Secondary content contrast color",
      cssVariable: "--secondary-content-inverse",
      example: "bg-secondary-content-inverse",
      usage: "bg-secondary-content-inverse",
    },
  ],
  info: [
    {
      name: "info",
      description: "Info color",
      cssVariable: "--info",
      example: "bg-info",
      usage: "bg-info",
    },
    {
      name: "info-focus",
      description: "Info focus color",
      cssVariable: "--info-focus",
      example: "bg-info-focus",
      usage: "bg-info-focus",
    },
    {
      name: "info-subtle",
      description: "Info subtle color",
      cssVariable: "--info-subtle",
      example: "bg-info-subtle",
      usage: "bg-info-subtle",
    },
    {
      name: "info-content",
      description: "Info content color",
      cssVariable: "--info-content",
      example: "bg-info-content",
      usage: "bg-info-content",
    },
    {
      name: "info-content-inverse",
      description: "Info content contrast color",
      cssVariable: "--info-content-inverse",
      example: "bg-info-content-inverse",
      usage: "bg-info-content-inverse",
    },
  ],
  success: [
    {
      name: "success",
      description: "Success color",
      cssVariable: "--success",
      example: "bg-success",
      usage: "bg-success",
    },
    {
      name: "success-focus",
      description: "Success focus color",
      cssVariable: "--success-focus",
      example: "bg-success-focus",
      usage: "bg-success-focus",
    },
    {
      name: "success-subtle",
      description: "Success subtle color",
      cssVariable: "--success-subtle",
      example: "bg-success-subtle",
      usage: "bg-success-subtle",
    },
    {
      name: "success-content",
      description: "Success content color",
      cssVariable: "--success-content",
      example: "bg-success-content",
      usage: "bg-success-content",
    },
    {
      name: "success-content-inverse",
      description: "Success content contrast color",
      cssVariable: "--success-content-inverse",
      example: "bg-success-content-inverse",
      usage: "bg-success-content-inverse",
    },
  ],
  error: [
    {
      name: "error",
      description: "Error color",
      cssVariable: "--error",
      example: "bg-error",
      usage: "bg-error",
    },
    {
      name: "error-focus",
      description: "Error focus color",
      cssVariable: "--error-focus",
      example: "bg-error-focus",
      usage: "bg-error-focus",
    },
    {
      name: "error-subtle",
      description: "Error subtle color",
      cssVariable: "--error-subtle",
      example: "bg-error-subtle",
      usage: "bg-error-subtle",
    },
    {
      name: "error-content",
      description: "Error content color",
      cssVariable: "--error-content",
      example: "bg-error-content",
      usage: "bg-error-content",
    },
    {
      name: "error-content-inverse",
      description: "Error content contrast color",
      cssVariable: "--error-content-inverse",
      example: "bg-error-content-inverse",
      usage: "bg-error-content-inverse",
    },
  ],
  warning: [
    {
      name: "warning",
      description: "Warning color",
      cssVariable: "--warning",
      example: "bg-warning",
      usage: "bg-warning",
    },
    {
      name: "warning-focus",
      description: "Warning focus color",
      cssVariable: "--warning-focus",
      example: "bg-warning-focus",
      usage: "bg-warning-focus",
    },
    {
      name: "warning-subtle",
      description: "Warning subtle color",
      cssVariable: "--warning-subtle",
      example: "bg-warning-subtle",
      usage: "bg-warning-subtle",
    },
    {
      name: "warning-content",
      description: "Warning content color",
      cssVariable: "--warning-content",
      example: "bg-warning-content",
      usage: "bg-warning-content",
    },
    {
      name: "warning-content-inverse",
      description: "Warning content contrast color",
      cssVariable: "--warning-content-inverse",
      example: "bg-warning-content-inverse",
      usage: "bg-warning-content-inverse",
    },
  ],
};

const ColorTableItem = ({ color }: { color: Color }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 flex items-center">
        <div
          className={`w-8 h-8 mx-auto rounded-theme border-2 border-line  ${color.example}`}
        ></div>
      </div>
      <div className="p-2 col-span-3">
        <div className="">
          <div className="font-semibold text-base-content">{color.name}</div>
          <div className="text-xs text-base-content-2">{color.usage}</div>
        </div>
      </div>
      <div className="p-2 text-xs col-span-5">{color.description}</div>
      <div className="p-2 col-span-3">{color.cssVariable}</div>
    </div>
  );
};

export const ColorTable = ({ colors }: { colors: Color[] }) => {
  return (
    <div className="w-full text-left border-[1px] border-line rounded-lg border-separate bg-base text-base-content relative px-4 py-2 my-4">
      <div className="absolute top-4 right-4">
        <ThemePicker className="" />
      </div>

      <div className="border-[1px] border-base w-full">
        <div className="grid grid-cols-12 justify-start">
          <div className="p-2 col-span-1"></div>
          <div className="p-2 col-span-3">Name & Usage</div>
          <div className="p-2 col-span-5">Description</div>
          <div className="p-2 col-span-3">CSS Variable</div>
        </div>
      </div>
      <div className="divide-y-[1px] divide-line">
        {colors.map((color) => (
          <ColorTableItem color={color} />
        ))}
      </div>
    </div>
  );
};

export const ColorTables = () => {
  return (
    <div className="">
      <ColorTable colors={colorSystem.base} />
      <ColorTable colors={colorSystem.primary} />
      <ColorTable colors={colorSystem.overlay} />
      <ColorTable colors={colorSystem.secondary} />
      <ColorTable colors={colorSystem.info} />
      <ColorTable colors={colorSystem.success} />
      <ColorTable colors={colorSystem.error} />
      <ColorTable colors={colorSystem.warning} />
    </div>
  );
};
