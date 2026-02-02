import type { Node } from "./Node.js"
import type { Parameter } from "./Parameter.js"
import type { Script } from "./Script.js"
import type { ScriptFile } from "./ScriptFile.js"
import type { Token } from "./Token.js"
import type { ArithmeticExpression, BinaryExpression, ConditionExpression } from "./expr/BinaryExpression.js"
import type {
  BooleanLiteral,
  CharacterLiteral,
  CoordLiteral,
  IntegerLiteral,
  Literal,
  NullLiteral,
  StringLiteral,
} from "./expr/Literal.js"
import type { CalcExpression } from "./expr/CalcExpression.js"
import type { CallExpression, CommandCallExpression, JumpCallExpression, ProcCallExpression } from "./expr/CallExpression.js"
import type { ClientScriptExpression } from "./expr/ClientScriptExpression.js"
import type { Expression } from "./expr/Expression.js"
import type { GameVariableExpression, LocalVariableExpression, VariableExpression, ConstantVariableExpression } from "./expr/VariableExpression.js"
import type { Identifier } from "./expr/Identifier.js"
import type { JoinedStringExpression } from "./expr/JoinedStringExpression.js"
import type { ParenthesizedExpression } from "./expr/ParenthesizedExpression.js"
import type { StringPart } from "./expr/StringPart.js"
import type { ArrayDeclarationStatement } from "./statement/ArrayDeclarationStatement.js"
import type { AssignmentStatement } from "./statement/AssignmentStatement.js"
import type { BlockStatement } from "./statement/BlockStatement.js"
import type { DeclarationStatement } from "./statement/DeclarationStatement.js"
import type { EmptyStatement } from "./statement/EmptyStatement.js"
import type { ExpressionStatement } from "./statement/ExpressionStatement.js"
import type { IfStatement } from "./statement/IfStatement.js"
import type { ReturnStatement } from "./statement/ReturnStatement.js"
import type { Statement } from "./statement/Statement.js"
import type { SwitchCase } from "./statement/SwitchCase.js"
import type { SwitchStatement } from "./statement/SwitchStatement.js"
import type { WhileStatement } from "./statement/WhileStatement.js"

export abstract class AstVisitor<R> {
  public visitScriptFile(scriptFile: ScriptFile): R {
    return this.visitNode(scriptFile);
  }

  public visitScript(script: Script): R {
    return this.visitNode(script);
  }

  public visitParameter(parameter: Parameter): R {
    return this.visitNode(parameter);
  }

  public visitBlockStatement(blockStatement: BlockStatement): R {
    return this.visitStatement(blockStatement);
  }

  public visitReturnStatement(returnStatement: ReturnStatement): R {
    return this.visitStatement(returnStatement);
  }

  public visitIfStatement(ifStatement: IfStatement): R {
    return this.visitStatement(ifStatement);
  }

  public visitWhileStatement(whileStatement: WhileStatement): R {
    return this.visitStatement(whileStatement);
  }

  public visitSwitchStatement(switchStatement: SwitchStatement): R {
    return this.visitStatement(switchStatement);
  }

  public visitSwitchCase(switchCase: SwitchCase): R {
    return this.visitNode(switchCase);
  }

  public visitDeclarationStatement(declarationStatement: DeclarationStatement): R {
    return this.visitStatement(declarationStatement);
  }

  public visitArrayDeclarationStatement(arrayDeclarationStatement: ArrayDeclarationStatement): R {
    return this.visitStatement(arrayDeclarationStatement);
  }

  public visitAssignmentStatement(assignmentStatement: AssignmentStatement): R {
    return this.visitStatement(assignmentStatement);
  }

  public visitExpressionStatement(expressionStatement: ExpressionStatement): R {
    return this.visitStatement(expressionStatement);
  }

  public visitEmptyStatement(emptyStatement: EmptyStatement): R {
    return this.visitStatement(emptyStatement);
  }

  public visitStatement(statement: Statement): R {
    return this.visitNode(statement);
  }

  public visitParenthesizedExpression(parenthesizedExpression: ParenthesizedExpression): R {
    return this.visitExpression(parenthesizedExpression);
  }

  public visitConditionExpression(conditionExpression: ConditionExpression): R {
    return this.visitBinaryExpression(conditionExpression);
  }

  public visitArithmeticExpression(arithmeticExpression: ArithmeticExpression): R {
    return this.visitBinaryExpression(arithmeticExpression);
  }

  public visitBinaryExpression(binaryExpression: BinaryExpression): R {
    return this.visitExpression(binaryExpression);
  }

  public visitCalcExpression(calcExpression: CalcExpression): R {
    return this.visitExpression(calcExpression);
  }

  public visitCommandCallExpression(commandCallExpression: CommandCallExpression): R {
    return this.visitCallExpression(commandCallExpression);
  }

  public visitProcCallExpression(procCallExpression: ProcCallExpression): R {
    return this.visitCallExpression(procCallExpression);
  }

  public visitJumpCallExpression(jumpCallExpression: JumpCallExpression): R {
    return this.visitCallExpression(jumpCallExpression);
  }

  public visitCallExpression(callExpression: CallExpression): R {
    return this.visitExpression(callExpression);
  }

  public visitClientScriptExpression(clientScriptExpression: ClientScriptExpression): R {
    return this.visitExpression(clientScriptExpression);
  }

  public visitLocalVariableExpression(localVariableExpression: LocalVariableExpression): R {
    return this.visitVariableExpression(localVariableExpression);
  }

  public visitGameVariableExpression(gameVariableExpression: GameVariableExpression): R {
    return this.visitVariableExpression(gameVariableExpression);
  }

  public visitConstantVariableExpression(constantVariableExpression: ConstantVariableExpression): R {
    return this.visitVariableExpression(constantVariableExpression);
  }

  public visitVariableExpression(variableExpression: VariableExpression): R {
    return this.visitExpression(variableExpression);
  }

  public visitExpression(expression: Expression): R {
    return this.visitNode(expression);
  }

  public visitIntegerLiteral(integerLiteral: IntegerLiteral): R {
    return this.visitLiteral(integerLiteral);
  }

  public visitCoordLiteral(coordLiteral: CoordLiteral): R {
    return this.visitLiteral(coordLiteral);
  }

  public visitBooleanLiteral(booleanLiteral: BooleanLiteral): R {
    return this.visitLiteral(booleanLiteral);
  }

  public visitCharacterLiteral(characterLiteral: CharacterLiteral): R {
    return this.visitLiteral(characterLiteral);
  }

  public visitNullLiteral(nullLiteral: NullLiteral): R {
    return this.visitLiteral(nullLiteral);
  }

  public visitStringLiteral(stringLiteral: StringLiteral): R {
    return this.visitLiteral(stringLiteral);
  }

  public visitLiteral(literal: Literal<unknown>): R {
    return this.visitExpression(literal);
  }

  public visitJoinedStringExpression(joinedStringExpression: JoinedStringExpression): R {
    return this.visitExpression(joinedStringExpression);
  }

  public visitJoinedStringPart(stringPart: StringPart): R {
    return this.visitNode(stringPart);
  }

  public visitIdentifier(identifier: Identifier): R {
    return this.visitExpression(identifier);
  }

  public visitToken(token: Token): R {
    return this.visitNode(token);
  }

  protected visitNode(node: Node): R {
    throw new Error(`not implemented: ${node.constructor.name}`);
  }
}
