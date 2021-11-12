/**
 * An RGB color.
 */
 export class Color {

  /**
   * Create a new color.
   * @param r Red value (0-255)
   * @param g Green value (0-255)
   * @param b Blue value (0-255)
   */
  constructor(public readonly r: number, public readonly g: number, public readonly b: number) {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      throw new Error("Invalid color value");
    }
  }

  /**
   * Add colors and return the sum.
   * @param diff Values to add
   * @returns The new color
   */
  public add(diff: {r: number, g: number, b: number}): Color {
    return new Color(
      Math.max(0, Math.min(255, this.r + diff.r)),
      Math.max(0, Math.min(255, this.g + diff.g)),
      Math.max(0, Math.min(255, this.b + diff.b))
    )
  }

  /**
   * Returns the most contrasted color between the current one
   * and black or white.
   * @returns Black or white
   */
  public foreground(): Color {
    return (this.r + this.g + this.b) > (128 * 3) ? new Color(0, 0, 0)
      : new Color(255, 255, 255);
  }

  /**
   * @returns The color as an hexadecimal string (#FFFFFF).
   */
  public hex(): string {
    return `#${this.r.toString(16).padStart(2, "0")}`
      + `${this.g.toString(16).padStart(2, "0")}`
      + `${this.b.toString(16).padStart(2, "0")}`;
  }

  /**
   * Parse an hexadecimal color.
   * @param color The color as an hexadecimal string (#FFFFFF)
   * @returns The parsed color
   */
  public static parse(color: string): Color {
    const hex = /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i;
    const m = hex.exec(color);
    if (m) {
      return new Color(parseInt(`0x${m[1]}`), parseInt(`0x${m[2]}`), parseInt(`0x${m[3]}`));
    }
    throw new Error(`Invalid color value: '${color}'`);
  }

}
