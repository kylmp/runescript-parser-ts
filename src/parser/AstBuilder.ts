import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor.js"
import type { ParserRuleContext } from "antlr4ts/ParserRuleContext.js"
import type { Token as AntlrToken } from "antlr4ts/Token.js"
import type { RuneScriptParserVisitor } from "../antlr/RuneScriptParserVisitor.js"
import {
  AdvancedIdentifierContext,
  ArithmeticBinaryExpressionContext,
  ArithmeticNormalExpressionContext,
  ArithmeticParenthesizedExpressionContext,
  ArrayDeclarationStatementContext,
  AssignmentStatementContext,
  BlockStatementContext,
  BooleanLiteralContext,
  CalcExpressionContext,
  CallExpressionContext,
  CharacterLiteralContext,
  ClientScriptContext,
  CommandCallExpressionContext,
  ConditionBinaryExpressionContext,
  ConditionNormalExpressionContext,
  ConditionParenthesizedExpressionContext,
  ConstantVariableContext,
  DeclarationStatementContext,
  EmptyStatementContext,
  ExpressionListContext,
  ExpressionStatementContext,
  GameVariableContext,
  IdentifierContext,
  IdentifierExpressionContext,
  IfStatementContext,
  IntegerLiteralContext,
  JoinedStringContext,
  JumpCallExpressionContext,
  LocalArrayVariableContext,
  LocalArrayVariableExpressionContext,
  LocalVariableContext,
  LocalVariableExpressionContext,
  NullLiteralContext,
  ParameterContext,
  ParenthesisContext,
  ParenthesizedExpressionContext,
  ProcCallExpressionContext,
  ReturnStatementContext,
  ScriptContext,
  ScriptFileContext,
  SingleExpressionContext,
  StringExpressionContext,
  StringLiteralContentContext,
  StringLiteralContext,
  StringPTagContext,
  StringTagContext,
  SwitchCaseContext,
  SwitchStatementContext,
  WhileStatementContext,
  JoinedStringExpressionContext,
  LiteralExpressionContext,
  GameVariableExpressionContext,
  ConstantVariableExpressionContext,
  CoordLiteralContext,
} from "../antlr/RuneScriptParser.js"
import type { Node } from "../ast/Node.js"
import type { NodeSourceLocation } from "../ast/NodeSourceLocation.js"
import { Parameter } from "../ast/Parameter.js"
import { Script } from "../ast/Script.js"
import { ScriptFile } from "../ast/ScriptFile.js"
import { Token } from "../ast/Token.js"
import { ArithmeticExpression, ConditionExpression } from "../ast/expr/BinaryExpression.js"
import { CalcExpression } from "../ast/expr/CalcExpression.js"
import { ClientScriptExpression } from "../ast/expr/ClientScriptExpression.js"
import { CommandCallExpression, JumpCallExpression, ProcCallExpression } from "../ast/expr/CallExpression.js"
import {
  BooleanLiteral,
  CharacterLiteral,
  CoordLiteral,
  IntegerLiteral,
  NullLiteral,
  StringLiteral,
} from "../ast/expr/Literal.js"
import type { Expression } from "../ast/expr/Expression.js"
import { Identifier } from "../ast/expr/Identifier.js"
import { JoinedStringExpression } from "../ast/expr/JoinedStringExpression.js"
import { ParenthesizedExpression } from "../ast/expr/ParenthesizedExpression.js"
import {
  BasicStringPart,
  ExpressionStringPart,
  PTagStringPart,
  StringPart,
} from "../ast/expr/StringPart.js"
import {
  ConstantVariableExpression,
  GameVariableExpression,
  LocalVariableExpression,
} from "../ast/expr/VariableExpression.js"
import { ArrayDeclarationStatement } from "../ast/statement/ArrayDeclarationStatement.js"
import { AssignmentStatement } from "../ast/statement/AssignmentStatement.js"
import { BlockStatement } from "../ast/statement/BlockStatement.js"
import { DeclarationStatement } from "../ast/statement/DeclarationStatement.js"
import { EmptyStatement } from "../ast/statement/EmptyStatement.js"
import { ExpressionStatement } from "../ast/statement/ExpressionStatement.js"
import { IfStatement } from "../ast/statement/IfStatement.js"
import { ReturnStatement } from "../ast/statement/ReturnStatement.js"
import { SwitchCase } from "../ast/statement/SwitchCase.js"
import { SwitchStatement } from "../ast/statement/SwitchStatement.js"
import { WhileStatement } from "../ast/statement/WhileStatement.js"

