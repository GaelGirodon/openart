import { ElementDefinition } from "../parser/ElementDefinition";
import { Element } from "./Element";
import { ContainerLayout } from "./layouts/ContainerLayout";

/**
 * Diagram element builder
 */
export class Builder {

  /**
   * Create a new element builder.
   * @param elements Element constructors by definition name
   */
  constructor(private elements: { [name: string]: { new(def: ElementDefinition, builder: Builder): Element } }) { }

  /**
   * Build an element from a definition.
   * @param def Element definition
   * @returns Diagram element
   */
  public build(def: ElementDefinition): Element {
    return def.name && def.name in this.elements
      ? new (this.elements[def.name])(def, this)
      : new ContainerLayout(def, this);
  }

}
