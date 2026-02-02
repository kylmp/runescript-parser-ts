// Generated from antlr/RuneScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN.js";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer.js";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException.js";
import { NotNull } from "antlr4ts/Decorators.js";
import { NoViableAltException } from "antlr4ts/NoViableAltException.js";
import { Override } from "antlr4ts/Decorators.js";
import { Parser } from "antlr4ts/Parser.js";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext.js";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator.js";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener.js";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor.js";
import { RecognitionException } from "antlr4ts/RecognitionException.js";
import { RuleContext } from "antlr4ts/RuleContext.js";
//import { RuleVersion } from "antlr4ts/RuleVersion.js";
import { TerminalNode } from "antlr4ts/tree/TerminalNode.js";
import { Token } from "antlr4ts/Token.js";
import { TokenStream } from "antlr4ts/TokenStream.js";
import { Vocabulary } from "antlr4ts/Vocabulary.js";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl.js";

import * as Utils from "antlr4ts/misc/Utils.js";

import { RuneScriptParserVisitor } from "./RuneScriptParserVisitor.js";


export class RuneScriptParser extends Parser {
	public static readonly LPAREN = 1;
	public static readonly RPAREN = 2;
	public static readonly COLON = 3;
	public static readonly SEMICOLON = 4;
	public static readonly COMMA = 5;
	public static readonly LBRACK = 6;
	public static readonly RBRACK = 7;
	public static readonly LBRACE = 8;
	public static readonly RBRACE = 9;
	public static readonly PLUS = 10;
	public static readonly MINUS = 11;
	public static readonly MUL = 12;
	public static readonly DIV = 13;
	public static readonly DOTMOD = 14;
	public static readonly MOD = 15;
	public static readonly AND = 16;
	public static readonly OR = 17;
	public static readonly EQ = 18;
	public static readonly EXCL = 19;
	public static readonly DOLLAR = 20;
	public static readonly CARET = 21;
	public static readonly TILDE = 22;
	public static readonly AT = 23;
	public static readonly GT = 24;
	public static readonly GTE = 25;
	public static readonly LT = 26;
	public static readonly LTE = 27;
	public static readonly IF = 28;
	public static readonly ELSE = 29;
	public static readonly WHILE = 30;
	public static readonly CASE = 31;
	public static readonly DEFAULT = 32;
	public static readonly RETURN = 33;
	public static readonly CALC = 34;
	public static readonly TYPE_ARRAY = 35;
	public static readonly DEF_TYPE = 36;
	public static readonly SWITCH_TYPE = 37;
	public static readonly INTEGER_LITERAL = 38;
	public static readonly HEX_LITERAL = 39;
	public static readonly COORD_LITERAL = 40;
	public static readonly MAPZONE_LITERAL = 41;
	public static readonly BOOLEAN_LITERAL = 42;
	public static readonly CHAR_LITERAL = 43;
	public static readonly NULL_LITERAL = 44;
	public static readonly LINE_COMMENT = 45;
	public static readonly BLOCK_COMMENT = 46;
	public static readonly QUOTE_OPEN = 47;
	public static readonly IDENTIFIER = 48;
	public static readonly WHITESPACE = 49;
	public static readonly QUOTE_CLOSE = 50;
	public static readonly STRING_TEXT = 51;
	public static readonly STRING_TAG = 52;
	public static readonly STRING_CLOSE_TAG = 53;
	public static readonly STRING_PARTIAL_TAG = 54;
	public static readonly STRING_P_TAG = 55;
	public static readonly STRING_EXPR_START = 56;
	public static readonly STRING_EXPR_END = 57;
	public static readonly RULE_scriptFile = 0;
	public static readonly RULE_script = 1;
	public static readonly RULE_parameterList = 2;
	public static readonly RULE_parameter = 3;
	public static readonly RULE_typeList = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_blockStatement = 6;
	public static readonly RULE_returnStatement = 7;
	public static readonly RULE_ifStatement = 8;
	public static readonly RULE_whileStatement = 9;
	public static readonly RULE_switchStatement = 10;
	public static readonly RULE_switchCase = 11;
	public static readonly RULE_declarationStatement = 12;
	public static readonly RULE_arrayDeclarationStatement = 13;
	public static readonly RULE_assignmentStatement = 14;
	public static readonly RULE_expressionStatement = 15;
	public static readonly RULE_emptyStatement = 16;
	public static readonly RULE_expressionList = 17;
	public static readonly RULE_parenthesis = 18;
	public static readonly RULE_singleExpression = 19;
	public static readonly RULE_expression = 20;
	public static readonly RULE_condition = 21;
	public static readonly RULE_calc = 22;
	public static readonly RULE_arithmetic = 23;
	public static readonly RULE_call = 24;
	public static readonly RULE_clientScript = 25;
	public static readonly RULE_assignableVariableList = 26;
	public static readonly RULE_assignableVariable = 27;
	public static readonly RULE_localVariable = 28;
	public static readonly RULE_localArrayVariable = 29;
	public static readonly RULE_gameVariable = 30;
	public static readonly RULE_constantVariable = 31;
	public static readonly RULE_literal = 32;
	public static readonly RULE_stringLiteral = 33;
	public static readonly RULE_stringLiteralContent = 34;
	public static readonly RULE_joinedString = 35;
	public static readonly RULE_stringTag = 36;
	public static readonly RULE_stringPTag = 37;
	public static readonly RULE_stringExpression = 38;
	public static readonly RULE_identifier = 39;
	public static readonly RULE_advancedIdentifier = 40;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"scriptFile", "script", "parameterList", "parameter", "typeList", "statement", 
		"blockStatement", "returnStatement", "ifStatement", "whileStatement", 
		"switchStatement", "switchCase", "declarationStatement", "arrayDeclarationStatement", 
		"assignmentStatement", "expressionStatement", "emptyStatement", "expressionList", 
		"parenthesis", "singleExpression", "expression", "condition", "calc", 
		"arithmetic", "call", "clientScript", "assignableVariableList", "assignableVariable", 
		"localVariable", "localArrayVariable", "gameVariable", "constantVariable", 
		"literal", "stringLiteral", "stringLiteralContent", "joinedString", "stringTag", 
		"stringPTag", "stringExpression", "identifier", "advancedIdentifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "':'", "';'", "','", "'['", "']'", "'{'", "'}'", 
		"'+'", "'-'", "'*'", "'/'", "'.%'", "'%'", "'&'", "'|'", "'='", "'!'", 
		"'$'", "'^'", "'~'", "'@'", undefined, "'>='", undefined, "'<='", "'if'", 
		"'else'", "'while'", "'case'", "'default'", "'return'", "'calc'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAREN", "RPAREN", "COLON", "SEMICOLON", "COMMA", "LBRACK", 
		"RBRACK", "LBRACE", "RBRACE", "PLUS", "MINUS", "MUL", "DIV", "DOTMOD", 
		"MOD", "AND", "OR", "EQ", "EXCL", "DOLLAR", "CARET", "TILDE", "AT", "GT", 
		"GTE", "LT", "LTE", "IF", "ELSE", "WHILE", "CASE", "DEFAULT", "RETURN", 
		"CALC", "TYPE_ARRAY", "DEF_TYPE", "SWITCH_TYPE", "INTEGER_LITERAL", "HEX_LITERAL", 
		"COORD_LITERAL", "MAPZONE_LITERAL", "BOOLEAN_LITERAL", "CHAR_LITERAL", 
		"NULL_LITERAL", "LINE_COMMENT", "BLOCK_COMMENT", "QUOTE_OPEN", "IDENTIFIER", 
		"WHITESPACE", "QUOTE_CLOSE", "STRING_TEXT", "STRING_TAG", "STRING_CLOSE_TAG", 
		"STRING_PARTIAL_TAG", "STRING_P_TAG", "STRING_EXPR_START", "STRING_EXPR_END",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RuneScriptParser._LITERAL_NAMES, RuneScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RuneScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RuneScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return RuneScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RuneScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RuneScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public scriptFile(): ScriptFileContext {
		let _localctx: ScriptFileContext = new ScriptFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RuneScriptParser.RULE_scriptFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RuneScriptParser.LBRACK) {
				{
				{
				this.state = 82;
				this.script();
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 88;
			this.match(RuneScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public script(): ScriptContext {
		let _localctx: ScriptContext = new ScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RuneScriptParser.RULE_script);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(RuneScriptParser.LBRACK);
			this.state = 91;
			_localctx._trigger = this.identifier();
			this.state = 92;
			this.match(RuneScriptParser.COMMA);
			this.state = 93;
			_localctx._name = this.identifier();
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RuneScriptParser.MUL) {
				{
				this.state = 94;
				this.match(RuneScriptParser.MUL);
				}
			}

			this.state = 97;
			this.match(RuneScriptParser.RBRACK);
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				{
				this.state = 98;
				this.match(RuneScriptParser.LPAREN);
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RuneScriptParser.TYPE_ARRAY || _la === RuneScriptParser.IDENTIFIER) {
					{
					this.state = 99;
					this.parameterList();
					}
				}

				this.state = 102;
				this.match(RuneScriptParser.RPAREN);
				}
				this.state = 109;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 104;
					this.match(RuneScriptParser.LPAREN);
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RuneScriptParser.IDENTIFIER) {
						{
						this.state = 105;
						this.typeList();
						}
					}

					this.state = 108;
					this.match(RuneScriptParser.RPAREN);
					}
					break;
				}
				}
				break;
			}
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.SEMICOLON) | (1 << RuneScriptParser.LBRACE) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT) | (1 << RuneScriptParser.IF) | (1 << RuneScriptParser.WHILE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.RETURN - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 113;
				this.statement();
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RuneScriptParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.parameter();
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RuneScriptParser.COMMA) {
				{
				{
				this.state = 120;
				this.match(RuneScriptParser.COMMA);
				this.state = 121;
				this.parameter();
				}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RuneScriptParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			_localctx._type = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === RuneScriptParser.TYPE_ARRAY || _la === RuneScriptParser.IDENTIFIER)) {
				_localctx._type = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 128;
			this.match(RuneScriptParser.DOLLAR);
			this.state = 129;
			this.advancedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RuneScriptParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(RuneScriptParser.IDENTIFIER);
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RuneScriptParser.COMMA) {
				{
				{
				this.state = 132;
				this.match(RuneScriptParser.COMMA);
				this.state = 133;
				this.match(RuneScriptParser.IDENTIFIER);
				}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RuneScriptParser.RULE_statement);
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 139;
				this.blockStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this.returnStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 141;
				this.ifStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 142;
				this.whileStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 143;
				this.switchStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 144;
				this.declarationStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 145;
				this.arrayDeclarationStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 146;
				this.assignmentStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 147;
				this.expressionStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 148;
				this.emptyStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RuneScriptParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(RuneScriptParser.LBRACE);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.SEMICOLON) | (1 << RuneScriptParser.LBRACE) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT) | (1 << RuneScriptParser.IF) | (1 << RuneScriptParser.WHILE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.RETURN - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 152;
				this.statement();
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 158;
			this.match(RuneScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RuneScriptParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(RuneScriptParser.RETURN);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RuneScriptParser.LPAREN) {
				{
				this.state = 161;
				this.match(RuneScriptParser.LPAREN);
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
					{
					this.state = 162;
					this.expressionList();
					}
				}

				this.state = 165;
				this.match(RuneScriptParser.RPAREN);
				}
			}

			this.state = 168;
			this.match(RuneScriptParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RuneScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(RuneScriptParser.IF);
			this.state = 171;
			this.match(RuneScriptParser.LPAREN);
			this.state = 172;
			this.condition(0);
			this.state = 173;
			this.match(RuneScriptParser.RPAREN);
			this.state = 174;
			this.statement();
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 175;
				this.match(RuneScriptParser.ELSE);
				this.state = 176;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RuneScriptParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(RuneScriptParser.WHILE);
			this.state = 180;
			this.match(RuneScriptParser.LPAREN);
			this.state = 181;
			this.condition(0);
			this.state = 182;
			this.match(RuneScriptParser.RPAREN);
			this.state = 183;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RuneScriptParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(RuneScriptParser.SWITCH_TYPE);
			this.state = 186;
			this.parenthesis();
			this.state = 187;
			this.match(RuneScriptParser.LBRACE);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RuneScriptParser.CASE) {
				{
				{
				this.state = 188;
				this.switchCase();
				}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 194;
			this.match(RuneScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchCase(): SwitchCaseContext {
		let _localctx: SwitchCaseContext = new SwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RuneScriptParser.RULE_switchCase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(RuneScriptParser.CASE);
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 197;
				this.match(RuneScriptParser.DEFAULT);
				}
				break;

			case 2:
				{
				this.state = 198;
				this.expressionList();
				}
				break;
			}
			this.state = 201;
			this.match(RuneScriptParser.COLON);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.SEMICOLON) | (1 << RuneScriptParser.LBRACE) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT) | (1 << RuneScriptParser.IF) | (1 << RuneScriptParser.WHILE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.RETURN - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
				{
				{
				this.state = 202;
				this.statement();
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationStatement(): DeclarationStatementContext {
		let _localctx: DeclarationStatementContext = new DeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RuneScriptParser.RULE_declarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(RuneScriptParser.DEF_TYPE);
			this.state = 209;
			this.match(RuneScriptParser.DOLLAR);
			this.state = 210;
			this.advancedIdentifier();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RuneScriptParser.EQ) {
				{
				this.state = 211;
				this.match(RuneScriptParser.EQ);
				this.state = 212;
				this.expression();
				}
			}

			this.state = 215;
			this.match(RuneScriptParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayDeclarationStatement(): ArrayDeclarationStatementContext {
		let _localctx: ArrayDeclarationStatementContext = new ArrayDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RuneScriptParser.RULE_arrayDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(RuneScriptParser.DEF_TYPE);
			this.state = 218;
			this.match(RuneScriptParser.DOLLAR);
			this.state = 219;
			this.advancedIdentifier();
			this.state = 220;
			this.parenthesis();
			this.state = 221;
			this.match(RuneScriptParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RuneScriptParser.RULE_assignmentStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.assignableVariableList();
			this.state = 224;
			this.match(RuneScriptParser.EQ);
			this.state = 225;
			this.expressionList();
			this.state = 226;
			this.match(RuneScriptParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RuneScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.expression();
			this.state = 229;
			this.match(RuneScriptParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RuneScriptParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(RuneScriptParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RuneScriptParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.expression();
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RuneScriptParser.COMMA) {
				{
				{
				this.state = 234;
				this.match(RuneScriptParser.COMMA);
				this.state = 235;
				this.expression();
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthesis(): ParenthesisContext {
		let _localctx: ParenthesisContext = new ParenthesisContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RuneScriptParser.RULE_parenthesis);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(RuneScriptParser.LPAREN);
			this.state = 242;
			this.expression();
			this.state = 243;
			this.match(RuneScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleExpression(): SingleExpressionContext {
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RuneScriptParser.RULE_singleExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.expression();
			this.state = 246;
			this.match(RuneScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RuneScriptParser.RULE_expression);
		try {
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 248;
				this.parenthesis();
				}
				break;

			case 2:
				_localctx = new CalcExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 249;
				this.calc();
				}
				break;

			case 3:
				_localctx = new CallExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 250;
				this.call();
				}
				break;

			case 4:
				_localctx = new LocalVariableExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 251;
				this.localVariable();
				}
				break;

			case 5:
				_localctx = new LocalArrayVariableExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 252;
				this.localArrayVariable();
				}
				break;

			case 6:
				_localctx = new GameVariableExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 253;
				this.gameVariable();
				}
				break;

			case 7:
				_localctx = new ConstantVariableExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 254;
				this.constantVariable();
				}
				break;

			case 8:
				_localctx = new LiteralExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 255;
				this.literal();
				}
				break;

			case 9:
				_localctx = new JoinedStringExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 256;
				this.joinedString();
				}
				break;

			case 10:
				_localctx = new IdentifierExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 257;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public condition(): ConditionContext;
	public condition(_p: number): ConditionContext;
	// @RuleVersion(0)
	public condition(_p?: number): ConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionContext = new ConditionContext(this._ctx, _parentState);
		let _prevctx: ConditionContext = _localctx;
		let _startState: number = 42;
		this.enterRecursionRule(_localctx, 42, RuneScriptParser.RULE_condition, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				_localctx = new ConditionParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 261;
				this.match(RuneScriptParser.LPAREN);
				this.state = 262;
				this.condition(0);
				this.state = 263;
				this.match(RuneScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new ConditionNormalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 265;
				this.expression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 282;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 280;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						_localctx = new ConditionBinaryExpressionContext(new ConditionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RuneScriptParser.RULE_condition);
						this.state = 268;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 269;
						(_localctx as ConditionBinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.GT) | (1 << RuneScriptParser.GTE) | (1 << RuneScriptParser.LT) | (1 << RuneScriptParser.LTE))) !== 0))) {
							(_localctx as ConditionBinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 270;
						this.condition(6);
						}
						break;

					case 2:
						{
						_localctx = new ConditionBinaryExpressionContext(new ConditionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RuneScriptParser.RULE_condition);
						this.state = 271;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 272;
						(_localctx as ConditionBinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === RuneScriptParser.EQ || _la === RuneScriptParser.EXCL)) {
							(_localctx as ConditionBinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 273;
						this.condition(5);
						}
						break;

					case 3:
						{
						_localctx = new ConditionBinaryExpressionContext(new ConditionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RuneScriptParser.RULE_condition);
						this.state = 274;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 275;
						(_localctx as ConditionBinaryExpressionContext)._op = this.match(RuneScriptParser.AND);
						this.state = 276;
						this.condition(4);
						}
						break;

					case 4:
						{
						_localctx = new ConditionBinaryExpressionContext(new ConditionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RuneScriptParser.RULE_condition);
						this.state = 277;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 278;
						(_localctx as ConditionBinaryExpressionContext)._op = this.match(RuneScriptParser.OR);
						this.state = 279;
						this.condition(3);
						}
						break;
					}
					}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calc(): CalcContext {
		let _localctx: CalcContext = new CalcContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RuneScriptParser.RULE_calc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(RuneScriptParser.CALC);
			this.state = 286;
			this.match(RuneScriptParser.LPAREN);
			this.state = 287;
			this.arithmetic(0);
			this.state = 288;
			this.match(RuneScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public arithmetic(): ArithmeticContext;
	public arithmetic(_p: number): ArithmeticContext;
	// @RuleVersion(0)
	public arithmetic(_p?: number): ArithmeticContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ArithmeticContext = new ArithmeticContext(this._ctx, _parentState);
		let _prevctx: ArithmeticContext = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, RuneScriptParser.RULE_arithmetic, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				_localctx = new ArithmeticParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 291;
				this.match(RuneScriptParser.LPAREN);
				this.state = 292;
				this.arithmetic(0);
				this.state = 293;
				this.match(RuneScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticNormalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 295;
				this.expression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 310;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryExpressionContext(new ArithmeticContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RuneScriptParser.RULE_arithmetic);
						this.state = 298;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 299;
						(_localctx as ArithmeticBinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.MUL) | (1 << RuneScriptParser.DIV) | (1 << RuneScriptParser.MOD))) !== 0))) {
							(_localctx as ArithmeticBinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 300;
						this.arithmetic(6);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryExpressionContext(new ArithmeticContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RuneScriptParser.RULE_arithmetic);
						this.state = 301;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 302;
						(_localctx as ArithmeticBinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === RuneScriptParser.PLUS || _la === RuneScriptParser.MINUS)) {
							(_localctx as ArithmeticBinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 303;
						this.arithmetic(5);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryExpressionContext(new ArithmeticContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RuneScriptParser.RULE_arithmetic);
						this.state = 304;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 305;
						(_localctx as ArithmeticBinaryExpressionContext)._op = this.match(RuneScriptParser.AND);
						this.state = 306;
						this.arithmetic(4);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryExpressionContext(new ArithmeticContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RuneScriptParser.RULE_arithmetic);
						this.state = 307;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 308;
						(_localctx as ArithmeticBinaryExpressionContext)._op = this.match(RuneScriptParser.OR);
						this.state = 309;
						this.arithmetic(3);
						}
						break;
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RuneScriptParser.RULE_call);
		let _la: number;
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				_localctx = new CommandCallExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 315;
				this.identifier();
				this.state = 316;
				this.match(RuneScriptParser.MUL);
				this.state = 317;
				this.match(RuneScriptParser.LPAREN);
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
					{
					this.state = 318;
					this.expressionList();
					}
				}

				this.state = 321;
				this.match(RuneScriptParser.RPAREN);
				this.state = 322;
				this.match(RuneScriptParser.LPAREN);
				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
					{
					this.state = 323;
					this.expressionList();
					}
				}

				this.state = 326;
				this.match(RuneScriptParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new CommandCallExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 328;
				this.identifier();
				this.state = 329;
				this.match(RuneScriptParser.LPAREN);
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
					{
					this.state = 330;
					this.expressionList();
					}
				}

				this.state = 333;
				this.match(RuneScriptParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new ProcCallExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 335;
				this.match(RuneScriptParser.TILDE);
				this.state = 336;
				this.identifier();
				this.state = 342;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 337;
					this.match(RuneScriptParser.LPAREN);
					this.state = 339;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
						{
						this.state = 338;
						this.expressionList();
						}
					}

					this.state = 341;
					this.match(RuneScriptParser.RPAREN);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new JumpCallExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 344;
				this.match(RuneScriptParser.AT);
				this.state = 345;
				this.identifier();
				this.state = 351;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 346;
					this.match(RuneScriptParser.LPAREN);
					this.state = 348;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
						{
						this.state = 347;
						this.expressionList();
						}
					}

					this.state = 350;
					this.match(RuneScriptParser.RPAREN);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clientScript(): ClientScriptContext {
		let _localctx: ClientScriptContext = new ClientScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RuneScriptParser.RULE_clientScript);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.identifier();
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RuneScriptParser.LPAREN) {
				{
				this.state = 356;
				this.match(RuneScriptParser.LPAREN);
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
					{
					this.state = 357;
					_localctx._args = this.expressionList();
					}
				}

				this.state = 360;
				this.match(RuneScriptParser.RPAREN);
				}
			}

			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RuneScriptParser.LBRACE) {
				{
				this.state = 363;
				this.match(RuneScriptParser.LBRACE);
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RuneScriptParser.LPAREN) | (1 << RuneScriptParser.DOTMOD) | (1 << RuneScriptParser.MOD) | (1 << RuneScriptParser.DOLLAR) | (1 << RuneScriptParser.CARET) | (1 << RuneScriptParser.TILDE) | (1 << RuneScriptParser.AT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.CALC - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.INTEGER_LITERAL - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.CHAR_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.QUOTE_OPEN - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0)) {
					{
					this.state = 364;
					_localctx._triggers = this.expressionList();
					}
				}

				this.state = 367;
				this.match(RuneScriptParser.RBRACE);
				}
			}

			this.state = 370;
			this.match(RuneScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignableVariableList(): AssignableVariableListContext {
		let _localctx: AssignableVariableListContext = new AssignableVariableListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RuneScriptParser.RULE_assignableVariableList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this.assignableVariable();
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RuneScriptParser.COMMA) {
				{
				{
				this.state = 373;
				this.match(RuneScriptParser.COMMA);
				this.state = 374;
				this.assignableVariable();
				}
				}
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignableVariable(): AssignableVariableContext {
		let _localctx: AssignableVariableContext = new AssignableVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, RuneScriptParser.RULE_assignableVariable);
		try {
			this.state = 383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 380;
				this.localVariable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 381;
				this.localArrayVariable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 382;
				this.gameVariable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariable(): LocalVariableContext {
		let _localctx: LocalVariableContext = new LocalVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RuneScriptParser.RULE_localVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.match(RuneScriptParser.DOLLAR);
			this.state = 386;
			this.advancedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localArrayVariable(): LocalArrayVariableContext {
		let _localctx: LocalArrayVariableContext = new LocalArrayVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RuneScriptParser.RULE_localArrayVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this.match(RuneScriptParser.DOLLAR);
			this.state = 389;
			this.advancedIdentifier();
			this.state = 390;
			this.parenthesis();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gameVariable(): GameVariableContext {
		let _localctx: GameVariableContext = new GameVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, RuneScriptParser.RULE_gameVariable);
		try {
			this.state = 396;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RuneScriptParser.MOD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 392;
				this.match(RuneScriptParser.MOD);
				this.state = 393;
				this.advancedIdentifier();
				}
				break;
			case RuneScriptParser.DOTMOD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 394;
				this.match(RuneScriptParser.DOTMOD);
				this.state = 395;
				this.advancedIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantVariable(): ConstantVariableContext {
		let _localctx: ConstantVariableContext = new ConstantVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RuneScriptParser.RULE_constantVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(RuneScriptParser.CARET);
			this.state = 399;
			this.advancedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, RuneScriptParser.RULE_literal);
		try {
			this.state = 408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RuneScriptParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.match(RuneScriptParser.INTEGER_LITERAL);
				}
				break;
			case RuneScriptParser.HEX_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
				this.match(RuneScriptParser.HEX_LITERAL);
				}
				break;
			case RuneScriptParser.COORD_LITERAL:
				_localctx = new CoordLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 403;
				this.match(RuneScriptParser.COORD_LITERAL);
				}
				break;
			case RuneScriptParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 404;
				this.match(RuneScriptParser.BOOLEAN_LITERAL);
				}
				break;
			case RuneScriptParser.CHAR_LITERAL:
				_localctx = new CharacterLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 405;
				this.match(RuneScriptParser.CHAR_LITERAL);
				}
				break;
			case RuneScriptParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 406;
				this.match(RuneScriptParser.NULL_LITERAL);
				}
				break;
			case RuneScriptParser.QUOTE_OPEN:
				_localctx = new StringLiteralExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 407;
				this.stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RuneScriptParser.RULE_stringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.match(RuneScriptParser.QUOTE_OPEN);
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RuneScriptParser.STRING_TEXT) {
				{
				{
				this.state = 411;
				this.stringLiteralContent();
				}
				}
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 417;
			this.match(RuneScriptParser.QUOTE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteralContent(): StringLiteralContentContext {
		let _localctx: StringLiteralContentContext = new StringLiteralContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, RuneScriptParser.RULE_stringLiteralContent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.match(RuneScriptParser.STRING_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinedString(): JoinedStringContext {
		let _localctx: JoinedStringContext = new JoinedStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, RuneScriptParser.RULE_joinedString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(RuneScriptParser.QUOTE_OPEN);
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (RuneScriptParser.STRING_TEXT - 51)) | (1 << (RuneScriptParser.STRING_TAG - 51)) | (1 << (RuneScriptParser.STRING_CLOSE_TAG - 51)) | (1 << (RuneScriptParser.STRING_PARTIAL_TAG - 51)) | (1 << (RuneScriptParser.STRING_P_TAG - 51)) | (1 << (RuneScriptParser.STRING_EXPR_START - 51)))) !== 0)) {
				{
				this.state = 426;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RuneScriptParser.STRING_TEXT:
					{
					this.state = 422;
					this.stringLiteralContent();
					}
					break;
				case RuneScriptParser.STRING_TAG:
				case RuneScriptParser.STRING_CLOSE_TAG:
				case RuneScriptParser.STRING_PARTIAL_TAG:
					{
					this.state = 423;
					this.stringTag();
					}
					break;
				case RuneScriptParser.STRING_P_TAG:
					{
					this.state = 424;
					this.stringPTag();
					}
					break;
				case RuneScriptParser.STRING_EXPR_START:
					{
					this.state = 425;
					this.stringExpression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 431;
			this.match(RuneScriptParser.QUOTE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringTag(): StringTagContext {
		let _localctx: StringTagContext = new StringTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, RuneScriptParser.RULE_stringTag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			_la = this._input.LA(1);
			if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (RuneScriptParser.STRING_TAG - 52)) | (1 << (RuneScriptParser.STRING_CLOSE_TAG - 52)) | (1 << (RuneScriptParser.STRING_PARTIAL_TAG - 52)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringPTag(): StringPTagContext {
		let _localctx: StringPTagContext = new StringPTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, RuneScriptParser.RULE_stringPTag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(RuneScriptParser.STRING_P_TAG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringExpression(): StringExpressionContext {
		let _localctx: StringExpressionContext = new StringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, RuneScriptParser.RULE_stringExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.match(RuneScriptParser.STRING_EXPR_START);
			this.state = 438;
			this.expression();
			this.state = 439;
			this.match(RuneScriptParser.STRING_EXPR_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, RuneScriptParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RuneScriptParser.DEFAULT - 32)) | (1 << (RuneScriptParser.TYPE_ARRAY - 32)) | (1 << (RuneScriptParser.DEF_TYPE - 32)) | (1 << (RuneScriptParser.SWITCH_TYPE - 32)) | (1 << (RuneScriptParser.HEX_LITERAL - 32)) | (1 << (RuneScriptParser.COORD_LITERAL - 32)) | (1 << (RuneScriptParser.MAPZONE_LITERAL - 32)) | (1 << (RuneScriptParser.BOOLEAN_LITERAL - 32)) | (1 << (RuneScriptParser.NULL_LITERAL - 32)) | (1 << (RuneScriptParser.IDENTIFIER - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public advancedIdentifier(): AdvancedIdentifierContext {
		let _localctx: AdvancedIdentifierContext = new AdvancedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, RuneScriptParser.RULE_advancedIdentifier);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RuneScriptParser.DEFAULT:
			case RuneScriptParser.TYPE_ARRAY:
			case RuneScriptParser.DEF_TYPE:
			case RuneScriptParser.SWITCH_TYPE:
			case RuneScriptParser.HEX_LITERAL:
			case RuneScriptParser.COORD_LITERAL:
			case RuneScriptParser.MAPZONE_LITERAL:
			case RuneScriptParser.BOOLEAN_LITERAL:
			case RuneScriptParser.NULL_LITERAL:
			case RuneScriptParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 443;
				this.identifier();
				}
				break;
			case RuneScriptParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 444;
				this.match(RuneScriptParser.IF);
				}
				break;
			case RuneScriptParser.ELSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 445;
				this.match(RuneScriptParser.ELSE);
				}
				break;
			case RuneScriptParser.WHILE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 446;
				this.match(RuneScriptParser.WHILE);
				}
				break;
			case RuneScriptParser.RETURN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 447;
				this.match(RuneScriptParser.RETURN);
				}
				break;
			case RuneScriptParser.CALC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 448;
				this.match(RuneScriptParser.CALC);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 21:
			return this.condition_sempred(_localctx as ConditionContext, predIndex);

		case 23:
			return this.arithmetic_sempred(_localctx as ArithmeticContext, predIndex);
		}
		return true;
	}
	private condition_sempred(_localctx: ConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private arithmetic_sempred(_localctx: ArithmeticContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03;\u01C6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x03\x02" +
		"\x07\x02V\n\x02\f\x02\x0E\x02Y\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03b\n\x03\x03\x03\x03\x03\x03\x03\x05\x03g\n" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03m\n\x03\x03\x03\x05\x03p\n" +
		"\x03\x05\x03r\n\x03\x03\x03\x07\x03u\n\x03\f\x03\x0E\x03x\v\x03\x03\x04" +
		"\x03\x04\x03\x04\x07\x04}\n\x04\f\x04\x0E\x04\x80\v\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06\x89\n\x06\f\x06\x0E\x06" +
		"\x8C\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\x98\n\x07\x03\b\x03\b\x07\b\x9C\n\b\f\b\x0E" +
		"\b\x9F\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xA6\n\t\x03\t\x05\t\xA9" +
		"\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xB4\n" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\xC0" +
		"\n\f\f\f\x0E\f\xC3\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\xCA\n\r\x03" +
		"\r\x03\r\x07\r\xCE\n\r\f\r\x0E\r\xD1\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\xD8\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x07\x13\xEF\n\x13" +
		"\f\x13\x0E\x13\xF2\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u0105\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u010D\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u011B" +
		"\n\x17\f\x17\x0E\x17\u011E\v\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u012B\n\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x07\x19\u0139\n\x19\f\x19\x0E\x19\u013C\v\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0142\n\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u0147\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u014E" +
		"\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0156\n" +
		"\x1A\x03\x1A\x05\x1A\u0159\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u015F\n\x1A\x03\x1A\x05\x1A\u0162\n\x1A\x05\x1A\u0164\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u0169\n\x1B\x03\x1B\x05\x1B\u016C\n\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u0170\n\x1B\x03\x1B\x05\x1B\u0173\n\x1B\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x07\x1C\u017A\n\x1C\f\x1C\x0E\x1C\u017D\v\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x05\x1D\u0182\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 \u018F\n \x03!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u019B\n\"\x03#\x03#" +
		"\x07#\u019F\n#\f#\x0E#\u01A2\v#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03" +
		"%\x03%\x07%\u01AD\n%\f%\x0E%\u01B0\v%\x03%\x03%\x03&\x03&\x03\'\x03\'" +
		"\x03(\x03(\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u01C4" +
		"\n*\x03*\x02\x02\x04,0+\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02\x02\t\x04" +
		"\x02%%22\x03\x02\x1A\x1D\x03\x02\x14\x15\x04\x02\x0E\x0F\x11\x11\x03\x02" +
		"\f\r\x03\x0268\x07\x02\"\"%\'),..22\x02\u01EC\x02W\x03\x02\x02\x02\x04" +
		"\\\x03\x02\x02\x02\x06y\x03\x02\x02\x02\b\x81\x03\x02\x02\x02\n\x85\x03" +
		"\x02\x02\x02\f\x97\x03\x02\x02\x02\x0E\x99\x03\x02\x02\x02\x10\xA2\x03" +
		"\x02\x02\x02\x12\xAC\x03\x02\x02\x02\x14\xB5\x03\x02\x02\x02\x16\xBB\x03" +
		"\x02\x02\x02\x18\xC6\x03\x02\x02\x02\x1A\xD2\x03\x02\x02\x02\x1C\xDB\x03" +
		"\x02\x02\x02\x1E\xE1\x03\x02\x02\x02 \xE6\x03\x02\x02\x02\"\xE9\x03\x02" +
		"\x02\x02$\xEB\x03\x02\x02\x02&\xF3\x03\x02\x02\x02(\xF7\x03\x02\x02\x02" +
		"*\u0104\x03\x02\x02\x02,\u010C\x03\x02\x02\x02.\u011F\x03\x02\x02\x02" +
		"0\u012A\x03\x02\x02\x022\u0163\x03\x02\x02\x024\u0165\x03\x02\x02\x02" +
		"6\u0176\x03\x02\x02\x028\u0181\x03\x02\x02\x02:\u0183\x03\x02\x02\x02" +
		"<\u0186\x03\x02\x02\x02>\u018E\x03\x02\x02\x02@\u0190\x03\x02\x02\x02" +
		"B\u019A\x03\x02\x02\x02D\u019C\x03\x02\x02\x02F\u01A5\x03\x02\x02\x02" +
		"H\u01A7\x03\x02\x02\x02J\u01B3\x03\x02\x02\x02L\u01B5\x03\x02\x02\x02" +
		"N\u01B7\x03\x02\x02\x02P\u01BB\x03\x02\x02\x02R\u01C3\x03\x02\x02\x02" +
		"TV\x05\x04\x03\x02UT\x03\x02\x02\x02VY\x03\x02\x02\x02WU\x03\x02\x02\x02" +
		"WX\x03\x02\x02\x02XZ\x03\x02\x02\x02YW\x03\x02\x02\x02Z[\x07\x02\x02\x03" +
		"[\x03\x03\x02\x02\x02\\]\x07\b\x02\x02]^\x05P)\x02^_\x07\x07\x02\x02_" +
		"a\x05P)\x02`b\x07\x0E\x02\x02a`\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03" +
		"\x02\x02\x02cq\x07\t\x02\x02df\x07\x03\x02\x02eg\x05\x06\x04\x02fe\x03" +
		"\x02\x02\x02fg\x03\x02\x02\x02gh\x03\x02\x02\x02hi\x07\x04\x02\x02io\x03" +
		"\x02\x02\x02jl\x07\x03\x02\x02km\x05\n\x06\x02lk\x03\x02\x02\x02lm\x03" +
		"\x02\x02\x02mn\x03\x02\x02\x02np\x07\x04\x02\x02oj\x03\x02\x02\x02op\x03" +
		"\x02\x02\x02pr\x03\x02\x02\x02qd\x03\x02\x02\x02qr\x03\x02\x02\x02rv\x03" +
		"\x02\x02\x02su\x05\f\x07\x02ts\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03" +
		"\x02\x02\x02vw\x03\x02\x02\x02w\x05\x03\x02\x02\x02xv\x03\x02\x02\x02" +
		"y~\x05\b\x05\x02z{\x07\x07\x02\x02{}\x05\b\x05\x02|z\x03\x02\x02\x02}" +
		"\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x07\x03" +
		"\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x82\t\x02\x02\x02\x82\x83\x07\x16" +
		"\x02\x02\x83\x84\x05R*\x02\x84\t\x03\x02\x02\x02\x85\x8A\x072\x02\x02" +
		"\x86\x87\x07\x07\x02\x02\x87\x89\x072\x02\x02\x88\x86\x03\x02\x02\x02" +
		"\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02" +
		"\x8B\v\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D\x98\x05\x0E\b\x02\x8E" +
		"\x98\x05\x10\t\x02\x8F\x98\x05\x12\n\x02\x90\x98\x05\x14\v\x02\x91\x98" +
		"\x05\x16\f\x02\x92\x98\x05\x1A\x0E\x02\x93\x98\x05\x1C\x0F\x02\x94\x98" +
		"\x05\x1E\x10\x02\x95\x98\x05 \x11\x02\x96\x98\x05\"\x12\x02\x97\x8D\x03" +
		"\x02\x02\x02\x97\x8E\x03\x02\x02\x02\x97\x8F\x03\x02\x02\x02\x97\x90\x03" +
		"\x02\x02\x02\x97\x91\x03\x02\x02\x02\x97\x92\x03\x02\x02\x02\x97\x93\x03" +
		"\x02\x02\x02\x97\x94\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x96\x03" +
		"\x02\x02\x02\x98\r\x03\x02\x02\x02\x99\x9D\x07\n\x02\x02\x9A\x9C\x05\f" +
		"\x07\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02" +
		"\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02\x9F\x9D\x03\x02" +
		"\x02\x02\xA0\xA1\x07\v\x02\x02\xA1\x0F\x03\x02\x02\x02\xA2\xA8\x07#\x02" +
		"\x02\xA3\xA5\x07\x03\x02\x02\xA4\xA6\x05$\x13\x02\xA5\xA4\x03\x02\x02" +
		"\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x07\x04\x02" +
		"\x02\xA8\xA3\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03\x02\x02" +
		"\x02\xAA\xAB\x07\x06\x02\x02\xAB\x11\x03\x02\x02\x02\xAC\xAD\x07\x1E\x02" +
		"\x02\xAD\xAE\x07\x03\x02\x02\xAE\xAF\x05,\x17\x02\xAF\xB0\x07\x04\x02" +
		"\x02\xB0\xB3\x05\f\x07\x02\xB1\xB2\x07\x1F\x02\x02\xB2\xB4\x05\f\x07\x02" +
		"\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\x13\x03\x02\x02\x02" +
		"\xB5\xB6\x07 \x02\x02\xB6\xB7\x07\x03\x02\x02\xB7\xB8\x05,\x17\x02\xB8" +
		"\xB9\x07\x04\x02\x02\xB9\xBA\x05\f\x07\x02\xBA\x15\x03\x02\x02\x02\xBB" +
		"\xBC\x07\'\x02\x02\xBC\xBD\x05&\x14\x02\xBD\xC1\x07\n\x02\x02\xBE\xC0" +
		"\x05\x18\r\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF" +
		"\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xC1" +
		"\x03\x02\x02\x02\xC4\xC5\x07\v\x02\x02\xC5\x17\x03\x02\x02\x02\xC6\xC9" +
		"\x07!\x02\x02\xC7\xCA\x07\"\x02\x02\xC8\xCA\x05$\x13\x02\xC9\xC7\x03\x02" +
		"\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCF\x07\x05" +
		"\x02\x02\xCC\xCE\x05\f\x07\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02" +
		"\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\x19\x03\x02" +
		"\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x07&\x02\x02\xD3\xD4\x07\x16" +
		"\x02\x02\xD4\xD7\x05R*\x02\xD5\xD6\x07\x14\x02\x02\xD6\xD8\x05*\x16\x02" +
		"\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02" +
		"\xD9\xDA\x07\x06\x02\x02\xDA\x1B\x03\x02\x02\x02\xDB\xDC\x07&\x02\x02" +
		"\xDC\xDD\x07\x16\x02\x02\xDD\xDE\x05R*\x02\xDE\xDF\x05&\x14\x02\xDF\xE0" +
		"\x07\x06\x02\x02\xE0\x1D\x03\x02\x02\x02\xE1\xE2\x056\x1C\x02\xE2\xE3" +
		"\x07\x14\x02\x02\xE3\xE4\x05$\x13\x02\xE4\xE5\x07\x06\x02\x02\xE5\x1F" +
		"\x03\x02\x02\x02\xE6\xE7\x05*\x16\x02\xE7\xE8\x07\x06\x02\x02\xE8!\x03" +
		"\x02\x02\x02\xE9\xEA\x07\x06\x02\x02\xEA#\x03\x02\x02\x02\xEB\xF0\x05" +
		"*\x16\x02\xEC\xED\x07\x07\x02\x02\xED\xEF\x05*\x16\x02\xEE\xEC\x03\x02" +
		"\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02" +
		"\x02\x02\xF1%\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF4\x07\x03" +
		"\x02\x02\xF4\xF5\x05*\x16\x02\xF5\xF6\x07\x04\x02\x02\xF6\'\x03\x02\x02" +
		"\x02\xF7\xF8\x05*\x16\x02\xF8\xF9\x07\x02\x02\x03\xF9)\x03\x02\x02\x02" +
		"\xFA\u0105\x05&\x14\x02\xFB\u0105\x05.\x18\x02\xFC\u0105\x052\x1A\x02" +
		"\xFD\u0105\x05:\x1E\x02\xFE\u0105\x05<\x1F\x02\xFF\u0105\x05> \x02\u0100" +
		"\u0105\x05@!\x02\u0101\u0105\x05B\"\x02\u0102\u0105\x05H%\x02\u0103\u0105" +
		"\x05P)\x02\u0104\xFA\x03\x02\x02\x02\u0104\xFB\x03\x02\x02\x02\u0104\xFC" +
		"\x03\x02\x02\x02\u0104\xFD\x03\x02\x02\x02\u0104\xFE\x03\x02\x02\x02\u0104" +
		"\xFF\x03\x02\x02\x02\u0104\u0100\x03\x02\x02\x02\u0104\u0101\x03\x02\x02" +
		"\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105+\x03" +
		"\x02\x02\x02\u0106\u0107\b\x17\x01\x02\u0107\u0108\x07\x03\x02\x02\u0108" +
		"\u0109\x05,\x17\x02\u0109\u010A\x07\x04\x02\x02\u010A\u010D\x03\x02\x02" +
		"\x02\u010B\u010D\x05*\x16\x02\u010C\u0106\x03\x02\x02\x02\u010C\u010B" +
		"\x03\x02\x02\x02\u010D\u011C\x03\x02\x02\x02\u010E\u010F\f\x07\x02\x02" +
		"\u010F\u0110\t\x03\x02\x02\u0110\u011B\x05,\x17\b\u0111\u0112\f\x06\x02" +
		"\x02\u0112\u0113\t\x04\x02\x02\u0113\u011B\x05,\x17\x07\u0114\u0115\f" +
		"\x05\x02\x02\u0115\u0116\x07\x12\x02\x02\u0116\u011B\x05,\x17\x06\u0117" +
		"\u0118\f\x04\x02\x02\u0118\u0119\x07\x13\x02\x02\u0119\u011B\x05,\x17" +
		"\x05\u011A\u010E\x03\x02\x02\x02\u011A\u0111\x03\x02\x02\x02\u011A\u0114" +
		"\x03\x02\x02\x02\u011A\u0117\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02" +
		"\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D-\x03\x02" +
		"\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0120\x07$\x02\x02\u0120\u0121" +
		"\x07\x03\x02\x02\u0121\u0122\x050\x19\x02\u0122\u0123\x07\x04\x02\x02" +
		"\u0123/\x03\x02\x02\x02\u0124\u0125\b\x19\x01\x02\u0125\u0126\x07\x03" +
		"\x02\x02\u0126\u0127\x050\x19\x02\u0127\u0128\x07\x04\x02\x02\u0128\u012B" +
		"\x03\x02\x02\x02\u0129\u012B\x05*\x16\x02\u012A\u0124\x03\x02\x02\x02" +
		"\u012A\u0129\x03\x02\x02\x02\u012B\u013A\x03\x02\x02\x02\u012C\u012D\f" +
		"\x07\x02\x02\u012D\u012E\t\x05\x02\x02\u012E\u0139\x050\x19\b\u012F\u0130" +
		"\f\x06\x02\x02\u0130\u0131\t\x06\x02\x02\u0131\u0139\x050\x19\x07\u0132" +
		"\u0133\f\x05\x02\x02\u0133\u0134\x07\x12\x02\x02\u0134\u0139\x050\x19" +
		"\x06\u0135\u0136\f\x04\x02\x02\u0136\u0137\x07\x13\x02\x02\u0137\u0139" +
		"\x050\x19\x05\u0138\u012C\x03\x02\x02\x02\u0138\u012F\x03\x02\x02\x02" +
		"\u0138\u0132\x03\x02\x02\x02\u0138\u0135\x03\x02\x02\x02\u0139\u013C\x03" +
		"\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B" +
		"1\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u013E\x05P)\x02\u013E" +
		"\u013F\x07\x0E\x02\x02\u013F\u0141\x07\x03\x02\x02\u0140\u0142\x05$\x13" +
		"\x02\u0141\u0140\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143" +
		"\x03\x02\x02\x02\u0143\u0144\x07\x04\x02\x02\u0144\u0146\x07\x03\x02\x02" +
		"\u0145\u0147\x05$\x13\x02\u0146\u0145\x03\x02\x02\x02\u0146\u0147\x03" +
		"\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x07\x04\x02\x02\u0149" +
		"\u0164\x03\x02\x02\x02\u014A\u014B\x05P)\x02\u014B\u014D\x07\x03\x02\x02" +
		"\u014C\u014E\x05$\x13\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03" +
		"\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x07\x04\x02\x02\u0150" +
		"\u0164\x03\x02\x02\x02\u0151\u0152\x07\x18\x02\x02\u0152\u0158\x05P)\x02" +
		"\u0153\u0155\x07\x03\x02\x02\u0154\u0156\x05$\x13\x02\u0155\u0154\x03" +
		"\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
		"\u0159\x07\x04\x02\x02\u0158\u0153\x03\x02\x02\x02\u0158\u0159\x03\x02" +
		"\x02\x02\u0159\u0164\x03\x02\x02\x02\u015A\u015B\x07\x19\x02\x02\u015B" +
		"\u0161\x05P)\x02\u015C\u015E\x07\x03\x02\x02\u015D\u015F\x05$\x13\x02" +
		"\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03" +
		"\x02\x02\x02\u0160\u0162\x07\x04\x02\x02\u0161\u015C\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163\u013D\x03\x02" +
		"\x02\x02\u0163\u014A\x03\x02\x02\x02\u0163\u0151\x03\x02\x02\x02\u0163" +
		"\u015A\x03\x02\x02\x02\u01643\x03\x02\x02\x02\u0165\u016B\x05P)\x02\u0166" +
		"\u0168\x07\x03\x02\x02\u0167\u0169\x05$\x13\x02\u0168\u0167\x03\x02\x02" +
		"\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016C" +
		"\x07\x04\x02\x02\u016B\u0166\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
		"\u016C\u0172\x03\x02\x02\x02\u016D\u016F\x07\n\x02\x02\u016E\u0170\x05" +
		"$\x13\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170" +
		"\u0171\x03\x02\x02\x02\u0171\u0173\x07\v\x02\x02\u0172\u016D\x03\x02\x02" +
		"\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0175" +
		"\x07\x02\x02\x03\u01755\x03\x02\x02\x02\u0176\u017B\x058\x1D\x02\u0177" +
		"\u0178\x07\x07\x02\x02\u0178\u017A\x058\x1D\x02\u0179\u0177\x03\x02\x02" +
		"\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C" +
		"\x03\x02\x02\x02\u017C7\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E" +
		"\u0182\x05:\x1E\x02\u017F\u0182\x05<\x1F\x02\u0180\u0182\x05> \x02\u0181" +
		"\u017E\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0180\x03\x02" +
		"\x02\x02\u01829\x03\x02\x02\x02\u0183\u0184\x07\x16\x02\x02\u0184\u0185" +
		"\x05R*\x02\u0185;\x03\x02\x02\x02\u0186\u0187\x07\x16\x02\x02\u0187\u0188" +
		"\x05R*\x02\u0188\u0189\x05&\x14\x02\u0189=\x03\x02\x02\x02\u018A\u018B" +
		"\x07\x11\x02\x02\u018B\u018F\x05R*\x02\u018C\u018D\x07\x10\x02\x02\u018D" +
		"\u018F\x05R*\x02\u018E\u018A\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02" +
		"\u018F?\x03\x02\x02\x02\u0190\u0191\x07\x17\x02\x02\u0191\u0192\x05R*" +
		"\x02\u0192A\x03\x02\x02\x02\u0193\u019B\x07(\x02\x02\u0194\u019B\x07)" +
		"\x02\x02\u0195\u019B\x07*\x02\x02\u0196\u019B\x07,\x02\x02\u0197\u019B" +
		"\x07-\x02\x02\u0198\u019B\x07.\x02\x02\u0199\u019B\x05D#\x02\u019A\u0193" +
		"\x03\x02\x02\x02\u019A\u0194\x03\x02\x02\x02\u019A\u0195\x03\x02\x02\x02" +
		"\u019A\u0196\x03\x02\x02\x02\u019A\u0197\x03\x02\x02\x02\u019A\u0198\x03" +
		"\x02\x02\x02\u019A\u0199\x03\x02\x02\x02\u019BC\x03\x02\x02\x02\u019C" +
		"\u01A0\x071\x02\x02\u019D\u019F\x05F$\x02\u019E\u019D\x03\x02\x02\x02" +
		"\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03" +
		"\x02\x02\x02\u01A1\u01A3\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3" +
		"\u01A4\x074\x02\x02\u01A4E\x03\x02\x02\x02\u01A5\u01A6\x075\x02\x02\u01A6" +
		"G\x03\x02\x02\x02\u01A7\u01AE\x071\x02\x02\u01A8\u01AD\x05F$\x02\u01A9" +
		"\u01AD\x05J&\x02\u01AA\u01AD\x05L\'\x02\u01AB\u01AD\x05N(\x02\u01AC\u01A8" +
		"\x03\x02\x02\x02\u01AC\u01A9\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02" +
		"\u01AC\u01AB\x03\x02\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03" +
		"\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0" +
		"\u01AE\x03\x02\x02\x02\u01B1\u01B2\x074\x02\x02\u01B2I\x03\x02\x02\x02" +
		"\u01B3\u01B4\t\x07\x02\x02\u01B4K\x03\x02\x02\x02\u01B5\u01B6\x079\x02" +
		"\x02\u01B6M\x03\x02\x02\x02\u01B7\u01B8\x07:\x02\x02\u01B8\u01B9\x05*" +
		"\x16\x02\u01B9\u01BA\x07;\x02\x02\u01BAO\x03\x02\x02\x02\u01BB\u01BC\t" +
		"\b\x02\x02\u01BCQ\x03\x02\x02\x02\u01BD\u01C4\x05P)\x02\u01BE\u01C4\x07" +
		"\x1E\x02\x02\u01BF\u01C4\x07\x1F\x02\x02\u01C0\u01C4\x07 \x02\x02\u01C1" +
		"\u01C4\x07#\x02\x02\u01C2\u01C4\x07$\x02\x02\u01C3\u01BD\x03\x02\x02\x02" +
		"\u01C3\u01BE\x03\x02\x02\x02\u01C3\u01BF\x03\x02\x02\x02\u01C3\u01C0\x03" +
		"\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4" +
		"S\x03\x02\x02\x020Wafloqv~\x8A\x97\x9D\xA5\xA8\xB3\xC1\xC9\xCF\xD7\xF0" +
		"\u0104\u010C\u011A\u011C\u012A\u0138\u013A\u0141\u0146\u014D\u0155\u0158" +
		"\u015E\u0161\u0163\u0168\u016B\u016F\u0172\u017B\u0181\u018E\u019A\u01A0" +
		"\u01AC\u01AE\u01C3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RuneScriptParser.__ATN) {
			RuneScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RuneScriptParser._serializedATN));
		}

		return RuneScriptParser.__ATN;
	}

}

