import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
import { Element } from "../Element";

/**
 * A text block
 */
export class Text extends Element {

  /**
   * Create a text block.
   * @param definition Text definition
   */
  constructor(protected definition: TextDefinition) {
    super(definition);
  }

  toSVGElement(): SVGElement {
    return new SVGElement("text")
      .attr("x", this.x)
      .attr("y", this.y)
      .attr("text-anchor", "middle")
      .add(this.definition.text || "");
  }

}

/**
 * Text definition
 */
export interface TextDefinition extends ElementDefinition {

  /** Text value */
  text?: string

}
