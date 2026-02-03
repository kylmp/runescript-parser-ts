# runescript-parser

TypeScript RuneScript parser extracted from the Neptune project.

## Install

```
npm install runescript-parser
```

## Development

Build output is in `dist/`.

```
npm install
npm run build
```

If you change the grammar files under `antlr/`, regenerate the parser first:

```
npm run antlr:generate
```

## Usage

```js
import { ScriptParser } from "runescript-parser";

// Parse file from string
const scriptFile = ScriptParser.parseFileTextString("[test,example]\nreturn;");

// Parse file from file path
const scriptFile = ScriptParser.parseFile("/path/to/file.rs2");

// Parse file from file path (async)
const scriptFile = ScriptParser.parseFileAsync("/path/to/file.rs2");

// Parse just a script from string
const script = ScriptParser.parseScriptText("[test,example]\nreturn;");
```

## Credits

Parser and grammar originally ported from the Neptune project:

- https://github.com/neptune-ps/neptune