export class ScriptFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RuneScriptParser.EOF, 0); }
	public script(): ScriptContext[];
	public script(i: number): ScriptContext;
	public script(i?: number): ScriptContext | ScriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScriptContext);
		} else {
			return this.getRuleContext(i, ScriptContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_scriptFile; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitScriptFile) {
			return visitor.visitScriptFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptContext extends ParserRuleContext {
	public _trigger!: IdentifierContext;
	public _name!: IdentifierContext;
	public LBRACK(): TerminalNode { return this.getToken(RuneScriptParser.LBRACK, 0); }
	public COMMA(): TerminalNode { return this.getToken(RuneScriptParser.COMMA, 0); }
	public RBRACK(): TerminalNode { return this.getToken(RuneScriptParser.RBRACK, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.MUL, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RuneScriptParser.LPAREN);
		} else {
			return this.getToken(RuneScriptParser.LPAREN, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RuneScriptParser.RPAREN);
		} else {
			return this.getToken(RuneScriptParser.RPAREN, i);
		}
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_script; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitScript) {
			return visitor.visitScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RuneScriptParser.COMMA);
		} else {
			return this.getToken(RuneScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_parameterList; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public _type!: Token;
	public DOLLAR(): TerminalNode { return this.getToken(RuneScriptParser.DOLLAR, 0); }
	public advancedIdentifier(): AdvancedIdentifierContext {
		return this.getRuleContext(0, AdvancedIdentifierContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.IDENTIFIER, 0); }
	public TYPE_ARRAY(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.TYPE_ARRAY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_parameter; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RuneScriptParser.IDENTIFIER);
		} else {
			return this.getToken(RuneScriptParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RuneScriptParser.COMMA);
		} else {
			return this.getToken(RuneScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_typeList; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public declarationStatement(): DeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, DeclarationStatementContext);
	}
	public arrayDeclarationStatement(): ArrayDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, ArrayDeclarationStatementContext);
	}
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(RuneScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(RuneScriptParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_blockStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(RuneScriptParser.RETURN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(RuneScriptParser.SEMICOLON, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_returnStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(RuneScriptParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RuneScriptParser.LPAREN, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RuneScriptParser.RPAREN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_ifStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(RuneScriptParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RuneScriptParser.LPAREN, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RuneScriptParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_whileStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH_TYPE(): TerminalNode { return this.getToken(RuneScriptParser.SWITCH_TYPE, 0); }
	public parenthesis(): ParenthesisContext {
		return this.getRuleContext(0, ParenthesisContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(RuneScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(RuneScriptParser.RBRACE, 0); }
	public switchCase(): SwitchCaseContext[];
	public switchCase(i: number): SwitchCaseContext;
	public switchCase(i?: number): SwitchCaseContext | SwitchCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchCaseContext);
		} else {
			return this.getRuleContext(i, SwitchCaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_switchStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(RuneScriptParser.CASE, 0); }
	public COLON(): TerminalNode { return this.getToken(RuneScriptParser.COLON, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.DEFAULT, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_switchCase; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitSwitchCase) {
			return visitor.visitSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationStatementContext extends ParserRuleContext {
	public DEF_TYPE(): TerminalNode { return this.getToken(RuneScriptParser.DEF_TYPE, 0); }
	public DOLLAR(): TerminalNode { return this.getToken(RuneScriptParser.DOLLAR, 0); }
	public advancedIdentifier(): AdvancedIdentifierContext {
		return this.getRuleContext(0, AdvancedIdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(RuneScriptParser.SEMICOLON, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_declarationStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitDeclarationStatement) {
			return visitor.visitDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclarationStatementContext extends ParserRuleContext {
	public DEF_TYPE(): TerminalNode { return this.getToken(RuneScriptParser.DEF_TYPE, 0); }
	public DOLLAR(): TerminalNode { return this.getToken(RuneScriptParser.DOLLAR, 0); }
	public advancedIdentifier(): AdvancedIdentifierContext {
		return this.getRuleContext(0, AdvancedIdentifierContext);
	}
	public parenthesis(): ParenthesisContext {
		return this.getRuleContext(0, ParenthesisContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(RuneScriptParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_arrayDeclarationStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayDeclarationStatement) {
			return visitor.visitArrayDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	public assignableVariableList(): AssignableVariableListContext {
		return this.getRuleContext(0, AssignableVariableListContext);
	}
	public EQ(): TerminalNode { return this.getToken(RuneScriptParser.EQ, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(RuneScriptParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_assignmentStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentStatement) {
			return visitor.visitAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(RuneScriptParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_expressionStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(RuneScriptParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_emptyStatement; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RuneScriptParser.COMMA);
		} else {
			return this.getToken(RuneScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_expressionList; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenthesisContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(RuneScriptParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RuneScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_parenthesis; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitParenthesis) {
			return visitor.visitParenthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(RuneScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_singleExpression; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitSingleExpression) {
			return visitor.visitSingleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public parenthesis(): ParenthesisContext {
		return this.getRuleContext(0, ParenthesisContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CalcExpressionContext extends ExpressionContext {
	public calc(): CalcContext {
		return this.getRuleContext(0, CalcContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitCalcExpression) {
			return visitor.visitCalcExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallExpressionContext extends ExpressionContext {
	public call(): CallContext {
		return this.getRuleContext(0, CallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitCallExpression) {
			return visitor.visitCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalVariableExpressionContext extends ExpressionContext {
	public localVariable(): LocalVariableContext {
		return this.getRuleContext(0, LocalVariableContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableExpression) {
			return visitor.visitLocalVariableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalArrayVariableExpressionContext extends ExpressionContext {
	public localArrayVariable(): LocalArrayVariableContext {
		return this.getRuleContext(0, LocalArrayVariableContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitLocalArrayVariableExpression) {
			return visitor.visitLocalArrayVariableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GameVariableExpressionContext extends ExpressionContext {
	public gameVariable(): GameVariableContext {
		return this.getRuleContext(0, GameVariableContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitGameVariableExpression) {
			return visitor.visitGameVariableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantVariableExpressionContext extends ExpressionContext {
	public constantVariable(): ConstantVariableContext {
		return this.getRuleContext(0, ConstantVariableContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitConstantVariableExpression) {
			return visitor.visitConstantVariableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JoinedStringExpressionContext extends ExpressionContext {
	public joinedString(): JoinedStringContext {
		return this.getRuleContext(0, JoinedStringContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitJoinedStringExpression) {
			return visitor.visitJoinedStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_condition; }
	public copyFrom(ctx: ConditionContext): void {
		super.copyFrom(ctx);
	}
}
export class ConditionParenthesizedExpressionContext extends ConditionContext {
	public LPAREN(): TerminalNode { return this.getToken(RuneScriptParser.LPAREN, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RuneScriptParser.RPAREN, 0); }
	constructor(ctx: ConditionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitConditionParenthesizedExpression) {
			return visitor.visitConditionParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionBinaryExpressionContext extends ConditionContext {
	public _op!: Token;
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.GT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.LTE, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.GTE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.EQ, 0); }
	public EXCL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.EXCL, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.OR, 0); }
	constructor(ctx: ConditionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitConditionBinaryExpression) {
			return visitor.visitConditionBinaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionNormalExpressionContext extends ConditionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ConditionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitConditionNormalExpression) {
			return visitor.visitConditionNormalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcContext extends ParserRuleContext {
	public CALC(): TerminalNode { return this.getToken(RuneScriptParser.CALC, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RuneScriptParser.LPAREN, 0); }
	public arithmetic(): ArithmeticContext {
		return this.getRuleContext(0, ArithmeticContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RuneScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_calc; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitCalc) {
			return visitor.visitCalc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_arithmetic; }
	public copyFrom(ctx: ArithmeticContext): void {
		super.copyFrom(ctx);
	}
}
export class ArithmeticParenthesizedExpressionContext extends ArithmeticContext {
	public LPAREN(): TerminalNode { return this.getToken(RuneScriptParser.LPAREN, 0); }
	public arithmetic(): ArithmeticContext {
		return this.getRuleContext(0, ArithmeticContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RuneScriptParser.RPAREN, 0); }
	constructor(ctx: ArithmeticContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitArithmeticParenthesizedExpression) {
			return visitor.visitArithmeticParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryExpressionContext extends ArithmeticContext {
	public _op!: Token;
	public arithmetic(): ArithmeticContext[];
	public arithmetic(i: number): ArithmeticContext;
	public arithmetic(i?: number): ArithmeticContext | ArithmeticContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArithmeticContext);
		} else {
			return this.getRuleContext(i, ArithmeticContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.MOD, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.MINUS, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.OR, 0); }
	constructor(ctx: ArithmeticContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitArithmeticBinaryExpression) {
			return visitor.visitArithmeticBinaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticNormalExpressionContext extends ArithmeticContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ArithmeticContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitArithmeticNormalExpression) {
			return visitor.visitArithmeticNormalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_call; }
	public copyFrom(ctx: CallContext): void {
		super.copyFrom(ctx);
	}
}
export class CommandCallExpressionContext extends CallContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.MUL, 0); }
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RuneScriptParser.LPAREN);
		} else {
			return this.getToken(RuneScriptParser.LPAREN, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RuneScriptParser.RPAREN);
		} else {
			return this.getToken(RuneScriptParser.RPAREN, i);
		}
	}
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	constructor(ctx: CallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitCommandCallExpression) {
			return visitor.visitCommandCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ProcCallExpressionContext extends CallContext {
	public TILDE(): TerminalNode { return this.getToken(RuneScriptParser.TILDE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: CallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitProcCallExpression) {
			return visitor.visitProcCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JumpCallExpressionContext extends CallContext {
	public AT(): TerminalNode { return this.getToken(RuneScriptParser.AT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: CallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitJumpCallExpression) {
			return visitor.visitJumpCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClientScriptContext extends ParserRuleContext {
	public _args!: ExpressionListContext;
	public _triggers!: ExpressionListContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EOF(): TerminalNode { return this.getToken(RuneScriptParser.EOF, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.RPAREN, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.RBRACE, 0); }
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_clientScript; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitClientScript) {
			return visitor.visitClientScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableVariableListContext extends ParserRuleContext {
	public assignableVariable(): AssignableVariableContext[];
	public assignableVariable(i: number): AssignableVariableContext;
	public assignableVariable(i?: number): AssignableVariableContext | AssignableVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignableVariableContext);
		} else {
			return this.getRuleContext(i, AssignableVariableContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RuneScriptParser.COMMA);
		} else {
			return this.getToken(RuneScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_assignableVariableList; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignableVariableList) {
			return visitor.visitAssignableVariableList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableVariableContext extends ParserRuleContext {
	public localVariable(): LocalVariableContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableContext);
	}
	public localArrayVariable(): LocalArrayVariableContext | undefined {
		return this.tryGetRuleContext(0, LocalArrayVariableContext);
	}
	public gameVariable(): GameVariableContext | undefined {
		return this.tryGetRuleContext(0, GameVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_assignableVariable; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignableVariable) {
			return visitor.visitAssignableVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode { return this.getToken(RuneScriptParser.DOLLAR, 0); }
	public advancedIdentifier(): AdvancedIdentifierContext {
		return this.getRuleContext(0, AdvancedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_localVariable; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitLocalVariable) {
			return visitor.visitLocalVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalArrayVariableContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode { return this.getToken(RuneScriptParser.DOLLAR, 0); }
	public advancedIdentifier(): AdvancedIdentifierContext {
		return this.getRuleContext(0, AdvancedIdentifierContext);
	}
	public parenthesis(): ParenthesisContext {
		return this.getRuleContext(0, ParenthesisContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_localArrayVariable; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitLocalArrayVariable) {
			return visitor.visitLocalArrayVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GameVariableContext extends ParserRuleContext {
	public MOD(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.MOD, 0); }
	public advancedIdentifier(): AdvancedIdentifierContext {
		return this.getRuleContext(0, AdvancedIdentifierContext);
	}
	public DOTMOD(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.DOTMOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_gameVariable; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitGameVariable) {
			return visitor.visitGameVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantVariableContext extends ParserRuleContext {
	public CARET(): TerminalNode { return this.getToken(RuneScriptParser.CARET, 0); }
	public advancedIdentifier(): AdvancedIdentifierContext {
		return this.getRuleContext(0, AdvancedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_constantVariable; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitConstantVariable) {
			return visitor.visitConstantVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerLiteralContext extends LiteralContext {
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.INTEGER_LITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.HEX_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CoordLiteralContext extends LiteralContext {
	public COORD_LITERAL(): TerminalNode { return this.getToken(RuneScriptParser.COORD_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitCoordLiteral) {
			return visitor.visitCoordLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public BOOLEAN_LITERAL(): TerminalNode { return this.getToken(RuneScriptParser.BOOLEAN_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharacterLiteralContext extends LiteralContext {
	public CHAR_LITERAL(): TerminalNode { return this.getToken(RuneScriptParser.CHAR_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitCharacterLiteral) {
			return visitor.visitCharacterLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralContext extends LiteralContext {
	public NULL_LITERAL(): TerminalNode { return this.getToken(RuneScriptParser.NULL_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralExpressionContext extends LiteralContext {
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitStringLiteralExpression) {
			return visitor.visitStringLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public QUOTE_OPEN(): TerminalNode { return this.getToken(RuneScriptParser.QUOTE_OPEN, 0); }
	public QUOTE_CLOSE(): TerminalNode { return this.getToken(RuneScriptParser.QUOTE_CLOSE, 0); }
	public stringLiteralContent(): StringLiteralContentContext[];
	public stringLiteralContent(i: number): StringLiteralContentContext;
	public stringLiteralContent(i?: number): StringLiteralContentContext | StringLiteralContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContentContext);
		} else {
			return this.getRuleContext(i, StringLiteralContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_stringLiteral; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContentContext extends ParserRuleContext {
	public STRING_TEXT(): TerminalNode { return this.getToken(RuneScriptParser.STRING_TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_stringLiteralContent; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitStringLiteralContent) {
			return visitor.visitStringLiteralContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinedStringContext extends ParserRuleContext {
	public QUOTE_OPEN(): TerminalNode { return this.getToken(RuneScriptParser.QUOTE_OPEN, 0); }
	public QUOTE_CLOSE(): TerminalNode { return this.getToken(RuneScriptParser.QUOTE_CLOSE, 0); }
	public stringLiteralContent(): StringLiteralContentContext[];
	public stringLiteralContent(i: number): StringLiteralContentContext;
	public stringLiteralContent(i?: number): StringLiteralContentContext | StringLiteralContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContentContext);
		} else {
			return this.getRuleContext(i, StringLiteralContentContext);
		}
	}
	public stringTag(): StringTagContext[];
	public stringTag(i: number): StringTagContext;
	public stringTag(i?: number): StringTagContext | StringTagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringTagContext);
		} else {
			return this.getRuleContext(i, StringTagContext);
		}
	}
	public stringPTag(): StringPTagContext[];
	public stringPTag(i: number): StringPTagContext;
	public stringPTag(i?: number): StringPTagContext | StringPTagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringPTagContext);
		} else {
			return this.getRuleContext(i, StringPTagContext);
		}
	}
	public stringExpression(): StringExpressionContext[];
	public stringExpression(i: number): StringExpressionContext;
	public stringExpression(i?: number): StringExpressionContext | StringExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionContext);
		} else {
			return this.getRuleContext(i, StringExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_joinedString; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitJoinedString) {
			return visitor.visitJoinedString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringTagContext extends ParserRuleContext {
	public STRING_TAG(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.STRING_TAG, 0); }
	public STRING_CLOSE_TAG(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.STRING_CLOSE_TAG, 0); }
	public STRING_PARTIAL_TAG(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.STRING_PARTIAL_TAG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_stringTag; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitStringTag) {
			return visitor.visitStringTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringPTagContext extends ParserRuleContext {
	public STRING_P_TAG(): TerminalNode { return this.getToken(RuneScriptParser.STRING_P_TAG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_stringPTag; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitStringPTag) {
			return visitor.visitStringPTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringExpressionContext extends ParserRuleContext {
	public STRING_EXPR_START(): TerminalNode { return this.getToken(RuneScriptParser.STRING_EXPR_START, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public STRING_EXPR_END(): TerminalNode { return this.getToken(RuneScriptParser.STRING_EXPR_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_stringExpression; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.IDENTIFIER, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.HEX_LITERAL, 0); }
	public BOOLEAN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.BOOLEAN_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.NULL_LITERAL, 0); }
	public COORD_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.COORD_LITERAL, 0); }
	public MAPZONE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.MAPZONE_LITERAL, 0); }
	public TYPE_ARRAY(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.TYPE_ARRAY, 0); }
	public SWITCH_TYPE(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.SWITCH_TYPE, 0); }
	public DEF_TYPE(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.DEF_TYPE, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_identifier; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdvancedIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.ELSE, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.WHILE, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.RETURN, 0); }
	public CALC(): TerminalNode | undefined { return this.tryGetToken(RuneScriptParser.CALC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RuneScriptParser.RULE_advancedIdentifier; }
	// @Override
	public accept<Result>(visitor: RuneScriptParserVisitor<Result>): Result {
		if (visitor.visitAdvancedIdentifier) {
			return visitor.visitAdvancedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


