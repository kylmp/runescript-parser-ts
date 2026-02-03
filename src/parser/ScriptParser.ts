import { readFileSync } from "fs";
import { readFile } from "fs/promises";
import type { ANTLRErrorListener, CharStream, ParserRuleContext } from "antlr4ts";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { RuneScriptLexer } from "../antlr/RuneScriptLexer.js"
import { RuneScriptParser } from "../antlr/RuneScriptParser.js"
import type { Node } from "../ast/Node.js"
import type { Script } from "../ast/Script.js"
import type { ScriptFile } from "../ast/ScriptFile.js"
import { AstBuilder } from "./AstBuilder.js"

export type ParserOptions = {
  errorListener?: ANTLRErrorListener<unknown>;
  tolerant?: boolean;
};

export class ScriptParser {
  public static parseFile(path: string, options?: ParserOptions): ScriptFile | null {
    const optionsResolved = options ?? {};
    const content = readFileSync(path, "utf8");
    return this.invokeParser(
      CharStreams.fromString(content, path),
      (parser) => parser.scriptFile(),
      optionsResolved.errorListener,
      0,
      0,
      optionsResolved.tolerant ?? false
    ) as ScriptFile | null;
  }

  public static async parseFileAsync(
    path: string,
    options?: ParserOptions
  ): Promise<ScriptFile | null> {
    const optionsResolved = options ?? {};
    const content = await readFile(path, "utf8");
    return this.invokeParser(
      CharStreams.fromString(content, path),
      (parser) => parser.scriptFile(),
      optionsResolved.errorListener,
      0,
      0,
      optionsResolved.tolerant ?? false
    ) as ScriptFile | null;
  }

  public static parseFileTextString(
    scriptFile: string,
    options?: ParserOptions
  ): ScriptFile | null {
    const optionsResolved = options ?? {};
    return this.invokeParser(
      CharStreams.fromString(scriptFile, "<source>"),
      (parser) => parser.scriptFile(),
      optionsResolved.errorListener,
      0,
      0,
      optionsResolved.tolerant ?? false
    ) as ScriptFile | null;
  }

  public static parseFileTextLines(
    lines: string[],
    options?: ParserOptions
  ): ScriptFile | null {
    return this.parseFileTextString(lines.join("\n"), options);
  }

  public static parseScriptText(
    script: string,
    options?: ParserOptions
  ): Script | null {
    const optionsResolved = options ?? {};
    return this.invokeParser(
      CharStreams.fromString(script, "<source>"),
      (parser) => parser.script(),
      optionsResolved.errorListener,
      0,
      0,
      optionsResolved.tolerant ?? false
    ) as Script | null;
  }

  public static invokeParser(
    stream: CharStream,
    entry: (parser: RuneScriptParser) => ParserRuleContext,
    errorListener?: ANTLRErrorListener<unknown>,
    lineOffset = 0,
    columnOffset = 0,
    tolerant = false
  ): Node | null {
    const lexer = new RuneScriptLexer(stream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new RuneScriptParser(tokens);

    if (errorListener) {
      lexer.removeErrorListeners();
      lexer.addErrorListener(errorListener as ANTLRErrorListener<number>);

      parser.removeErrorListeners();
      parser.addErrorListener(errorListener as ANTLRErrorListener<unknown>);
    }

    const tree = entry(parser);

    if (!tolerant && parser.numberOfSyntaxErrors > 0) {
      return null;
    }

    return new AstBuilder(stream.sourceName ?? "<source>", lineOffset, columnOffset).visit(tree);
  }
}
