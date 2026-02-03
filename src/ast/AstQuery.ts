import type { Node } from "./Node.js";
import type { NodeSourceLocation } from "./NodeSourceLocation.js";
import { CallExpression } from "./expr/CallExpression.js";

export type Position = {
  line: number;
  column: number;
};

export type Range = {
  start: Position;
  end: Position;
};

export function getNodeRange(node: Node): Range {
  return {
    start: { line: node.source.line, column: node.source.column },
    end: { line: node.source.endLine, column: node.source.endColumn },
  };
}

export function findNodeAtPosition(root: Node, position: Position): Node | null {
  return findSmallestNodeAtPosition(root, position.line, position.column);
}

export function isPositionInRange(position: Position, location: NodeSourceLocation): boolean {
  if (position.line < location.line || position.line > location.endLine) {
    return false;
  }

  if (position.line === location.line && position.column < location.column) {
    return false;
  }

  if (position.line === location.endLine && position.column >= location.endColumn) {
    return false;
  }

  return true;
}

export function isPositionAfterRange(position: Position, location: NodeSourceLocation): boolean {
  if (position.line > location.endLine) {
    return true;
  }

  if (position.line < location.endLine) {
    return false;
  }

  return position.column >= location.endColumn;
}

export function findSmallestNodeAtPosition(
  root: Node,
  line: number,
  column: number
): Node | null {
  const position = { line, column };
  if (!isPositionInRange(position, root.source)) {
    return null;
  }

  for (const child of root.children) {
    const match = findSmallestNodeAtPosition(child, line, column);
    if (match) {
      return match;
    }
  }

  return root;
}

export function findCallExpressionAtPosition(
  root: Node,
  line: number,
  column: number
): CallExpression | null {
  const node = findSmallestNodeAtPosition(root, line, column);
  if (!node) {
    return null;
  }

  if (node instanceof CallExpression) {
    return node as CallExpression;
  }

  let current: Node | null = node.parent;
  while (current) {
    if (current instanceof CallExpression) {
      return current as CallExpression;
    }
    current = current.parent;
  }

  return null;
}

export function getCallArgumentIndex(
  call: CallExpression,
  line: number,
  column: number
): number {
  const position = { line, column };
  const args = call.arguments;

  if (args.length === 0) {
    return 0;
  }

  let index = 0;
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (isPositionInRange(position, arg.source)) {
      return i;
    }
    if (isPositionAfterRange(position, arg.source)) {
      index = i + 1;
    }
  }

  return Math.min(index, args.length);
}
