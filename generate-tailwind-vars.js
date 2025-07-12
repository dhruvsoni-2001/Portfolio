// generate-tailwind-vars.js
import fs from "fs";

const colors = {
  "black-100": "var(--color-bg-black-100)",
  "primary": "var(--color-primary)",
  "brand": "var(--color-brand)",
};

let output = "@layer utilities {\n";
for (const [name, value] of Object.entries(colors)) {
  output += `  .bg-${name} { background-color: ${value}; }\n`;
  output += `  .text-${name} { color: ${value}; }\n`;
}
output += "}";

fs.writeFileSync("src/styles/_generated-utilities.css", output);
