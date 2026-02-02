import { Node } from "./Node.js"
import type { AstVisitor } from "./AstVisitor.js"
import type { NodeSourceLocation } from "./NodeSourceLocation.js"
import { NodeKind } from "./NodeKind.js"

export class Token extends Node {
  public readonly kind = NodeKind.Token;
  public readonly text: string;

  public constructor(source: NodeSourceLocation, text: string) {
    super(source);
    this.text = text;
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitToken(this);
  }
}
