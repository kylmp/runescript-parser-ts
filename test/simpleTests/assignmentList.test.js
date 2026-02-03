import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses multi-assign list", () => {
  const input = [
    "[proc,test]",
    "$a, %b = 1, 2;",
  ].join("\n");

  const script = ScriptParser.parseScriptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.AssignmentStatement);
  assert.equal(statement.vars.length, 2);
  assert.equal(statement.expressions.length, 2);
  assert.ok(statement.vars[0].kind === NodeKind.LocalVariableExpression);
  assert.ok(statement.vars[1].kind === NodeKind.GameVariableExpression);
});
