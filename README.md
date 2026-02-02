# runescript-parser-ts

TypeScript RuneScript parser extracted from the Neptune project.

## Install

This repo is intended for local development. Build output is in `dist/`.

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
import { ScriptParser } from "./dist/index.js";

// Parse file from string
const scriptFile = ScriptParser.parseFileTextString("[test,example]\nreturn;");

// Parse file from file parth
const scriptFile = ScriptParser.parseFile("/path/to/file.rs2");

// Parse file from file parth (async)
const scriptFile = ScriptParser.parseFileAsync("/path/to/file.rs2");

// Parse just a script from string
const script = ScriptParser.parseSciptText("[test,example]\nreturn;");
```

## Credits

Parser and grammar originally ported from the Neptune project:

- https://github.com/neptune-ps/neptune
