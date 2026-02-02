import { NodeKind, ScriptParser } from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("parses if/else statement correctly", () => {
  const input = [
    "[proc,test]",
    "if (1 = 2) { return; } else return;",
  ].join("\n");

  const script = ScriptParser.parseSciptText(input);

  assert.ok(script, "expected a Script");
  assert.equal(script.statements.length, 1);

  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.IfStatement);
  assert.ok(statement.thenStatement.kind === NodeKind.BlockStatement);
  assert.ok(statement.elseStatement.kind === NodeKind.ReturnStatement);
});
