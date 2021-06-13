import { SVGElement } from "../../processor/svg/SVGElement";
import { Element } from "../Element";

/**
 * A simple rectangle
 */
export class Rectangle extends Element {

  toSVGElement(): SVGElement {
    const element = new SVGElement("rect")
      .attr("x", this.x)
      .attr("y", this.y)
      .attr("width", this.width + "px")
      .attr("height", this.height + "px")
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 1);
    return element;
  }

}
