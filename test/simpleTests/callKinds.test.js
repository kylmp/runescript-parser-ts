import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses command/proc/jump calls", () => {
  const input = [
    "[proc,test]",
    "~bar(3);",
    "@baz(4);",
  ].join("\n");

  const script = ScriptParser.parseSciptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 2);

  const stmt0 = script.statements[0];
  assert.ok(stmt0.kind === NodeKind.ExpressionStatement);
  assert.ok(stmt0.expression.kind === NodeKind.ProcCallExpression);
  assert.equal(stmt0.expression.name.text, "bar");

  const stmt1 = script.statements[1];
  assert.ok(stmt1.kind === NodeKind.ExpressionStatement);
  assert.ok(stmt1.expression.kind === NodeKind.JumpCallExpression);
  assert.equal(stmt1.expression.name.text, "baz");
});
