import { Node } from "./Node.js"
import type { AstVisitor } from "./AstVisitor.js"
import type { NodeSourceLocation } from "./NodeSourceLocation.js"
import type { Token } from "./Token.js"
import type { Identifier } from "./expr/Identifier.js"
import { NodeKind } from "./NodeKind.js"

export class Parameter extends Node {
  public readonly kind = NodeKind.Parameter;
  public readonly typeToken: Token;
  public readonly name: Identifier;

  public constructor(source: NodeSourceLocation, typeToken: Token, name: Identifier) {
    super(source);
    this.typeToken = typeToken;
    this.name = name;

    this.addChild(this.typeToken);
    this.addChild(this.name);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitParameter(this);
  }
}
