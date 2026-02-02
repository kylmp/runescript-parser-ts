import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Token } from "../Token.js"
import type { Expression } from "../expr/Expression.js"
import type { SwitchCase } from "./SwitchCase.js"
import { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class SwitchStatement extends Statement {
  public readonly kind = NodeKind.SwitchStatement;
  public readonly typeToken: Token;
  public readonly condition: Expression;
  public readonly cases: SwitchCase[];

  public constructor(source: NodeSourceLocation, typeToken: Token, condition: Expression, cases: SwitchCase[]) {
    super(source);
    this.typeToken = typeToken;
    this.condition = condition;
    this.cases = cases;

    this.addChild(this.typeToken);
    this.addChild(this.condition);
    this.addChildren(this.cases);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitSwitchStatement(this);
  }
}
