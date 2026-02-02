import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import { Expression } from "./Expression.js"
import { NodeKind } from "../NodeKind.js"

export class Identifier extends Expression {
  public readonly kind = NodeKind.Identifier;
  public readonly text: string;

  public constructor(source: NodeSourceLocation, text: string) {
    super(source);
    this.text = text;
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitIdentifier(this);
  }
}
