import {
  cp,
  mkdir,
  readdir,
  readFile,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "content");
const wikiDir = path.join(root, "wiki");

function transformMarkdown(text, { homepage = false } = {}) {
  let next = text
    .replace(/^raw_source:\s.*\n/gm, "")
    .replace(/^date:\s*undated\s*\n/gm, "")
    .replace(
      /^- Raw source: \[source\.md\]\([^)]+\)\s*$/gm,
      "- Raw source metadata: tracked in the repository under `raw/`.",
    );

  if (homepage) {
    next = next.replace(/\]\(wiki\//g, "](");
    next = next.replace(/^# Index$/m, "# PCC LLM Wiki");
    if (!next.startsWith("---\n")) {
      next = `---\ntitle: PCC LLM Wiki\n---\n\n${next}`;
    }
  }

  return next;
}

async function copyTree(src, dst) {
  const srcStat = await stat(src);
  if (srcStat.isDirectory()) {
    await mkdir(dst, { recursive: true });
    for (const entry of await readdir(src)) {
      await copyTree(path.join(src, entry), path.join(dst, entry));
    }
    return;
  }

  if (path.basename(dst) === "README.md") {
    dst = path.join(path.dirname(dst), "index.md");
  }

  if (path.extname(src) === ".md") {
    const text = await readFile(src, "utf8");
    await mkdir(path.dirname(dst), { recursive: true });
    await writeFile(dst, transformMarkdown(text));
    return;
  }

  await mkdir(path.dirname(dst), { recursive: true });
  await cp(src, dst);
}

async function main() {
  await rm(contentDir, { recursive: true, force: true });
  await mkdir(contentDir, { recursive: true });

  const homepage = await readFile(path.join(root, "index.md"), "utf8");
  await writeFile(
    path.join(contentDir, "index.md"),
    transformMarkdown(homepage, { homepage: true }),
  );

  for (const entry of await readdir(wikiDir)) {
    await copyTree(path.join(wikiDir, entry), path.join(contentDir, entry));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
