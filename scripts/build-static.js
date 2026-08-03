const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, "public");
const files = [
  "index.html",
  "styles.css",
  "app.js",
  "01_schema.sql",
  "02_seed_data.sql",
  "03_analytics_queries.sql",
  "04_procedures_triggers_views.sql",
  "05_optimization_guide.md",
  "README.md"
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(outDir, file));
}

console.log(`Static site copied to ${path.relative(root, outDir)}`);
