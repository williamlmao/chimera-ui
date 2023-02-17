const Color = require("color");

const color = Color("hsl(40, 0%, 20%)");

console.log(color.lighten(0.1).hsl().string());
