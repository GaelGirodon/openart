import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
import { Container } from "../Container";

/**
 * A simple container layout
 */
export class ContainerLayout extends Container {

  /**
   * Create a container layout.
   * @param definition Container layout definition
   */
  constructor(protected definition: ContainerLayoutDefinition = {}) {
    super(definition);
  }

  /**
   * Container layout padding
   */
  public get padding(): ContainerLayoutPadding {
    return this.definition.padding || { left: 0, top: 0, right: 0, bottom: 0 };
  }

  /** @inheritdoc */
  toSVGElement(): SVGElement | string {
    const group = new SVGElement();
    this.children.forEach(c => {
      c.x += this.x;
      c.y += this.y;
      group.add(c.toSVGElement())
    });
    return group;
  }

}

/**
 * Container layout definition
 */
export interface ContainerLayoutDefinition extends ElementDefinition {

  /** Container padding */
  padding?: ContainerLayoutPadding

}

/**
 * Container layout padding
 */
export interface ContainerLayoutPadding {

  /** Left padding in pixels */
  left: number;

  /** Top padding in pixels */
  top: number;

  /** Right padding in pixels */
  right: number;

  /** Bottom padding in pixels */
  bottom: number;
}
