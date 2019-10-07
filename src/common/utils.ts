export function setTransition<T extends HTMLElement>(
  element: T,
  property: string,
  duration: number,
  timing: string,
  timeoutId: number | null = null,
): number {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  element.style.transition = `${property} ${duration}ms ${timing}`;
  return setTimeout(() => {
    element.style.transition = '';
  }, duration) as any;
}

export function constrainToRange(value: number, rangeMin: number, rangeMax: number): number {
  return Math.min(Math.max(value, rangeMin), rangeMax);
}

export function intersectPointRect(
  point: { x: number; y: number },
  rectangle: { left: number; top: number; right: number; bottom: number },
): boolean {
  const { x, y } = point;
  const { left, top, right, bottom } = rectangle;
  const horizontalIntersection = left! <= x! && x! <= right! + left!;
  const verticalIntersection = top! <= y! && y! <= bottom! + top!;
  return horizontalIntersection && verticalIntersection;
}
