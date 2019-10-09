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
