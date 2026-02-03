import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ScriptParser } from "../dist/index.js";

const testScripts = join(dirname(fileURLToPath(import.meta.url)), "_testscripts");

export function parseTestScript(name) {
  const scriptPath = join(testScripts, name.endsWith('rs2') ? name : `${name}.rs2`);
  const { errors, listener } = createErrorListener(scriptPath);
  return { scriptFile: ScriptParser.parseFile(scriptPath, { errorListener: listener }), errors: errors };
}

export const silentListener = {
  syntaxError() {},
};

function createErrorListener(sourcePath) {
  const errors = [];
  return {
    errors,
    listener: {
      syntaxError(_recognizer, _offendingSymbol, line, column, message) {
        errors.push(`${sourcePath}:${line}:${column + 1} ${message}`);
      },
    },
  };
}
