import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses switch statement correctly", () => {
  const input = [
    "[proc,test]",
    "switch_int($option) {",
    "  case 1 : return;",
    "  case 2, 3 : return;",
    "  case default : return;",
    "}",
  ].join("\n");

  const script = ScriptParser.parseSciptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.SwitchStatement);
  assert.equal(statement.typeToken.text, "switch_int");
  assert.ok(statement.condition.kind === NodeKind.LocalVariableExpression);
  assert.equal(statement.cases.length, 3);

  const case1 = statement.cases[0];
  assert.ok(case1.kind === NodeKind.SwitchCase);
  assert.equal(case1.isDefault, false);
  assert.equal(case1.keys.length, 1);
  assert.ok(case1.keys[0].kind === NodeKind.IntegerLiteral);
  assert.equal(case1.statements.length, 1);

  const case2 = statement.cases[1];
  assert.equal(case2.keys.length, 2);
  assert.ok(case2.keys[0].kind === NodeKind.IntegerLiteral);
  assert.ok(case2.keys[1].kind === NodeKind.IntegerLiteral);
  assert.equal(case2.statements.length, 1);

  const caseDefault = statement.cases[2];
  assert.ok(caseDefault.isDefault);
  assert.equal(caseDefault.keys.length, 0);
  assert.equal(caseDefault.statements.length, 1);
});
