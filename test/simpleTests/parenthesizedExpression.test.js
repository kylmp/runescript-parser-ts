import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses parenthesized expression", () => {
  const input = [
    "[proc,test]",
    "(1);",
  ].join("\n");

  const script = ScriptParser.parseScriptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.ExpressionStatement);
  assert.ok(statement.expression.kind === NodeKind.ParenthesizedExpression);
  assert.ok(statement.expression.expression.kind === NodeKind.IntegerLiteral);
});
