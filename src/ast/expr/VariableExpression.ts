import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import { Expression } from "./Expression.js"
import type { Identifier } from "./Identifier.js"
import { NodeKind } from "../NodeKind.js"

export abstract class VariableExpression extends Expression {
  public readonly name: Identifier;

  protected constructor(source: NodeSourceLocation, name: Identifier) {
    super(source);
    this.name = name;
    this.addChild(this.name);
  }
}

export class LocalVariableExpression extends VariableExpression {
  public readonly kind = NodeKind.LocalVariableExpression;
  public readonly index: Expression | null;

  public constructor(source: NodeSourceLocation, name: Identifier, index: Expression | null = null) {
    super(source, name);
    this.index = index;
    this.addChild(this.index);
  }

  public get isArray(): boolean {
    return this.index !== null;
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitLocalVariableExpression(this);
  }
}

export class GameVariableExpression extends VariableExpression {
  public readonly kind = NodeKind.GameVariableExpression;
  public readonly dot: boolean;

  public constructor(source: NodeSourceLocation, dot: boolean, name: Identifier) {
    super(source, name);
    this.dot = dot;
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitGameVariableExpression(this);
  }
}

export class ConstantVariableExpression extends VariableExpression {
  public readonly kind = NodeKind.ConstantVariableExpression;
  public constructor(source: NodeSourceLocation, name: Identifier) {
    super(source, name);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitConstantVariableExpression(this);
  }
}
