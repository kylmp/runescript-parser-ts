export class ParsingException extends Error {
  public readonly line: number;
  public readonly column: number;

  public constructor(message: string | null, cause: unknown, line: number, column: number) {
    super(message ?? undefined);
    this.name = "ParsingException";
    this.line = line;
    this.column = column;
    if (cause) {
      (this as { cause?: unknown }).cause = cause;
    }
    this.message = `line ${line}:${column}: ${this.message}`;
  }
}
