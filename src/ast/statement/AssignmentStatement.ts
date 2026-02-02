import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Expression } from "../expr/Expression.js"
import type { VariableExpression } from "../expr/VariableExpression.js"
import { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class AssignmentStatement extends Statement {
  public readonly kind = NodeKind.AssignmentStatement;
  public readonly vars: VariableExpression[];
  public readonly expressions: Expression[];

  public constructor(source: NodeSourceLocation, vars: VariableExpression[], expressions: Expression[]) {
    super(source);
    this.vars = vars;
    this.expressions = expressions;

    this.addChildren(this.vars);
    this.addChildren(this.expressions);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitAssignmentStatement(this);
  }
}
