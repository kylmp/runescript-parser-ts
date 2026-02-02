import { Node } from "../Node.js"
import type { NodeSourceLocation } from "../NodeSourceLocation.js"

export abstract class Statement extends Node {
  protected constructor(source: NodeSourceLocation) {
    super(source);
  }
}
