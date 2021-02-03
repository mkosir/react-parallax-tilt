export function setTransition<T extends HTMLElement>(
  element: T,
  property: 'all' | 'opacity',
  duration: number,
  timing: string,
): void {
  element.style.transition = `${property} ${duration}ms ${timing}`;
}

export function constrainToRange(value: number, rangeMin: number, rangeMax: number): number {
  return Math.min(Math.max(value, rangeMin), rangeMax);
}
