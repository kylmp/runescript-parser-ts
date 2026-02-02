import type { AstVisitor } from "../AstVisitor.js"
import { Node } from "../Node.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Expression } from "./Expression.js"
import { NodeKind } from "../NodeKind.js"

export abstract class StringPart extends Node {
  protected constructor(source: NodeSourceLocation) {
    super(source);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitJoinedStringPart(this);
  }
}

export class BasicStringPart extends StringPart {
  public readonly kind: NodeKind = NodeKind.BasicStringPart;
  public readonly value: string;

  public constructor(source: NodeSourceLocation, value: string) {
    super(source);
    this.value = value;
  }
}

export class PTagStringPart extends BasicStringPart {
  public readonly kind = NodeKind.PTagStringPart;
}

export class ExpressionStringPart extends StringPart {
  public readonly kind = NodeKind.ExpressionStringPart;
  public readonly expression: Expression;

  public constructor(source: NodeSourceLocation, expression: Expression) {
    super(source);
    this.expression = expression;
    this.addChild(this.expression);
  }
}
