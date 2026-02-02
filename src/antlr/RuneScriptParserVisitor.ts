// Generated from antlr/RuneScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor.js";

import { ArithmeticParenthesizedExpressionContext } from "./RuneScriptParser.js";
import { ArithmeticBinaryExpressionContext } from "./RuneScriptParser.js";
import { ArithmeticNormalExpressionContext } from "./RuneScriptParser.js";
import { IntegerLiteralContext } from "./RuneScriptParser.js";
import { CoordLiteralContext } from "./RuneScriptParser.js";
import { BooleanLiteralContext } from "./RuneScriptParser.js";
import { CharacterLiteralContext } from "./RuneScriptParser.js";
import { NullLiteralContext } from "./RuneScriptParser.js";
import { StringLiteralExpressionContext } from "./RuneScriptParser.js";
import { ParenthesizedExpressionContext } from "./RuneScriptParser.js";
import { CalcExpressionContext } from "./RuneScriptParser.js";
import { CallExpressionContext } from "./RuneScriptParser.js";
import { LocalVariableExpressionContext } from "./RuneScriptParser.js";
import { LocalArrayVariableExpressionContext } from "./RuneScriptParser.js";
import { GameVariableExpressionContext } from "./RuneScriptParser.js";
import { ConstantVariableExpressionContext } from "./RuneScriptParser.js";
import { LiteralExpressionContext } from "./RuneScriptParser.js";
import { JoinedStringExpressionContext } from "./RuneScriptParser.js";
import { IdentifierExpressionContext } from "./RuneScriptParser.js";
import { CommandCallExpressionContext } from "./RuneScriptParser.js";
import { ProcCallExpressionContext } from "./RuneScriptParser.js";
import { JumpCallExpressionContext } from "./RuneScriptParser.js";
import { ConditionParenthesizedExpressionContext } from "./RuneScriptParser.js";
import { ConditionBinaryExpressionContext } from "./RuneScriptParser.js";
import { ConditionNormalExpressionContext } from "./RuneScriptParser.js";
import { ScriptFileContext } from "./RuneScriptParser.js";
import { ScriptContext } from "./RuneScriptParser.js";
import { ParameterListContext } from "./RuneScriptParser.js";
import { ParameterContext } from "./RuneScriptParser.js";
import { TypeListContext } from "./RuneScriptParser.js";
import { StatementContext } from "./RuneScriptParser.js";
import { BlockStatementContext } from "./RuneScriptParser.js";
import { ReturnStatementContext } from "./RuneScriptParser.js";
import { IfStatementContext } from "./RuneScriptParser.js";
import { WhileStatementContext } from "./RuneScriptParser.js";
import { SwitchStatementContext } from "./RuneScriptParser.js";
import { SwitchCaseContext } from "./RuneScriptParser.js";
import { DeclarationStatementContext } from "./RuneScriptParser.js";
import { ArrayDeclarationStatementContext } from "./RuneScriptParser.js";
import { AssignmentStatementContext } from "./RuneScriptParser.js";
import { ExpressionStatementContext } from "./RuneScriptParser.js";
import { EmptyStatementContext } from "./RuneScriptParser.js";
import { ExpressionListContext } from "./RuneScriptParser.js";
import { ParenthesisContext } from "./RuneScriptParser.js";
import { SingleExpressionContext } from "./RuneScriptParser.js";
import { ExpressionContext } from "./RuneScriptParser.js";
import { ConditionContext } from "./RuneScriptParser.js";
import { CalcContext } from "./RuneScriptParser.js";
import { ArithmeticContext } from "./RuneScriptParser.js";
import { CallContext } from "./RuneScriptParser.js";
import { ClientScriptContext } from "./RuneScriptParser.js";
import { AssignableVariableListContext } from "./RuneScriptParser.js";
import { AssignableVariableContext } from "./RuneScriptParser.js";
import { LocalVariableContext } from "./RuneScriptParser.js";
import { LocalArrayVariableContext } from "./RuneScriptParser.js";
import { GameVariableContext } from "./RuneScriptParser.js";
import { ConstantVariableContext } from "./RuneScriptParser.js";
import { LiteralContext } from "./RuneScriptParser.js";
import { StringLiteralContext } from "./RuneScriptParser.js";
import { StringLiteralContentContext } from "./RuneScriptParser.js";
import { JoinedStringContext } from "./RuneScriptParser.js";
import { StringTagContext } from "./RuneScriptParser.js";
import { StringPTagContext } from "./RuneScriptParser.js";
import { StringExpressionContext } from "./RuneScriptParser.js";
import { IdentifierContext } from "./RuneScriptParser.js";
import { AdvancedIdentifierContext } from "./RuneScriptParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RuneScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RuneScriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ArithmeticParenthesizedExpression`
	 * labeled alternative in `RuneScriptParser.arithmetic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticParenthesizedExpression?: (ctx: ArithmeticParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArithmeticBinaryExpression`
	 * labeled alternative in `RuneScriptParser.arithmetic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinaryExpression?: (ctx: ArithmeticBinaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArithmeticNormalExpression`
	 * labeled alternative in `RuneScriptParser.arithmetic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticNormalExpression?: (ctx: ArithmeticNormalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntegerLiteral`
	 * labeled alternative in `RuneScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `CoordLiteral`
	 * labeled alternative in `RuneScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoordLiteral?: (ctx: CoordLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `BooleanLiteral`
	 * labeled alternative in `RuneScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `CharacterLiteral`
	 * labeled alternative in `RuneScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacterLiteral?: (ctx: CharacterLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `NullLiteral`
	 * labeled alternative in `RuneScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringLiteralExpression`
	 * labeled alternative in `RuneScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralExpression?: (ctx: StringLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CalcExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcExpression?: (ctx: CalcExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CallExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpression?: (ctx: CallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LocalVariableExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableExpression?: (ctx: LocalVariableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LocalArrayVariableExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalArrayVariableExpression?: (ctx: LocalArrayVariableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GameVariableExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGameVariableExpression?: (ctx: GameVariableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConstantVariableExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantVariableExpression?: (ctx: ConstantVariableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `JoinedStringExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinedStringExpression?: (ctx: JoinedStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CommandCallExpression`
	 * labeled alternative in `RuneScriptParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandCallExpression?: (ctx: CommandCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ProcCallExpression`
	 * labeled alternative in `RuneScriptParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcCallExpression?: (ctx: ProcCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `JumpCallExpression`
	 * labeled alternative in `RuneScriptParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJumpCallExpression?: (ctx: JumpCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConditionParenthesizedExpression`
	 * labeled alternative in `RuneScriptParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionParenthesizedExpression?: (ctx: ConditionParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConditionBinaryExpression`
	 * labeled alternative in `RuneScriptParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionBinaryExpression?: (ctx: ConditionBinaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConditionNormalExpression`
	 * labeled alternative in `RuneScriptParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionNormalExpression?: (ctx: ConditionNormalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.scriptFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptFile?: (ctx: ScriptFileContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.switchCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchCase?: (ctx: SwitchCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.declarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationStatement?: (ctx: DeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.arrayDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDeclarationStatement?: (ctx: ArrayDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.parenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesis?: (ctx: ParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.calc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalc?: (ctx: CalcContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.arithmetic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic?: (ctx: ArithmeticContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.clientScript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClientScript?: (ctx: ClientScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.assignableVariableList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignableVariableList?: (ctx: AssignableVariableListContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.assignableVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignableVariable?: (ctx: AssignableVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.localVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariable?: (ctx: LocalVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.localArrayVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalArrayVariable?: (ctx: LocalArrayVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.gameVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGameVariable?: (ctx: GameVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.constantVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantVariable?: (ctx: ConstantVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.stringLiteralContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralContent?: (ctx: StringLiteralContentContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.joinedString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinedString?: (ctx: JoinedStringContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.stringTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringTag?: (ctx: StringTagContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.stringPTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringPTag?: (ctx: StringPTagContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `RuneScriptParser.advancedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdvancedIdentifier?: (ctx: AdvancedIdentifierContext) => Result;
}

