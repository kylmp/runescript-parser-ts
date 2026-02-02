import { ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses multiple scripts in one file", () => {
  const input = [
    "[a,b]",
    "return;",
    "[c,d]",
    "return;",
  ].join("\n");

  const scriptFile = ScriptParser.parseFileTextString(input);

  assert.ok(scriptFile, "expected a ScriptFile");
  assert.equal(scriptFile.scripts.length, 2);
  assert.equal(scriptFile.scripts[0].name.text, "b");
  assert.equal(scriptFile.scripts[1].name.text, "d");
});
