import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses joined string with expression parts", () => {
  const input = [
    "[proc,test]",
    "mes(\"<.displayname> has something in <.text_gender(\"his\", \"her\")> hand.\");",
  ].join("\n");

  const script = ScriptParser.parseScriptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.ExpressionStatement);
  assert.ok(statement.expression.kind === NodeKind.CommandCallExpression);
  assert.equal(statement.expression.name.text, "mes");
  assert.equal(statement.expression.arguments.length, 1);

  const expr = statement.expression.arguments[0];
  assert.ok(expr.kind === NodeKind.JoinedStringExpression);
  assert.ok(expr.parts[0].kind === NodeKind.ExpressionStringPart);
  assert.ok(expr.parts[1].kind === NodeKind.BasicStringPart);
  assert.ok(expr.parts[2].kind === NodeKind.ExpressionStringPart);
  assert.ok(expr.parts[3].kind === NodeKind.BasicStringPart);

  assert.ok(expr.parts[0]._children[0].text === '.displayname');
  assert.ok(expr.parts[2]._children[0].name.text === '.text_gender');
});
