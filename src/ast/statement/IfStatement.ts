import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Expression } from "../expr/Expression.js"
import { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class IfStatement extends Statement {
  public readonly kind = NodeKind.IfStatement;
  public readonly condition: Expression;
  public readonly thenStatement: Statement;
  public readonly elseStatement: Statement | null;

  public constructor(
    source: NodeSourceLocation,
    condition: Expression,
    thenStatement: Statement,
    elseStatement: Statement | null
  ) {
    super(source);
    this.condition = condition;
    this.thenStatement = thenStatement;
    this.elseStatement = elseStatement;

    this.addChild(this.condition);
    this.addChild(this.thenStatement);
    this.addChild(this.elseStatement);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitIfStatement(this);
  }
}
