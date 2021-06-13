import { ElementDefinition } from "../parser/ElementDefinition";
import { ProcessDiagram } from "./diagrams/process/ProcessDiagram";
import { Element } from "./Element";
import { ContainerLayout } from "./layouts/ContainerLayout";
import { Rectangle } from "./shapes/Rectangle";

/**
 * Diagram element factory.
 */
export class ElementFactory {

  /**
   * Element constructors by definition name
   */
  private static readonly elements: { [name: string]: { new(definition: ElementDefinition): Element } } = {
    // Shapes
    "rect": Rectangle,
    // Layouts
    "root": ContainerLayout,
    // Diagrams
    "process": ProcessDiagram
  };

  /**
   * Build an element from a definition.
   * @param definition Element definition
   * @returns Diagram element
   */
  public static build(definition: ElementDefinition): Element {
    return definition.name && definition.name in this.elements
      ? new (this.elements[definition.name])(definition)
      : new ContainerLayout(definition);
  }

}
