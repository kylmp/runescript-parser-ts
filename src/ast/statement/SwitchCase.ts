import type { AstVisitor } from "../AstVisitor.js"
import { Node } from "../Node.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Expression } from "../expr/Expression.js"
import type { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class SwitchCase extends Node {
  public readonly kind = NodeKind.SwitchCase;
  public readonly keys: Expression[];
  public readonly statements: Statement[];

  public constructor(source: NodeSourceLocation, keys: Expression[], statements: Statement[]) {
    super(source);
    this.keys = keys;
    this.statements = statements;

    this.addChildren(this.keys);
    this.addChildren(this.statements);
  }

  public get isDefault(): boolean {
    return this.keys.length === 0;
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitSwitchCase(this);
  }
}
