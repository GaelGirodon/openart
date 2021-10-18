import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
import { Builder } from "../Builder";
import { Container } from "../Container";

/**
 * Stack multiple items horizontally or vertically.
 */
export class StackLayout extends Container {

  /**
   * Create a stack layout.
   * @param def Stack layout definition
   * @param builder Diagram element builder
   */
  constructor(def: StackLayoutDefinition, builder: Builder) {
    super(def, builder);
  }

  /**
   * Stack layout gap in pixels
   */
  public get gap(): number {
    return this.def.gap || 0;
  }

  /**
   * Stack layout orientation
   */
  public get orientation(): StackLayoutOrientation {
    return this.def.orientation || "horizontal";
  }

  /** @inheritdoc */
  public get width(): number {
    if (this.orientation == "horizontal") {
      return this.def.width ?? (this.children.length - 1) * this.gap
        + this.children.reduce((sum, c) => sum + c.width, 0);
    } // this.orientation == "vertical"
    return this.computeWidth();
  }

  /** @inheritdoc */
  public get height(): number {
    if (this.orientation == "vertical") {
      return this.def.height ?? (this.children.length - 1) * this.gap
        + this.children.reduce((sum, c) => sum + c.height, 0);
    } // this.orientation == "horizontal"
    return this.computeHeight();
  }

  /** @inheritdoc */
  toSVG(): SVGElement {
    const group = new SVGElement(this);
    const x = this.orientation == "horizontal" ? "x" : "y";
    const y = x == "x" ? "y" : "x";
    const width = x == "x" ? "width" : "height";
    let widthSum = 0;
    for (const el of this.children) {
      el[x] += this[x] + widthSum; // TODO Make this idempotent
      el[y] += this[y]; // TODO Make this idempotent
      widthSum += el[width] + this.gap;
      group.add(el.toSVG());
    }
    return group;
  }

}

/**
 * Stack layout definition
 */
export interface StackLayoutDefinition extends ElementDefinition {

  /** Stacking orientation */
  orientation?: StackLayoutOrientation;

  /** Gap between items in pixels */
  gap?: number;

}

/**
 * Stacking orientation
 */
export type StackLayoutOrientation = "horizontal" | "vertical";
