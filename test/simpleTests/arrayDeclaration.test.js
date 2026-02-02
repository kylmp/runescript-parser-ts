import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses array declaration and indexed assignment", () => {
  const input = [
    "[proc,test]",
    "def_int $arr(10);",
    "$arr(1) = 2;",
  ].join("\n");

  const script = ScriptParser.parseSciptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 2);

  const decl = script.statements[0];
  assert.ok(decl.kind === NodeKind.ArrayDeclarationStatement);
  assert.equal(decl.typeToken.text, "def_int");
  assert.equal(decl.name.text, "arr");
  assert.ok(decl.initializer.kind === NodeKind.IntegerLiteral);

  const assign = script.statements[1];
  assert.ok(assign.kind === NodeKind.AssignmentStatement);
  assert.equal(assign.vars.length, 1);
  assert.equal(assign.expressions.length, 1);
  assert.ok(assign.vars[0].kind === NodeKind.LocalVariableExpression);
  assert.ok(assign.vars[0].isArray);
  assert.ok(assign.vars[0].index.kind === NodeKind.IntegerLiteral);
  assert.ok(assign.expressions[0].kind === NodeKind.IntegerLiteral);
});
