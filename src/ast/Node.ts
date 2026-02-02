import type { AstVisitor } from "./AstVisitor.js"
import type { NodeSourceLocation } from "./NodeSourceLocation.js"
import type { NodeKind } from "./NodeKind.js"

export abstract class Node {
  public abstract readonly kind: NodeKind;
  public readonly source: NodeSourceLocation;
  public parent: Node | null = null;
  private readonly _children: Node[] = [];
  private readonly attributes = new Map<string, unknown>();

  protected constructor(source: NodeSourceLocation) {
    this.source = source;
  }

  public get children(): ReadonlyArray<Node> {
    return this._children;
  }

  public abstract accept<R>(visitor: AstVisitor<R>): R;

  protected addChild(node?: Node | null): void {
    if (!node) {
      return;
    }

    if (node.parent) {
      throw new Error("parent already set");
    }

    node.parent = this;
    this._children.push(node);
  }

  protected addChildren(nodes: Array<Node | null | undefined>): void {
    for (const node of nodes) {
      if (!node) {
        continue;
      }

      if (node.parent) {
        throw new Error("parent already set");
      }

      node.parent = this;
      this._children.push(node);
    }
  }

  public findParentByType<T extends Node>(ctor: new (...args: any[]) => T): T | null {
    let current = this.parent;
    while (current) {
      if (current instanceof ctor) {
        return current;
      }
      current = current.parent;
    }
    return null;
  }

  public getAttribute<T>(key: string): T | undefined {
    return this.attributes.get(key) as T | undefined;
  }

  public setAttribute<T>(key: string, value: T | undefined): T | undefined {
    this.attributes.set(key, value as unknown);
    return value;
  }

  public removeAttribute(key: string): void {
    this.attributes.delete(key);
  }
}
