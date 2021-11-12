import { ElementDefinition } from "../../../parser/ElementDefinition";
import { Builder } from "../../Builder";
import { ContainerLayout } from "../../layouts/ContainerLayout";
import { StackLayout } from "../../layouts/StackLayout";
import { Arrow } from "../../shapes/Arrow";
import { Rectangle } from "../../shapes/Rectangle";
import { Text } from "../../shapes/Text";
import { Style, StyleDefinition } from "../../style/Style";
import { Diagram } from "../Diagram";

/**
 * Illustrate steps or stages in a process or workflow, such as sequential steps
 * for completing a task, general phases in the development of a product, or a
 * timeline or schedule.
 */
export class ProcessDiagram extends Diagram {

  /**
   * Create a process.
   * @param def Process definition
   * @param builder Diagram element builder
   */
  constructor(def: ProcessDiagramDefinition, builder: Builder) {
    super(Object.assign({}, def, { children: [] }), builder);
    if (!def.children?.length) {
      throw new Error("No steps defined");
    }
    const orientation = def.orientation || "horizontal";
    const h = orientation === "horizontal";
    const colors = new Style(def).palette(def.children.length);
    const stack = new StackLayout({ orientation, gap: 12 }, builder);
    for (let i = 0; i < def.children.length; i++) {
      const child = def.children[i];
      stack.add(new ContainerLayout({ width: 150, height: 80 }, builder)
        .add(new Rectangle({ width: 150, height: 80, fill: colors[i].hex() }))
        .add(new Text({ text: child.name, width: 150, height: 80, x: 75, y: 40, fill: colors[i].foreground().hex() }))
      );
      if (i < def.children.length - 1) {
        stack.add(new ContainerLayout({ width: h ? 24 : 80, height: h ? 80 : 24 }, builder)
          .add(new Arrow({ width: 24, height: 24, x: h ? 0 : 63, y: h ? 28 : 0, angle: h ? 0 : 90 })));
      }
    }
    this.add(stack);
  }

}

/**
 * Process diagram definition
 */
export interface ProcessDiagramDefinition extends ElementDefinition, StyleDefinition {

}
