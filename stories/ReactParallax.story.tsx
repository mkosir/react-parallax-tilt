import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/Default';
import KeepFloating from './KeepFloating/KeepFloating';
import ReverseTilt from './ReverseTilt/ReverseTilt';
import TiltScale from './TiltScale/TiltScale';
import ScaleNoTilt from './ScaleNoTilt/ScaleNoTilt';
import TiltDisableAxis from './TiltDisableAxis/TiltDisableAxis';
import FlipVH from './FlipVH/FlipVH';
import ParallaxEffect from './ParallaxEffect/ParallaxEffect';
import ParallaxEffectGlareScale from './ParallaxEffectGlareScale/ParallaxEffectGlareScale';
import ParallaxEffectImg from './ParallaxEffectImg/ParallaxEffectImg';
import TiltImg from './TiltImg/TiltImg';
import TiltMax from './TiltMax/TiltMax';
import GlareEffect from './GlareEffect/GlareEffect';
import GlareEffectNoTilt from './GlareEffectNoTilt/GlareEffectNoTilt';
import GlareEffect360 from './GlareEffect360/GlareEffect360';
import TrackOnWindow from './TrackOnWindow/TrackOnWindow';
import TiltManualInput from './TiltManualInput/TiltManualInput';
import Gyroscope from './Gyroscope/Gyroscope';
import Events from './Events/Events';
import './ReactParallax.story.scss';

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
  .add('Events', () => <Events />);
