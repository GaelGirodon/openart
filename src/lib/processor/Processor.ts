import { ElementFactory } from "../elements/ElementFactory";
import { ContainerLayout } from "../elements/layouts/ContainerLayout";
import { Parser } from "../parser/Parser";
import { SVGImage } from "./svg/SVGImage";

/**
 * Diagram processor
 */
export class Processor {

  /**
   * Render a diagram.
   * @param definitionText Diagram definition as raw text
   * @returns Diagram rendered as an SVG image
   */
  public render(definitionText: string): string {
    const parser = new Parser();
    const definition = parser.parse(definitionText);
    const root = new ContainerLayout(definition);
    if (definition.children) {
      definition.children.forEach(c => root.add(ElementFactory.build(c)));
    }
    const image = new SVGImage().add(root.toSVGElement());
    return image.render();
  }

}
