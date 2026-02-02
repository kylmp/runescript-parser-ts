import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses literal kinds", () => {
  const input = [
    "[proc,test]",
    "$a = 0x2a;",
    "$b = 1_2_3_4_5;",
    "$c = true;",
    "$d = 'z';",
    "$e = null;",
    "$f = \"hey\";",
  ].join("\n");

  const script = ScriptParser.parseSciptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 6);

  assert.ok(script.statements[0].expressions[0].kind === NodeKind.IntegerLiteral);
  assert.ok(script.statements[1].expressions[0].kind === NodeKind.CoordLiteral);
  assert.ok(script.statements[2].expressions[0].kind === NodeKind.BooleanLiteral);
  assert.ok(script.statements[3].expressions[0].kind === NodeKind.CharacterLiteral);
  assert.ok(script.statements[4].expressions[0].kind === NodeKind.NullLiteral);
  assert.ok(script.statements[5].expressions[0].kind === NodeKind.StringLiteral);
});
