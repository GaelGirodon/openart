import { SVGElement } from "../../processor/svg/SVGElement";
import { Element } from "../Element";

/**
 * A simple rectangle
 */
export class Rectangle extends Element {

  /** @inheritdoc */
  toSVG(): SVGElement {
    const element = new SVGElement(this, "rect")
      .attr("x", (this.x || 0) + 1)
      .attr("y", (this.y || 0) + 1)
      .attr("width", (this.width || 0) - 2)
      .attr("height", (this.height || 0) - 2)
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 2);
    return element;
  }

}
