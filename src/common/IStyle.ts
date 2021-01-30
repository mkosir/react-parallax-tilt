import { GlareProps } from '../features/glare/types';
import { TiltProps } from '../features/tilt/types';

import { ClientPosition } from './types';

export interface IStyle {
  update: (
    wrapperElClientPosition: ClientPosition,
    props: any,
    flipVertically: boolean,
    flipHorizontally: boolean,
  ) => void;
}
