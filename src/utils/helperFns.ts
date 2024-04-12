export const setTransition = <TElement extends HTMLElement>(
  element: TElement,
  property: 'all' | 'opacity',
  duration: number,
  timing: string,
): void => {
  element.style.transition = `${property} ${duration}ms ${timing}`;
};

export const constrainToRange = (value: number, rangeMin: number, rangeMax: number): number =>
  Math.min(Math.max(value, rangeMin), rangeMax);
