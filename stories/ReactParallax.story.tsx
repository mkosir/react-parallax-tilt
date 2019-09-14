import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/_StorybookTabs';
import KeepFloating from './KeepFloating/_StorybookTabs';
import ReverseTilt from './ReverseTilt/_StorybookTabs';
import TiltScale from './TiltScale/_StorybookTabs';
import ScaleNoTilt from './ScaleNoTilt/_StorybookTabs';
import TiltDisableAxis from './TiltDisableAxis/_StorybookTabs';
import FlipVH from './FlipVH/_StorybookTabs';
import ParallaxEffect from './ParallaxEffect/_StorybookTabs';
import ParallaxEffectGlareScale from './ParallaxEffectGlareScale/_StorybookTabs';
import ParallaxEffectImg from './ParallaxEffectImg/_StorybookTabs';
import TiltImg from './TiltImg/_StorybookTabs';
import TiltMax from './TiltMax/_StorybookTabs';
import GlareEffect from './GlareEffect/_StorybookTabs';
import GlareEffectNoTilt from './GlareEffectNoTilt/_StorybookTabs';
import GlareEffect360 from './GlareEffect360/_StorybookTabs';
import TrackOnWindow from './TrackOnWindow/_StorybookTabs';
import TiltManualInput from './TiltManualInput/_StorybookTabs';
import Gyroscope from './Gyroscope/_StorybookTabs';
import MultipleTilt from './MultipleTilt/_StorybookTabs';
import Events from './Events/_StorybookTabs';
import './ReactParallax.scss';

const stories = storiesOf('React Parallax Tilt', module);

stories
  .add('Default', () => <Default />)
  .add('Keep floating', () => <KeepFloating />)
  .add('Reverse tilt', () => <ReverseTilt />)
  .add('Scale', () => <TiltScale />)
  .add('Scale - no tilt', () => <ScaleNoTilt />)
  .add('Disable x/y axis', () => <TiltDisableAxis />)
  .add('Flip vertically/horizontally', () => <FlipVH />)
  .add('Parallax effect', () => <ParallaxEffect />)
  .add('Parallax effect - glare&scale', () => <ParallaxEffectGlareScale />)
  .add('Parallax effect image', () => <ParallaxEffectImg />)
  .add('Tilt image', () => <TiltImg />)
  .add('Set max tilt', () => <TiltMax />)
  .add('Glare effect', () => <GlareEffect />)
  .add('Glare effect - no tilt', () => <GlareEffectNoTilt />)
  .add('Glare effect - 360', () => <GlareEffect360 />)
  .add('Track on window', () => <TrackOnWindow />)
  .add('Tilt manual input', () => <TiltManualInput />)
  .add('Gyroscope tilt', () => <Gyroscope />)
  .add('Multiple tilt', () => <MultipleTilt />)
  .add('Events', () => <Events />);
