/**
 * Rotate coordinates.
 * @param point Point coordinates to rotate
 * @param angle Rotation angle (radians)
 * @returns Rotated point coordinates
 */
export function rotate(point: { x: number, y: number }, angle: number): { x: number, y: number } {
  return {
    x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
    y: point.y * Math.cos(angle) + point.x * Math.sin(angle)
  }
}

/**
 * Round the value to an adequate number of decimals for SVG export.
 * @param value The value to round
 * @returns The rounded value
 */
export function round(value: number): number {
  return Math.round(value * 10000) / 10000;
}
