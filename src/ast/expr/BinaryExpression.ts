import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Token } from "../Token.js"
import { Expression } from "./Expression.js"
import { NodeKind } from "../NodeKind.js"

export abstract class BinaryExpression extends Expression {
  public readonly left: Expression;
  public readonly operator: Token;
  public readonly right: Expression;

  protected constructor(source: NodeSourceLocation, left: Expression, operator: Token, right: Expression) {
    super(source);
    this.left = left;
    this.operator = operator;
    this.right = right;

    this.addChild(this.left);
    this.addChild(this.operator);
    this.addChild(this.right);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitBinaryExpression(this);
  }
}

export class ConditionExpression extends BinaryExpression {
  public readonly kind = NodeKind.ConditionExpression;
  public constructor(source: NodeSourceLocation, left: Expression, operator: Token, right: Expression) {
    super(source, left, operator, right);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitConditionExpression(this);
  }
}

export class ArithmeticExpression extends BinaryExpression {
  public readonly kind = NodeKind.ArithmeticExpression;
  public constructor(source: NodeSourceLocation, left: Expression, operator: Token, right: Expression) {
    super(source, left, operator, right);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitArithmeticExpression(this);
  }
}
