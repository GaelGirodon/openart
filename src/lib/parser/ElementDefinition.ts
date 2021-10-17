/**
 * A diagram element definition
 */
export interface ElementDefinition {

  /** Element name */
  name?: string;

  /** Element width */
  width?: number;

  /** Element height */
  height?: number;

  /** Element x position */
  x?: number;

  /** Element y position */
  y?: number;

  /** Other element attributes */
  [key: string]: any;

  /** Element children */
  children?: ElementDefinition[];

}
