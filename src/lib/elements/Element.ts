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
   * @param definition Diagram element definition
   */
  constructor(protected definition: ElementDefinition = {}) { }

  /** Get element width in pixels */
  public get width(): number {
    return this.definition.width || 0;
  }

  /** Set element width in pixels */
  public set width(value: number) {
    this.definition.width = value;
  }

  /** Get element height in pixels */
  public get height(): number {
    return this.definition.height || 0;
  }

  /** Set element height in pixels */
  public set height(value: number) {
    this.definition.height = value;
  }

  /** Get element horizontal position */
  public get x(): number {
    return this.definition.x || 0;
  }

  /** Set element horizontal position */
  public set x(value: number) {
    this.definition.x = value;
  }

  /** Get element vertical position */
  public get y(): number {
    return this.definition.y || 0;
  }

  /** Set element vertical position */
  public set y(value: number) {
    this.definition.y = value;
  }

  /**
   * Render this element into an SVG element.
   * @returns Rendered SVG element
   */
  abstract toSVGElement(): SVGElement | string;

}
