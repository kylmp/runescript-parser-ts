import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses condition precedence", () => {
  const input = [
    "[proc,test]",
    "if (1 = 2 | 3 = 4 & 5 = 6) ;",
  ].join("\n");

  const script = ScriptParser.parseSciptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.IfStatement);

  const condition = statement.condition;
  assert.ok(condition.kind === NodeKind.ConditionExpression);
  // The top-level should be OR, with right side containing an AND.
  assert.equal(condition.operator.text, "|");
  assert.ok(condition.right.kind === NodeKind.ConditionExpression);
  assert.equal(condition.right.operator.text, "&");
});
