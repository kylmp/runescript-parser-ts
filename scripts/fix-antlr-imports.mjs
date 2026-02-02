import { readdir, readFile, writeFile } from "node:fs/promises";

const srcRoot = new URL("../src/", import.meta.url);

async function* walk(dirUrl) {
  const entries = await readdir(dirUrl, { withFileTypes: true });
  for (const entry of entries) {
    const url = new URL(entry.name + "/", dirUrl);
    if (entry.isDirectory()) {
      yield* walk(url);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".ts")) {
      yield new URL(entry.name, dirUrl);
    }
  }
}

const relativeImport = /(from\s+["'])(\.{1,2}\/[^"'\n]+?)(["'])/g;
const antlrSubpath = /(from\s+["'])(antlr4ts\/[^"'\n]+?)(["'])/g;

function addJsExtension(spec) {
  if (/[.][a-z0-9]+$/i.test(spec)) {
    return spec;
  }
  return `${spec}.js`;
}

let updated = 0;
for await (const fileUrl of walk(srcRoot)) {
  const text = await readFile(fileUrl, "utf8");
  const next = text
    .replace(relativeImport, (_m, p1, spec, p3) => `${p1}${addJsExtension(spec)}${p3}`)
    .replace(antlrSubpath, (_m, p1, spec, p3) => `${p1}${addJsExtension(spec)}${p3}`);

  if (next !== text) {
    await writeFile(fileUrl, next, "utf8");
    updated += 1;
  }
}

if (updated === 0) {
  // eslint-disable-next-line no-console
  console.log("fix-antlr-imports: no changes");
} else {
  // eslint-disable-next-line no-console
  console.log(`fix-antlr-imports: updated ${updated} file(s)`);
}
