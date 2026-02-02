import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import { Expression } from "./Expression.js"
import type { Identifier } from "./Identifier.js"
import { NodeKind } from "../NodeKind.js"

export abstract class CallExpression extends Expression {
  public readonly name: Identifier;
  public readonly arguments: Expression[];

  protected constructor(source: NodeSourceLocation, name: Identifier, args: Expression[]) {
    super(source);
    this.name = name;
    this.arguments = args;

    this.addChild(this.name);
    this.addChildren(this.arguments);
  }
}

export class CommandCallExpression extends CallExpression {
  public readonly kind = NodeKind.CommandCallExpression;
  public readonly arguments2: Expression[] | null;

  public constructor(
    source: NodeSourceLocation,
    name: Identifier,
    args: Expression[],
    args2: Expression[] | null
  ) {
    super(source, name, args);
    this.arguments2 = args2;

    if (this.arguments2) {
      this.addChildren(this.arguments2);
    }
  }

  public get isStar(): boolean {
    return this.arguments2 !== null;
  }

  public get nameString(): string {
    return this.isStar ? `${this.name.text}*` : this.name.text;
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitCommandCallExpression(this);
  }
}

export class ProcCallExpression extends CallExpression {
  public readonly kind = NodeKind.ProcCallExpression;
  public constructor(source: NodeSourceLocation, name: Identifier, args: Expression[]) {
    super(source, name, args);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitProcCallExpression(this);
  }
}

export class JumpCallExpression extends CallExpression {
  public readonly kind = NodeKind.JumpCallExpression;
  public constructor(source: NodeSourceLocation, name: Identifier, args: Expression[]) {
    super(source, name, args);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitJumpCallExpression(this);
  }
}
