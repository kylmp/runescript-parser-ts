import assert from "node:assert/strict";
import test from "node:test";
import { parseTestScript } from "../testUtils.js";

test("parses full script files successfully", () => {
  const testScrtips = [
    "quest_haunted.rs2",
    "gertrude.rs2",
    "agilityarena.rs2",
    "open_and_close_doors.rs2",
  ];
  for (const script of testScrtips) {
    const { scriptFile, errors } = parseTestScript(script);
    assert.ok(scriptFile, `expected a ScriptFile for ${script}`);
    assert.ok(scriptFile.scripts.length > 0, `expected scripts in ${script}`);
    assert.equal(errors.length, 0, errors.length ? `syntax errors:\n${errors.join("\n")}` : undefined);
  }
});
