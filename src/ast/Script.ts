import { Node } from "./Node.js"
import type { AstVisitor } from "./AstVisitor.js"
import type { NodeSourceLocation } from "./NodeSourceLocation.js"
import type { Parameter } from "./Parameter.js"
import type { Token } from "./Token.js"
import type { Identifier } from "./expr/Identifier.js"
import type { Statement } from "./statement/Statement.js"
import { NodeKind } from "./NodeKind.js"

export class Script extends Node {
  public readonly kind = NodeKind.Script;
  public readonly trigger: Identifier;
  public readonly name: Identifier;
  public readonly isStar: boolean;
  public readonly parameters: Parameter[] | null;
  public readonly returnTokens: Token[] | null;
  public readonly statements: Statement[];

  public constructor(options: {
    source: NodeSourceLocation;
    trigger: Identifier;
    name: Identifier;
    isStar: boolean;
    parameters: Parameter[] | null;
    returnTokens: Token[] | null;
    statements: Statement[];
  }) {
    super(options.source);
    this.trigger = options.trigger;
    this.name = options.name;
    this.isStar = options.isStar;
    this.parameters = options.parameters;
    this.returnTokens = options.returnTokens;
    this.statements = options.statements;

    this.addChild(this.trigger);
    this.addChild(this.name);
    if (this.parameters) {
      this.addChildren(this.parameters);
    }
    if (this.returnTokens) {
      this.addChildren(this.returnTokens);
    }
    this.addChildren(this.statements);
  }

  public get nameString(): string {
    return this.isStar ? `${this.name.text}*` : this.name.text;
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitScript(this);
  }
}
