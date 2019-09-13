import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/_SBTabs';
import KeepFloating from './KeepFloating/_SBTabs';
import ReverseTilt from './ReverseTilt/_SBTabs';
import TiltScale from './TiltScale/_SBTabs';
import ScaleNoTilt from './ScaleNoTilt/_SBTabs';
import TiltDisableAxis from './TiltDisableAxis/_SBTabs';
import FlipVH from './FlipVH/_SBTabs';
import ParallaxEffect from './ParallaxEffect/_SBTabs';
import ParallaxEffectGlareScale from './ParallaxEffectGlareScale/_SBTabs';
import ParallaxEffectImg from './ParallaxEffectImg/_SBTabs';
import TiltImg from './TiltImg/_SBTabs';
import TiltMax from './TiltMax/_SBTabs';
import GlareEffect from './GlareEffect/_SBTabs';
import GlareEffectNoTilt from './GlareEffectNoTilt/_SBTabs';
import GlareEffect360 from './GlareEffect360/_SBTabs';
import TrackOnWindow from './TrackOnWindow/_SBTabs';
import TiltManualInput from './TiltManualInput/_SBTabs';
import Gyroscope from './Gyroscope/_SBTabs';
import MultipleTilt from './MultipleTilt/_SBTabs';
import Events from './Events/_SBTabs';
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
