import { SVGElement } from "./SVGElement";

/**
 * A SVG image
 */
export class SVGImage extends SVGElement {

  constructor() {
    super("svg");
    this.attr("version", "1.1")
      .attr("xmlns", "http://www.w3.org/2000/svg");
  }

}
