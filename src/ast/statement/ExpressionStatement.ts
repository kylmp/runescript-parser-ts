import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Expression } from "../expr/Expression.js"
import { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class ExpressionStatement extends Statement {
  public readonly kind = NodeKind.ExpressionStatement;
  public readonly expression: Expression;

  public constructor(source: NodeSourceLocation, expression: Expression) {
    super(source);
    this.expression = expression;
    this.addChild(this.expression);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitExpressionStatement(this);
  }
}
