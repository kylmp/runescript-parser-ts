import type { AstVisitor } from "../AstVisitor.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"
import { Expression } from "./Expression.js"
import { NodeKind } from "../NodeKind.js"

export abstract class Literal<T> extends Expression {
  public readonly value: T;

  protected constructor(source: NodeSourceLocation, value: T) {
    super(source);
    this.value = value;
  }
}

export class IntegerLiteral extends Literal<number> {
  public readonly kind = NodeKind.IntegerLiteral;
  public constructor(source: NodeSourceLocation, value: number) {
    super(source, value);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitIntegerLiteral(this);
  }
}

export class CoordLiteral extends Literal<number> {
  public readonly kind = NodeKind.CoordLiteral;
  public constructor(source: NodeSourceLocation, value: number) {
    super(source, value);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitCoordLiteral(this);
  }
}

export class BooleanLiteral extends Literal<boolean> {
  public readonly kind = NodeKind.BooleanLiteral;
  public constructor(source: NodeSourceLocation, value: boolean) {
    super(source, value);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitBooleanLiteral(this);
  }
}

export class CharacterLiteral extends Literal<string> {
  public readonly kind = NodeKind.CharacterLiteral;
  public constructor(source: NodeSourceLocation, value: string) {
    super(source, value);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitCharacterLiteral(this);
  }
}

export class StringLiteral extends Literal<string> {
  public readonly kind = NodeKind.StringLiteral;
  public constructor(source: NodeSourceLocation, value: string) {
    super(source, value);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitStringLiteral(this);
  }
}

export class NullLiteral extends Literal<number> {
  public readonly kind = NodeKind.NullLiteral;
  public constructor(source: NodeSourceLocation) {
    super(source, -1);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitNullLiteral(this);
  }
}
