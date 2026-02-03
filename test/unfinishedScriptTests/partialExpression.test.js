import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";
import { silentListener } from "../testUtils.js";

test("parses partial expression correctly", () => {
  const input = [
    "[proc,test]",
    "loc_add(movecoord($loc_coord, ^x, 0, %z), $replacement",
  ].join("\n");

  const script = ScriptParser.parseScriptText(input, { errorListener: silentListener, tolerant: true });

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.ExpressionStatement);

  const call = statement.expression;
  assert.ok(call.kind === NodeKind.CommandCallExpression);
  assert.equal(call.name.text, "loc_add");
  assert.equal(call.arguments.length, 2);

  const arg0 = call.arguments[0];
  assert.ok(arg0.kind === NodeKind.CommandCallExpression);
  assert.equal(arg0.name.text, "movecoord");
  assert.equal(arg0.arguments.length, 4);
  assert.ok(arg0.arguments[0].kind === NodeKind.LocalVariableExpression);
  assert.equal(arg0.arguments[0].name.text, "loc_coord");
  assert.ok(arg0.arguments[1].kind === NodeKind.ConstantVariableExpression);
  assert.equal(arg0.arguments[1].name.text, "x");
  assert.ok(arg0.arguments[2].kind === NodeKind.IntegerLiteral);
  assert.equal(arg0.arguments[2].value, 0);
  assert.ok(arg0.arguments[3].kind === NodeKind.GameVariableExpression);
  assert.equal(arg0.arguments[3].name.text, "z");

  const arg1 = call.arguments[1];
  assert.ok(arg1.kind === NodeKind.LocalVariableExpression);
  assert.equal(arg1.name.text, "replacement");
});
