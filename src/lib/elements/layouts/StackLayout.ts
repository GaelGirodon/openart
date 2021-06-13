import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
import { Container } from "../Container";

/**
 * Stack multiple items horizontally or vertically.
 */
export class StackLayout extends Container {

  /**
   * Create a stack layout.
   * @param definition Stack layout definition
   */
  constructor(definition: StackLayoutDefinition) {
    super(definition);
  }

  /**
   * Stack layout gap in pixels
   */
  public get gap(): number {
    return this.definition.gap || 0;
  }

  /**
   * Stack layout orientation
   */
  public get orientation(): StackLayoutOrientation {
    return this.definition.orientation || StackLayoutOrientation.Horizontal;
  }

  /** @inheritdoc */
  public get width(): number {
    if (this.orientation == StackLayoutOrientation.Horizontal) {
      return (this.children.length - 1) * this.gap
        + this.children.reduce((sum, c) => sum + c.width, 0);
    } // this.orientation == StackLayoutOrientation.Vertical
    return this.children.reduce((max, c) => {
      const width = c.width;
      return width > max ? width : max;
    }, 0);
  }

  /** @inheritdoc */
  public get height(): number {
    if (this.orientation == StackLayoutOrientation.Vertical) {
      return (this.children.length - 1) * this.gap
        + this.children.reduce((sum, c) => sum + c.height, 0);
    } // this.orientation == StackLayoutOrientation.Horizontal
    return this.children.reduce((max, c) => {
      const height = c.height;
      return height > max ? height : max;
    }, 0);
  }

  /** @inheritdoc */
  toSVGElement(): SVGElement | string {
    const group = new SVGElement();
    const x = this.orientation == StackLayoutOrientation.Horizontal ? "x" : "y";
    const width = x == "x" ? "width" : "height";
    let widthSum = 0;
    for (let i = 0; i < this.children.length; i++) {
      const element = this.children[i];
      element[x] += widthSum;
      widthSum += element[width] + this.gap;
      group.add(element.toSVGElement());
    }
    return group;
  }

}

/**
 * Stack layout definition
 */
export interface StackLayoutDefinition extends ElementDefinition {

  /** Stacking orientation */
  orientation?: StackLayoutOrientation

  /** Gap between items in pixels */
  gap?: number;

}

/**
 * Stacking orientation
 */
export enum StackLayoutOrientation {
  Horizontal = "horizontal",
  Vertical = "vertical"
}
