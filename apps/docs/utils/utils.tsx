type ClassesObject = {
  [key: string]: string[];
};

export const handleTailwindClassOverrides = (
  defaultClasses: string,
  userClasses?: string
): string => {
  if (!userClasses) return defaultClasses;

  const defaultClassesArray = defaultClasses.split(" ");
  const userClassesArray = userClasses.split(" ");

  // If the default is border-theme border-black, and a user passes in border-2 border-red-500 border-dotted, the result should be border-2 border-red-500 border-dotted
  const defaultClassesObject = defaultClassesArray.reduce(
    (acc: ClassesObject, curr) => {
      const splitClass = curr.split("-");
      // create a nested object with [0] as the key and the full class as a value in an array
      // { border: ["border-theme", "border-black"] }
      if (acc[splitClass?.[0]]) {
        acc[splitClass?.[0]].push(curr);
      } else {
        acc[splitClass[0]] = [curr];
      }
      return acc;
    },
    {}
  );
  const userClassesObject = userClassesArray.reduce(
    (acc: ClassesObject, curr) => {
      const splitClass = curr.split("-");
      // create a nested object with [0] as the key and the full class as a value in an array
      // { border: ["border-2", "border-red-500", "border-dotted"] }
      if (acc[splitClass?.[0]]) {
        acc[splitClass[0]].push(curr);
      } else {
        acc[splitClass[0]] = [curr];
      }
      return acc;
    },
    {}
  );

  for (const key in userClassesObject) {
    if (defaultClassesObject[key]) {
      defaultClassesObject[key] = userClassesObject[key];
    } else {
      defaultClassesObject[key] = userClassesObject[key];
    }
  }
  const result = Object.values(defaultClassesObject).flat();
  return result.join(" ");
};
