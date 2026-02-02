import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import { Expression } from "./Expression.js"
import type { StringPart } from "./StringPart.js"
import { NodeKind } from "../NodeKind.js"

export class JoinedStringExpression extends Expression {
  public readonly kind = NodeKind.JoinedStringExpression;
  public readonly parts: StringPart[];

  public constructor(source: NodeSourceLocation, parts: StringPart[]) {
    super(source);
    this.parts = parts;
    this.addChildren(this.parts);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitJoinedStringExpression(this);
  }
}
