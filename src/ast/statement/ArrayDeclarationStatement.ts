import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import type { Token } from "../Token.js"
import type { Expression } from "../expr/Expression.js"
import type { Identifier } from "../expr/Identifier.js"
import { Statement } from "./Statement.js"
import { NodeKind } from "../NodeKind.js"

export class ArrayDeclarationStatement extends Statement {
  public readonly kind = NodeKind.ArrayDeclarationStatement;
  public readonly typeToken: Token;
  public readonly name: Identifier;
  public readonly initializer: Expression;

  public constructor(source: NodeSourceLocation, typeToken: Token, name: Identifier, initializer: Expression) {
    super(source);
    this.typeToken = typeToken;
    this.name = name;
    this.initializer = initializer;

    this.addChild(this.typeToken);
    this.addChild(this.name);
    this.addChild(this.initializer);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitArrayDeclarationStatement(this);
  }
}
