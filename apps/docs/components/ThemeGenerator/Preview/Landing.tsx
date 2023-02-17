import { Button } from "chimera-tw";
export const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center text-6xl font-bold p-12 text-base-content">
        Scroll{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          down
        </span>{" "}
        to see more examples
      </div>
      <div className="flex gap-2">
        <Button variant="secondary-outline">Secondary</Button>
        <Button className="">Primary</Button>
      </div>
    </div>
  );
};
