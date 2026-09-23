import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("static export uses assets that work on both GitHub Pages URLs", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /(?:href|src)=["']\.\/_next\//);
  assert.doesNotMatch(html, /(?:href|src)=["']\/healyoga\//);
  assert.doesNotMatch(html, /(?:href|src)=["']\/_next\//);
});
