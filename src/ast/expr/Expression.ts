import { Node } from "../Node.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"

export abstract class Expression extends Node {
  protected constructor(source: NodeSourceLocation) {
    super(source);
  }
}
