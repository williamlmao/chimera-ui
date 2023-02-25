// This script looks at each subcomponent, extracts the default styling, and adds it to a tsdoc above the component.
// Requires that the code is properly formatted, with a line break between each subcomponent.

var fs = require("fs");
var path = require("path");

const componentName = "Accordion";
var code = fs.readFileSync(
  path.join(__dirname, `src/${componentName}.tsx`),
  "utf8"
);

// Split the code into subcomponents

// In each subcomponent, look for the className

// Also look for an existing tsdoc comment

// If there is no tsdoc comment, add one

// If there is a tsdoc comment, add the className to the tsdoc comment, or replace it if it already exists
const codeblocks = code.split(";\n\n");

const updatedCodeBlocks = codeblocks.map((codeblock) => {
  // If codeblock contains more than two const statements, then the code was not properly formatted and split
  const constCount = (codeblock.match(/const/g) || []).length;
  if (constCount >= 2) {
    console.log(
      "CODE IS NOT PROPERLY FORMATTED. Make sure there is a line break between subcomponents, otherwise tsdocs cannot be synced. \n"
    );
    console.log(codeblock);
    return;
  }
  // Determine if codeblock is a component
  const isComponent =
    codeblock.includes("const") && codeblock.includes(componentName);
  const containsTsDoc = codeblock.includes("/**");
  const containsDefaultClassName = codeblock.includes("cn(");
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
        // Replace the existing className
        updatedTsDoc = tsDoc.replace(existingTsDocStyles, defaultStyles);
      }
      if (!existingTsDocStyles) {
        // Insert the className somewhere in the tsdoc
        updatedTsDoc = tsDoc.replace(
          "/**",
          `/**\n * Default Classes: ~ ${defaultStyles} ~`
        );
      }
    } else {
      console.log("Adding new tsdoc");
      // Add a new tsdoc comment
      updatedTsDoc = `/**\n * Default Classes: ~ ${defaultStyles} ~\n *\n */`;
    }
  }
  if (containsTsDoc) {
    codeblock = codeblock.replace(tsDoc, updatedTsDoc);
  } else if (!containsTsDoc && containsDefaultClassName) {
    codeblock = codeblock.replace("const", `${updatedTsDoc}\nconst`);
  }
  return codeblock;
});

const updatedCode = updatedCodeBlocks.join(";\n\n");
console.log("🚀 ~ file: test.js:74 ~ updatedCode:", updatedCode);

fs.writeFileSync(
  path.join(__dirname, `src/${componentName}.tsx`),
  updatedCode,
  "utf8"
);
