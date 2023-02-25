// This script looks at each subcomponent, extracts the default styling, and adds it to a tsdoc above the component.
// Requires that the code is properly formatted, with a line break between each subcomponent.

const fs = require("fs");
const path = require("path");

// const componentName = "Button";
// var code = fs.readFileSync(
//   path.join(__dirname, `src/${componentName}.tsx`),
//   "utf8"
// );

const files = fs.readdirSync(path.join(__dirname, "src"));

files.forEach((file) => {
  const componentName = file.split(".")[0];
  console.log("\n ---- \n");
  console.log("Syncing tsdocs for: ~~~", componentName, "~~~");
  const code = fs.readFileSync(
    path.join(__dirname, `src/${componentName}.tsx`),
    "utf8"
  );
  const codeblocks = code.split(";\n\n");
  let updatesMade = [];
  const updatedCodeBlocks = codeblocks.map((codeblock) => {
    // If codeblock contains more than two const statements, then the code was not properly formatted and split
    blockName = codeblock.match(/(?<=const ).*?(?= =)/g)?.[0];
    const blockNameFirstLetterIsUppercase =
      blockName?.charAt(0) === blockName?.charAt(0).toUpperCase();
    const isComponent =
      codeblock.includes("const") &&
      codeblock.includes(componentName) &&
      blockNameFirstLetterIsUppercase;
    const containsTsDoc = codeblock.includes("/**");
    const containsDefaultClassName = codeblock.includes("cn(");
    const isMainComponent = codeblock.includes("export const");
    // Do not run any updates on main components, as users do not need to know the default styling since they would be unable to edit it at deeper levels anyways
    if (!isComponent || !containsDefaultClassName || isMainComponent)
      return codeblock;
    const constCount = (codeblock.match(/const/g) || []).length;
    if (constCount >= 2) {
      console.log(
        `${componentName}.tsx - ${blockName} --- CODE IS NOT PROPERLY FORMATTED. Make sure there is a line break between subcomponents, otherwise tsdocs cannot be synced. \n`
      );
      return;
    }
    const tsDoc = codeblock.match(/\/\*\*[\s\S]*?\*\//g)?.[0];
    let updatedTsDoc = tsDoc;
    // cnBlock is the cn() function call
    const cnBlock = codeblock.match(/cn\([\s\S]*?\)/g)?.[0];
    // Extract the classes
    const defaultStyles = cnBlock?.match(/"([^"]*)"/g)?.[0];
    // TODO add the classNames into the tsdoc
    if (isComponent && containsDefaultClassName) {
      if (containsTsDoc) {
        // Get text between " ~ " and " ~ " in tsDoc, then the text between the quotes
        const existingTsDocStyles = tsDoc
          .match(/~([^~]*)~/g)?.[0]
          .match(/"([^"]*)"/g)?.[0];
        if (existingTsDocStyles) {
          updatedTsDoc = tsDoc.replace(existingTsDocStyles, defaultStyles);
          updatesMade.push(
            `${componentName}.${blockName} - defaultStyles updated`
          );
        }
        if (!existingTsDocStyles) {
          updatedTsDoc = tsDoc.replace(
            "/**",
            `/**\n * Default Classes: ~ ${defaultStyles} ~`
          );
          updatesMade.push(
            `${componentName}.${blockName} - defaultStyles added`
          );
        }
      } else {
        updatedTsDoc = `/**\n * Default Classes: ~ ${defaultStyles} ~\n *\n */`;
        updatesMade.push(`${componentName}.${blockName} - tsDoc added`);
      }
    }
    if (containsTsDoc) {
      codeblock = codeblock.replace(tsDoc, updatedTsDoc);
    } else if (!containsTsDoc && containsDefaultClassName) {
      codeblock = codeblock.replace("const", `${updatedTsDoc}\nconst`);
    }
    return codeblock;
  });
  console.log(updatesMade.join("\n"));
  // const updatedCode = updatedCodeBlocks.join(";\n\n");
  // console.log("🚀 ~ file: test.js:74 ~ updatedCode:", updatedCode);

  // fs.writeFileSync(
  //   path.join(__dirname, `src/${componentName}.tsx`),
  //   updatedCode,
  //   "utf8"
  // );
});
