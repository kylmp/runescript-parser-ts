import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses command/proc/jump calls", () => {
  const input = [
    "[proc,test]",
    "queue*(queueName, $arg1, 10)(vararg1, vararg2);"
  ].join("\n");

  const script = ScriptParser.parseScriptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const stmt0 = script.statements[0];
  assert.ok(stmt0.kind === NodeKind.ExpressionStatement);
  assert.ok(stmt0.expression.kind === NodeKind.CommandCallExpression);
  assert.equal(stmt0.expression.nameString, "queue*");
  assert.equal(stmt0.expression.arguments.length, 3);
  assert.equal(stmt0.expression.arguments2.length, 2);
  assert.equal(stmt0.expression.name.source.endColumn - stmt0.expression.name.source.column, stmt0.expression.nameString.length - 1);
});
