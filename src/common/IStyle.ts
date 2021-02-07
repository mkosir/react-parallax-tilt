import { ClientPosition } from './types';

export interface IStyle {
  update: (
    wrapperElClientPosition: ClientPosition,
    props: any,
    flipVertically: boolean,
    flipHorizontally: boolean,
  ) => void;
}
