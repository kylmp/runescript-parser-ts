import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class EmptyStatement extends Statement {
  public readonly kind = NodeKind.EmptyStatement;
  public constructor(source: NodeSourceLocation) {
    super(source);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitEmptyStatement(this);
  }
}
