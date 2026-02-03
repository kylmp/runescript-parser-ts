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

export class ScriptParser {
  public static parseFile(
    path: string,
    errorListener?: ANTLRErrorListener<unknown>
  ): ScriptFile | null {
    const content = readFileSync(path, "utf8");
    return this.invokeParser(
      CharStreams.fromString(content, path),
      (parser) => parser.scriptFile(),
      errorListener
    ) as ScriptFile | null;
  }

  public static async parseFileAsync(
    path: string,
    errorListener?: ANTLRErrorListener<unknown>
  ): Promise<ScriptFile | null> {
    const content = await readFile(path, "utf8");
    return this.invokeParser(
      CharStreams.fromString(content, path),
      (parser) => parser.scriptFile(),
      errorListener
    ) as ScriptFile | null;
  }

  public static parseFileTextString(
    scriptFile: string,
    errorListener?: ANTLRErrorListener<unknown>
  ): ScriptFile | null {
    return this.invokeParser(
      CharStreams.fromString(scriptFile, "<source>"),
      (parser) => parser.scriptFile(),
      errorListener
    ) as ScriptFile | null;
  }

  public static parseFileTextLines(
    lines: string[],
    errorListener?: ANTLRErrorListener<unknown>
  ): ScriptFile | null {
    return this.parseFileTextString(lines.join("\n"), errorListener);
  }

  public static parseScriptText(
    script: string,
    errorListener?: ANTLRErrorListener<unknown>
  ): Script | null {
    return this.invokeParser(
      CharStreams.fromString(script, "<source>"),
      (parser) => parser.script(),
      errorListener
    ) as Script | null;
  }

  public static invokeParser(
    stream: CharStream,
    entry: (parser: RuneScriptParser) => ParserRuleContext,
    errorListener?: ANTLRErrorListener<unknown>,
    lineOffset = 0,
    columnOffset = 0
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

    if (parser.numberOfSyntaxErrors > 0) {
      return null;
    }

    return new AstBuilder(stream.sourceName ?? "<source>", lineOffset, columnOffset).visit(tree);
  }
}
