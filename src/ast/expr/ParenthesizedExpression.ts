import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import { Expression } from "./Expression.js"
import { NodeKind } from "../NodeKind.js"

export class ParenthesizedExpression extends Expression {
  public readonly kind = NodeKind.ParenthesizedExpression;
  public readonly expression: Expression;

  public constructor(source: NodeSourceLocation, expression: Expression) {
    super(source);
    this.expression = expression;
    this.addChild(this.expression);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitParenthesizedExpression(this);
  }
}
