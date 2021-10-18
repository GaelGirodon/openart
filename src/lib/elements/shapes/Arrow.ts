import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
import { rotate, round } from "../../processor/Utilities";
import { Element } from "../Element";

/**
 * A simple arrow
 */
export class Arrow extends Element {

  /**
   * Create a simple arrow.
   * @param def Arrow definition
   */
  constructor(protected def: ArrowDefinition) {
    super(def);
  }

  /** @inheritdoc */
  toSVG(): SVGElement {
    const angle = (this.def.angle || 0) * Math.PI / 180;
    const offset = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    const cmd = ["M", "L", "M", "L", "L"];
    const shape = [
      { x: -this.width / 2, y: 0 },
      { x: this.width / 2, y: 0 },
      { x: this.width / 2 - this.height / 2, y: this.height / 2 },
      { x: this.width / 2, y: 0 },
      { x: this.width / 2 - this.height / 2, y: -this.height / 2 }
    ].map(p => rotate(p, angle))
      .map((p, i) => `${cmd[i]}${round(offset.x + p.x)} ${round(offset.y + p.y)}`);
    return new SVGElement(this, "path")
      .attr("d", shape.join(" "))
      .attr("stroke", "#000")
      .attr("stroke-width", 2)
      .attr("stroke-linecap", "round")
      .attr("fill", "transparent");
  }

}

/**
 * Arrow definition
 */
export interface ArrowDefinition extends ElementDefinition {

  /** Arrow direction in degrees (0° = right) */
  angle?: number;

}
