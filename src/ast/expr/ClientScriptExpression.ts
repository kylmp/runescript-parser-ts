import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import { CallExpression } from "./CallExpression.js"
import type { Expression } from "./Expression.js"
import type { Identifier } from "./Identifier.js"
import { NodeKind } from "../NodeKind.js"

export class ClientScriptExpression extends CallExpression {
  public readonly kind = NodeKind.ClientScriptExpression;
  public readonly transmitList: Expression[];

  public constructor(
    source: NodeSourceLocation,
    name: Identifier,
    args: Expression[],
    transmitList: Expression[]
  ) {
    super(source, name, args);
    this.transmitList = transmitList;

    this.addChildren(this.transmitList);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitClientScriptExpression(this);
  }
}
