import { ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";
import { silentListener } from "../testUtils.js";

test("parses invalid script correctly - returns null", () => {
  const input = "[missing_comma]";
  const scriptFile = ScriptParser.parseFileTextString(input, silentListener);

  assert.equal(scriptFile, null);
});
