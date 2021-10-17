import { SVGElement } from "./SVGElement";

/**
 * A SVG image
 */
export class SVGImage extends SVGElement {

  constructor() {
    super(undefined, "svg");
    this.attr("version", "1.1")
      .attr("xmlns", "http://www.w3.org/2000/svg");
  }

  /**
   * Render the SVG element.
   * @returns SVG element as text.
   */
  public render(): string {
    this
      .attr("width", this.children
        .reduce((max, c) => {
          const width = c instanceof SVGElement ? c.element?.width ?? 0 : 0;
          return width > max ? width : max;
        }, 0) + "px")
      .attr("height", this.children
        .reduce((max, c) => {
          const height = c instanceof SVGElement ? c.element?.height ?? 0 : 0;
          return height > max ? height : max;
        }, 0) + "px");
    return super.render();
  }

}
