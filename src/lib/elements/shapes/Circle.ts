import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
import { Element } from "../Element";

/**
 * A simple circle
 */
export class Circle extends Element {

  /**
   * Create a circle.
   * @param def Circle definition
   */
  constructor(protected def: CircleDefinition) {
    super(def);
  }

  /** @inheritdoc */
  public get width(): number {
    return (this.def?.radius || 0) * 2;
  }

  /** @inheritdoc */
  public get height(): number {
    return (this.def?.radius || 0) * 2;
  }

  /** @inheritdoc */
  toSVG(): SVGElement {
    return new SVGElement(this, "circle")
      .attr("cx", (this.x || 0) + (this.def?.radius || 0))
      .attr("cy", (this.y || 0) + (this.def?.radius || 0))
      .attr("r", this.def?.radius || 0)
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 2);
  }

}

/**
 * Circle definition
 */
export interface CircleDefinition extends ElementDefinition {

  /** Radius value */
  radius?: number;

}
