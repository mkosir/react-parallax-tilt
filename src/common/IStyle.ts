import { Props } from '../ReactParallaxTilt';
import { ClientPosition } from './types';

export interface IStyle {
  update: (
    wrapperElClientPosition: ClientPosition,
    props: Props,
    flipVertically: boolean,
    flipHorizontally: boolean,
  ) => void;
}
