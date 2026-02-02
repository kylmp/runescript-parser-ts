import { ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses multiple return types", () => {
  const input = "[proc,test]()(int,string)";
  const scriptFile = ScriptParser.parseFileTextString(input);

  assert.ok(scriptFile, "expected a ScriptFile");
  assert.equal(scriptFile.scripts.length, 1);

  const script = scriptFile.scripts[0];
  assert.ok(script.returnTokens);
  assert.equal(script.returnTokens.length, 2);
  assert.equal(script.returnTokens[0].text, "int");
  assert.equal(script.returnTokens[1].text, "string");
});
