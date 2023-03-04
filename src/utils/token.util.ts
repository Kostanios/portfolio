export class AssertUtil {
  public static assertString(
    maybeString: unknown,
    errorMessage?: string
  ): asserts maybeString is string {
    if (typeof maybeString !== "string") {
      throw new Error(errorMessage ?? `${maybeString} is not a string`);
    }
  }
}
