import { Button } from "@chimera-ui/components";

export const Buttons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Primary</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary-subtle">Secondary Subtle</Button>
      <Button variant="secondary-outline">Secondary Outline</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
    </div>
  );
};

// default: "bg-primary text-primary-content hover:bg-primary-focus",
// secondary:
//   "bg-secondary text-secondary-content  hover:bg-secondary-focus",
// "secondary-outline":
//   "bg-transparent border border-secondary text-secondary hover:bg-secondary-focus hover:text-secondary-content",
// destructive: "bg-danger text-danger-content hover:bg-danger-focus",
// outline: "bg-transparent border border-primary-200 hover:bg-base-2",
// subtle:
//   "bg-primary-subtle text-primary-subtle-content hover:bg-primary hover:text-primary-content",
// ghost:
//   "bg-transparent hover:bg-base-2    data-[state=open]:bg-transparent ",
// link: "bg-transparent underline-offset-4 hover:underline text-slate-900  hover:bg-transparent ",
