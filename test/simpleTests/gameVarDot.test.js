import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses game variable dot and non-dot", () => {
  const input = [
    "[proc,test]",
    "$a = %foo;",
    "$b = .%bar;",
  ].join("\n");

  const script = ScriptParser.parseScriptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 2);

  const v0 = script.statements[0].expressions[0];
  assert.ok(v0.kind === NodeKind.GameVariableExpression);
  assert.equal(v0.dot, false);

  const v1 = script.statements[1].expressions[0];
  assert.ok(v1.kind === NodeKind.GameVariableExpression);
  assert.equal(v1.dot, true);
});
