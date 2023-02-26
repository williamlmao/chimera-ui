import Link from "next/link";
import ComponentsMetaJson from "../pages/docs/components/_meta.json";

export const ComponentsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Object.entries(ComponentsMetaJson).map((componentEntry) => {
        const [fileName, componentName] = componentEntry;
        if (fileName === "index") return;
        return (
          <Link href={`/docs/components/${fileName}`} key={fileName}>
            <div className="px-4 py-2 bg-primary text-primary-content hover:bg-primary-focus rounded-md border-line border text-center text-sm">
              {componentName as string}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
