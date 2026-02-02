import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses return expression list", () => {
  const input = [
    "[proc,test]",
    "return(1, \"x\", null);",
  ].join("\n");

  const script = ScriptParser.parseSciptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.ReturnStatement);
  assert.equal(statement.expressions.length, 3);
  assert.ok(statement.expressions[0].kind === NodeKind.IntegerLiteral);
  assert.ok(statement.expressions[1].kind === NodeKind.StringLiteral);
  assert.ok(statement.expressions[2].kind === NodeKind.NullLiteral);
});
