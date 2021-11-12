import { ElementDefinition } from "../../../parser/ElementDefinition";
import { Builder } from "../../Builder";
import { ContainerLayout } from "../../layouts/ContainerLayout";
import { RadialLayout } from "../../layouts/RadialLayout";
import { Circle } from "../../shapes/Circle";
import { Text } from "../../shapes/Text";
import { Diagram } from "../Diagram";

/**
 * A continuous sequence of phases, steps, tasks, or events in a circular flow.
 */
export class CycleDiagram extends Diagram {

  /**
   * Create a cycle.
   * @param def Cycle definition
   * @param builder Diagram element builder
   */
  constructor(def: ElementDefinition, builder: Builder) {
    super(Object.assign({}, def, { children: [] }), builder);
    if (!def.children?.length) {
      throw new Error("No steps defined");
    }
    const radial = new RadialLayout({ radius: 128 }, builder);
    for (const child of def.children) {
      radial.add(new ContainerLayout({ width: 64, height: 64 }, builder)
        .add(new Circle({ radius: 32 }))
        .add(new Text({ text: child.name, width: 64, height: 64, x: 32, y: 32 }))
      );
    }
    this.add(new ContainerLayout({ padding: 32 }, builder).add(radial));
  }

  /** @inheritdoc */
  public get width(): number {
    return (128 + 32 + 4) * 2;
  }

  /** @inheritdoc */
  public get height(): number {
    return (128 + 32 + 4) * 2;
  }

}
