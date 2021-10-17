import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
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
    const commands = ["M", "L", "M", "L", "L"];
    const d = [
      this.coords(-this.width / 2, 0, angle),
      this.coords(this.width / 2, 0, angle),
      this.coords(this.width / 2 - this.height / 2, this.height / 2, angle),
      this.coords(this.width / 2, 0, angle),
      this.coords(this.width / 2 - this.height / 2, -this.height / 2, angle)
    ].map((p, i) => `${commands[i]}${p.x} ${p.y}`).join(" ");
    return new SVGElement(this, "path")
      .attr("d", d)
      .attr("stroke", "#000")
      .attr("stroke-width", 2)
      .attr("stroke-linecap", "round")
      .attr("fill", "transparent");
  }

  /**
   * Compute path point coordinates.
   * @param x Initial horizontal position
   * @param y Initial vertical position
   * @param angle Rotation angle (radians)
   * @returns Point coordinates
   */
  private coords(x: number, y: number, angle: number): { x: number, y: number } {
    return {
      x: Math.round((this.x + this.width / 2 + x * Math.cos(angle) - y * Math.sin(angle)) * 10000) / 10000,
      y: Math.round((this.y + this.height / 2 + y * Math.cos(angle) + x * Math.sin(angle)) * 10000) / 10000
    }
  }

}

/**
 * Arrow definition
 */
export interface ArrowDefinition extends ElementDefinition {

  /** Arrow direction in degrees (0° = right) */
  angle?: number;

}
