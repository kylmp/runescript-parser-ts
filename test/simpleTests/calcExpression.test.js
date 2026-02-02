import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses calc expression", () => {
  const input = [
    "[proc,test]",
    "calc(1 + 2 * 3);",
  ].join("\n");

  const script = ScriptParser.parseSciptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.ExpressionStatement);
  assert.ok(statement.expression.kind === NodeKind.CalcExpression);

  const expr = statement.expression.expression;
  assert.ok(expr.kind === NodeKind.ArithmeticExpression);
});
