import { Node } from "./Node.js"
import type { AstVisitor } from "./AstVisitor.js"
import type { NodeSourceLocation } from "./NodeSourceLocation.js"
import type { Script } from "./Script.js"
import { NodeKind } from "./NodeKind.js"

export class ScriptFile extends Node {
  public readonly kind = NodeKind.ScriptFile;
  public readonly scripts: Script[];

  public constructor(source: NodeSourceLocation, scripts: Script[]) {
    super(source);
    this.scripts = scripts;
    this.addChildren(scripts);
  }

  public accept<R>(visitor: AstVisitor<R>): R {
    return visitor.visitScriptFile(this);
  }
}
