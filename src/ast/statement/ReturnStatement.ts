import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Expression } from "../expr/Expression.js"
import { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class ReturnStatement extends Statement {
  public readonly kind = NodeKind.ReturnStatement;
  public readonly expressions: Expression[];

  public constructor(source: NodeSourceLocation, expressions: Expression[]) {
    super(source);
    this.expressions = expressions;
    this.addChildren(this.expressions);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitReturnStatement(this);
  }
}
