import { Props } from '../react-parallax-tilt/ReactParallaxTilt';
import { ClientPosition } from './types';

export interface IStyle {
  update: (
    wrapperElClientPosition: ClientPosition,
    props: Props,
    flipVertically: boolean,
    flipHorizontally: boolean,
  ) => void;
}