export class AstBuilder
  extends AbstractParseTreeVisitor<Node>
  implements RuneScriptParserVisitor<Node>
{
  private readonly source: string;
  private readonly lineOffset: number;
  private readonly columnOffset: number;

  public constructor(source: string, lineOffset: number, columnOffset: number) {
    super();
    this.source = source;
    this.lineOffset = lineOffset;
    this.columnOffset = columnOffset;
  }

  protected defaultResult(): Node {
    return undefined as unknown as Node;
  }

  protected aggregateResult(_aggregate: Node, nextResult: Node): Node {
    return nextResult;
  }

  public visitScriptFile(ctx: ScriptFileContext): Node {
    return new ScriptFile(this.location(ctx), ctx.script().map((script) => this.visitNode(script)));
  }

  public visitScript(ctx: ScriptContext): Node {
    const returns = ctx.typeList()?.IDENTIFIER()?.map((node) => this.toAstToken(node.symbol));

    return new Script({
      source: this.location(ctx),
      trigger: this.visitNode(ctx._trigger),
      name: this.visitNode(ctx._name),
      isStar: ctx.MUL() !== undefined,
      parameters: ctx.parameterList()?.parameter().map((param) => this.visitNode(param)) ?? null,
      returnTokens: returns ?? null,
      statements: ctx.statement().map((statement) => this.visitNode(statement)),
    });
  }

  public visitParameter(ctx: ParameterContext): Node {
    return new Parameter(this.location(ctx), this.toAstToken(ctx._type), this.visitNode(ctx.advancedIdentifier()));
  }

  public visitBlockStatement(ctx: BlockStatementContext): Node {
    return new BlockStatement(this.location(ctx), ctx.statement().map((statement) => this.visitNode(statement)));
  }

  public visitReturnStatement(ctx: ReturnStatementContext): Node {
    return new ReturnStatement(this.location(ctx), this.collectExpressionList(ctx.expressionList()));
  }

  public visitIfStatement(ctx: IfStatementContext): Node {
    const statements = ctx.statement();
    if (!statements[0]) {
      throw new Error("IfStatement missing then statement");
    }
    return new IfStatement(
      this.location(ctx),
      this.visitNode(ctx.condition()),
      this.visitNode(statements[0]),
      statements.length > 1 ? this.visitNode(statements[1]) : null
    );
  }

  public visitWhileStatement(ctx: WhileStatementContext): Node {
    return new WhileStatement(this.location(ctx), this.visitNode(ctx.condition()), this.visitNode(ctx.statement()));
  }

  public visitSwitchStatement(ctx: SwitchStatementContext): Node {
    return new SwitchStatement(
      this.location(ctx),
      this.toAstToken(ctx.SWITCH_TYPE().symbol),
      this.extractParenthesisExpression(ctx.parenthesis()),
      ctx.switchCase().map((switchCase) => this.visitNode(switchCase))
    );
  }

  public visitSwitchCase(ctx: SwitchCaseContext): Node {
    return new SwitchCase(
      this.location(ctx),
      this.collectExpressionList(ctx.expressionList()),
      ctx.statement()?.map((statement) => this.visitNode(statement)) ?? []
    );
  }

  public visitDeclarationStatement(ctx: DeclarationStatementContext): Node {
    return new DeclarationStatement(
      this.location(ctx),
      this.toAstToken(ctx.DEF_TYPE().symbol),
      this.visitNode(ctx.advancedIdentifier()),
      ctx.expression() ? this.visitNode(ctx.expression()) : null
    );
  }

  public visitArrayDeclarationStatement(ctx: ArrayDeclarationStatementContext): Node {
    return new ArrayDeclarationStatement(
      this.location(ctx),
      this.toAstToken(ctx.DEF_TYPE().symbol),
      this.visitNode(ctx.advancedIdentifier()),
      this.extractParenthesisExpression(ctx.parenthesis())
    );
  }

  public visitAssignmentStatement(ctx: AssignmentStatementContext): Node {
    return new AssignmentStatement(
      this.location(ctx),
      ctx.assignableVariableList()
        .assignableVariable()
        .map((variable) => this.visitNode(variable)),
      this.collectExpressionList(ctx.expressionList())
    );
  }

  public visitExpressionStatement(ctx: ExpressionStatementContext): Node {
    return new ExpressionStatement(this.location(ctx), this.visitNode(ctx.expression()));
  }

  public visitEmptyStatement(ctx: EmptyStatementContext): Node {
    return new EmptyStatement(this.location(ctx));
  }

  public visitSingleExpression(ctx: SingleExpressionContext): Node {
    return this.visitNode(ctx.expression());
  }

  public visitParenthesizedExpression(ctx: ParenthesizedExpressionContext): Node {
    return new ParenthesizedExpression(this.location(ctx), this.extractParenthesisExpression(ctx.parenthesis()));
  }

  public visitConditionParenthesizedExpression(ctx: ConditionParenthesizedExpressionContext): Node {
    return new ParenthesizedExpression(this.location(ctx), this.visitNode(ctx.condition()));
  }

  public visitArithmeticParenthesizedExpression(ctx: ArithmeticParenthesizedExpressionContext): Node {
    return new ParenthesizedExpression(this.location(ctx), this.visitNode(ctx.arithmetic()));
  }

  public visitConditionBinaryExpression(ctx: ConditionBinaryExpressionContext): Node {
    return new ConditionExpression(
      this.location(ctx),
      this.visitNode(ctx.condition(0)),
      this.toAstToken(ctx._op),
      this.visitNode(ctx.condition(1))
    );
  }

  public visitArithmeticBinaryExpression(ctx: ArithmeticBinaryExpressionContext): Node {
    return new ArithmeticExpression(
      this.location(ctx),
      this.visitNode(ctx.arithmetic(0)),
      this.toAstToken(ctx._op),
      this.visitNode(ctx.arithmetic(1))
    );
  }

  public visitCalcExpression(ctx: CalcExpressionContext): Node {
    return new CalcExpression(this.location(ctx), this.visitNode(ctx.calc().arithmetic()));
  }

  public visitCommandCallExpression(ctx: CommandCallExpressionContext): Node {
    const rawLists = ctx.expressionList();
    const lists = Array.isArray(rawLists) ? rawLists : rawLists ? [rawLists] : [];
    const args2 = ctx.MUL() !== undefined ? this.collectExpressionList(lists[1]) : null;

    return new CommandCallExpression(
      this.location(ctx),
      this.visitNode(ctx.identifier()),
      this.collectExpressionList(lists[0]),
      args2
    );
  }

  public visitProcCallExpression(ctx: ProcCallExpressionContext): Node {
    const rawLists = ctx.expressionList();
    const lists = Array.isArray(rawLists) ? rawLists : rawLists ? [rawLists] : [];
    return new ProcCallExpression(
      this.location(ctx),
      this.visitNode(ctx.identifier()),
      this.collectExpressionList(lists[0])
    );
  }

  public visitJumpCallExpression(ctx: JumpCallExpressionContext): Node {
    const rawLists = ctx.expressionList();
    const lists = Array.isArray(rawLists) ? rawLists : rawLists ? [rawLists] : [];
    return new JumpCallExpression(
      this.location(ctx),
      this.visitNode(ctx.identifier()),
      this.collectExpressionList(lists[0])
    );
  }

  public visitClientScript(ctx: ClientScriptContext): Node {
    return new ClientScriptExpression(
      this.location(ctx),
      this.visitNode(ctx.identifier()),
      this.collectExpressionList(ctx._args),
      this.collectExpressionList(ctx._triggers)
    );
  }

  public visitLocalVariable(ctx: LocalVariableContext): Node {
    return new LocalVariableExpression(this.location(ctx), this.visitNode(ctx.advancedIdentifier()), null);
  }

  public visitLocalArrayVariable(ctx: LocalArrayVariableContext): Node {
    return new LocalVariableExpression(
      this.location(ctx),
      this.visitNode(ctx.advancedIdentifier()),
      this.extractParenthesisExpression(ctx.parenthesis())
    );
  }

  public visitGameVariable(ctx: GameVariableContext): Node {
    const dot = ctx.DOTMOD() !== undefined;
    return new GameVariableExpression(this.location(ctx), dot, this.visitNode(ctx.advancedIdentifier()));
  }

  public visitConstantVariable(ctx: ConstantVariableContext): Node {
    return new ConstantVariableExpression(this.location(ctx), this.visitNode(ctx.advancedIdentifier()));
  }

  public visitIntegerLiteral(ctx: IntegerLiteralContext): Node {
    const text = ctx.text;
    if (text.length > 1 && text[0] === "0" && (text[1] === "x" || text[1] === "X")) {
      return new IntegerLiteral(this.location(ctx), parseInt(text.slice(2), 16));
    }
    return new IntegerLiteral(this.location(ctx), parseInt(text, 10));
  }

  public visitCoordLiteral(ctx: CoordLiteralContext): Node {
    const text = ctx.text;
    const parts = text.split("_").map((part) => parseInt(part, 10));

    const x = (parts[1] << 6) | (parts[3] & 0x3fff);
    const z = (parts[2] << 6) | (parts[4] & 0x3fff);
    const y = parts[0] & 0x3;

    const packed = (z | (x << 14) | (y << 28)) | 0;
    return new CoordLiteral(this.location(ctx), packed);
  }

  public visitBooleanLiteral(ctx: BooleanLiteralContext): Node {
    return new BooleanLiteral(this.location(ctx), ctx.text === "true");
  }

  public visitCharacterLiteral(ctx: CharacterLiteralContext): Node {
    const cleaned = this.unescape(ctx.text.slice(1, -1));
    if (cleaned.length !== 1) {
      throw new Error(`invalid character literal: text=${ctx.text}, cleaned=${cleaned}`);
    }
    return new CharacterLiteral(this.location(ctx), cleaned);
  }

  public visitStringLiteral(ctx: StringLiteralContext): Node {
    return new StringLiteral(this.location(ctx), this.unescape(ctx.text.slice(1, -1)));
  }

  public visitNullLiteral(ctx: NullLiteralContext): Node {
    return new NullLiteral(this.location(ctx));
  }

  public visitJoinedString(ctx: JoinedStringContext): Node {
    const parts: StringPart[] = [];

    for (const child of ctx.children ?? []) {
      if (child instanceof StringLiteralContentContext) {
        parts.push(new BasicStringPart(this.location(child), this.unescape(child.text)));
      } else if (child instanceof StringTagContext) {
        parts.push(new BasicStringPart(this.location(child), child.text));
      } else if (child instanceof StringPTagContext) {
        parts.push(new PTagStringPart(this.location(child), child.text));
      } else if (child instanceof StringExpressionContext) {
        const expression = this.visitNode<Expression>(child.expression());
        parts.push(new ExpressionStringPart(this.location(child), expression));
      }
    }

    return new JoinedStringExpression(this.location(ctx), parts);
  }

  public visitIdentifier(ctx: IdentifierContext): Node {
    return new Identifier(this.location(ctx), ctx.text);
  }

  public visitAdvancedIdentifier(ctx: AdvancedIdentifierContext): Node {
    return new Identifier(this.location(ctx), ctx.text);
  }

  public visitConditionNormalExpression(ctx: ConditionNormalExpressionContext): Node {
    return this.visitNode(ctx.expression());
  }

  public visitArithmeticNormalExpression(ctx: ArithmeticNormalExpressionContext): Node {
    return this.visitNode(ctx.expression());
  }

  public visitCallExpression(ctx: CallExpressionContext): Node {
    return this.visitNode(ctx.call());
  }

  public visitIdentifierExpression(ctx: IdentifierExpressionContext): Node {
    return this.visitNode(ctx.identifier());
  }

  public visitLiteralExpression(ctx: LiteralExpressionContext): Node {
    return this.visitNode(ctx.literal());
  }

  public visitJoinedStringExpression(ctx: JoinedStringExpressionContext): Node {
    return this.visitNode(ctx.joinedString());
  }

  public visitLocalVariableExpression(ctx: LocalVariableExpressionContext): Node {
    return this.visitNode(ctx.localVariable());
  }

  public visitLocalArrayVariableExpression(ctx: LocalArrayVariableExpressionContext): Node {
    return this.visitNode(ctx.localArrayVariable());
  }

  public visitGameVariableExpression(ctx: GameVariableExpressionContext): Node {
    return this.visitNode(ctx.gameVariable());
  }

  public visitConstantVariableExpression(ctx: ConstantVariableExpressionContext): Node {
    return this.visitNode(ctx.constantVariable());
  }

  private location(ctx: ParserRuleContext): NodeSourceLocation {
    return this.locationFromToken(ctx.start);
  }

  private locationFromToken(token: AntlrToken): NodeSourceLocation {
    const columnOffset = token.line === 1 ? this.columnOffset : 0;
    return {
      name: this.source,
      line: token.line + this.lineOffset,
      column: token.charPositionInLine + columnOffset + 1,
    };
  }

  private toAstToken(token: AntlrToken): Token {
    return new Token(this.locationFromToken(token), token.text ?? "");
  }

  private visitNode<T extends Node>(ctx: ParserRuleContext | null | undefined): T {
    if (!ctx) {
      throw new Error("Expected parser context but received null/undefined.");
    }
    return this.visit(ctx) as T;
  }

  private collectExpressionList(ctx?: ExpressionListContext | null): Expression[] {
    if (!ctx) {
      return [];
    }
    const expressions = ctx.expression();
    const list = Array.isArray(expressions) ? expressions : [expressions];
    return list.map((expr) => this.visitNode<Expression>(expr));
  }

  private extractParenthesisExpression(ctx: ParenthesisContext): Expression {
    return this.visitNode<Expression>(ctx.expression());
  }

  private unescape(value: string): string {
    let result = "";
    for (let i = 0; i < value.length; i += 1) {
      const current = value[i];
      if (current === "\\") {
        const next = i === value.length - 1 ? "\\" : value[i + 1];
        if (next === "\\" || next === "'" || next === '"' || next === "<") {
          result += next;
        } else {
          throw new Error(`unsupported escape sequence: \\${next}`);
        }
        i += 1;
      } else {
        result += current;
      }
    }
    return result;
  }
}
