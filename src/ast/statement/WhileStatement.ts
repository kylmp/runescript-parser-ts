import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Expression } from "../expr/Expression.js"
import { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class WhileStatement extends Statement {
  public readonly kind = NodeKind.WhileStatement;
  public readonly condition: Expression;
  public readonly thenStatement: Statement;

  public constructor(source: NodeSourceLocation, condition: Expression, thenStatement: Statement) {
    super(source);
    this.condition = condition;
    this.thenStatement = thenStatement;

    this.addChild(this.condition);
    this.addChild(this.thenStatement);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitWhileStatement(this);
  }
}
