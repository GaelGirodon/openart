import { Color } from "./Color";

/**
 * Element or diagram style generator.
 */
export class Style {

  /** Style colors */
  private colors: Color[];

  /** Style color variation */
  private theme: "mono" | "lighten" | "darken";

  constructor(def: StyleDefinition) {
    this.colors = def.color?.length ? def.color.split(" ")
      .map(c => Color.parse(c)) : [new Color(255, 255, 255)];
    this.theme = def.theme ?? "mono";
  }

  /**
   * Generate a color palette.
   * @param length Number of colors
   * @return List of colors
   */
  public palette(length: number): Color[] {
    if (this.theme === "mono") {
      return Array.from(Array(length).keys())
        .map(i => this.colors[i % this.colors.length]);
    } // else
    const step = Math.round(128 / (length - 1));
    let delta = -64;
    const colors = Array.from(Array(length).keys()).map(() => {
      const c = this.colors[0].add({ r: delta, g: delta, b: delta });
      delta += step;
      return c;
    });
    return this.theme === "darken" ? colors.reverse() : colors;
  }

}

/**
 * Style definition
 */
export interface StyleDefinition {

  /**
   * Color variation:
   * - mono: keep the same color
   * - lighten: light to dark gradient
   * - darken: dark to light gradient
   */
  theme?: "mono" | "lighten" | "darken";

  /** Style color(s) (space separated) */
  color?: string;

}
