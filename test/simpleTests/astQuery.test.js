import {
  NodeKind,
  ScriptParser,
  findCallExpressionAtPosition,
  findSmallestNodeAtPosition,
  getCallArgumentIndex,
} from "../../dist/index.js";
import assert from "node:assert/strict";
import test from "node:test";

test("uses LSP-style ranges (0-based, end-exclusive)", () => {
  const input = ["[proc,test]", "foo(1, 23);"].join("\n");
  const script = ScriptParser.parseScriptText(input);

  assert.ok(script, "expected a Script");
  const statement = script.statements[0];
  assert.ok(statement.kind === NodeKind.ExpressionStatement);

  const call = statement.expression;
  assert.ok(call.kind === NodeKind.CommandCallExpression);
  assert.equal(call.name.text, "foo");
  assert.deepEqual(call.name.source, {
    name: "<source>",
    line: 1,
    column: 0,
    endLine: 1,
    endColumn: 3,
  });

  assert.ok(call.arguments[0].kind === NodeKind.IntegerLiteral);
  assert.deepEqual(call.arguments[0].source, {
    name: "<source>",
    line: 1,
    column: 4,
    endLine: 1,
    endColumn: 5,
  });

  assert.ok(call.arguments[1].kind === NodeKind.IntegerLiteral);
  assert.deepEqual(call.arguments[1].source, {
    name: "<source>",
    line: 1,
    column: 7,
    endLine: 1,
    endColumn: 9,
  });
});

test("can find node and call at position", () => {
  const input = ["[proc,test]", "foo(1, 23);"].join("\n");
  const script = ScriptParser.parseScriptText(input);
  assert.ok(script, "expected a Script");

  const node = findSmallestNodeAtPosition(script, 1, 8);
  assert.ok(node, "expected a node at position");
  assert.equal(node.kind, NodeKind.IntegerLiteral);

  const call = findCallExpressionAtPosition(script, 1, 8);
  assert.ok(call, "expected a call at position");
  assert.equal(call.kind, NodeKind.CommandCallExpression);

  const argIndex = getCallArgumentIndex(call, 1, 8);
  assert.equal(argIndex, 1);
});
