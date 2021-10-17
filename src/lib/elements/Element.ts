import { ElementDefinition } from "../parser/ElementDefinition";
import { SVGElement } from "../processor/svg/SVGElement";
import { Container } from "./Container";

/**
 * A diagram element
 */
export abstract class Element {

  /** Element parent */
  public parent?: Container;

  /**
   * Create a diagram element.
   * @param def Diagram element definition
   */
  constructor(protected def: ElementDefinition = {}) { }

  /** Get element width in pixels */
  public get width(): number {
    return this.def.width || 0;
  }

  /** Set element width in pixels */
  public set width(value: number) {
    this.def.width = value;
  }

  /** Get the element height in pixels */
  public get height(): number {
    return this.def.height || 0;
  }

  /** Set the element height in pixels */
  public set height(value: number) {
    this.def.height = value;
  }

  /** Get the element horizontal position */
  public get x(): number {
    return this.def.x || 0;
  }

  /** Set the element horizontal position */
  public set x(value: number) {
    this.def.x = value;
  }

  /** Get the element vertical position */
  public get y(): number {
    return this.def.y || 0;
  }

  /** Set the element vertical position */
  public set y(value: number) {
    this.def.y = value;
  }

  /**
   * Render this element into an SVG element.
   * @returns Rendered SVG element
   */
  abstract toSVG(): SVGElement;

}
