import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class BlockStatement extends Statement {
  public readonly kind = NodeKind.BlockStatement;
  public readonly statements: Statement[];

  public constructor(source: NodeSourceLocation, statements: Statement[]) {
    super(source);
    this.statements = statements;
    this.addChildren(this.statements);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitBlockStatement(this);
  }
}
