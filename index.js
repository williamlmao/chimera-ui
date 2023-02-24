"use strict";
exports.__esModule = true;
var react_docgen_1 = require("react-docgen");
var code = "\n/** My first component */\nexport default ({ name }: { name: string }) => <div>{{name}}</div>;\n";
var documentation = (0, react_docgen_1.parse)(code);
console.log(documentation);
