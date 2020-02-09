import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/_Default';
import KeepFloating from './KeepFloating/_KeepFloating';
import ReverseTilt from './ReverseTilt/_ReverseTilt';
import TiltScale from './TiltScale/_TiltScale';
import ScaleNoTilt from './ScaleNoTilt/_ScaleNoTilt';
import TiltDisableAxis from './TiltDisableAxis/_TiltDisableAxis';
import InitialTilt from './InitialTilt/_InitialTilt';
import FlipVH from './FlipVH/_FlipVH';
import FlipPage from './FlipPage/_FlipPage';
import ParallaxEffect from './ParallaxEffect/_ParallaxEffect';
import ParallaxEffectGlareScale from './ParallaxEffectGlareScale/_ParallaxEffectGlareScale';
import ParallaxEffectImg from './ParallaxEffectImg/_ParallaxEffectImg';
import TiltImg from './TiltImg/_TiltImg';
import TiltMax from './TiltMax/_TiltMax';
import GlareEffect from './GlareEffect/_GlareEffect';
import GlareEffectNoTilt from './GlareEffectNoTilt/_GlareEffectNoTilt';
import GlareEffect360 from './GlareEffect360/_GlareEffect360';
import TrackOnWindow from './TrackOnWindow/_TrackOnWindow';
import TiltManualInput from './TiltManualInput/_TiltManualInput';
import Gyroscope from './Gyroscope/_Gyroscope';
import MultipleTilt from './MultipleTilt/_MultipleTilt';
import MultipleTiltScroll from './MultipleTiltScroll/_MultipleTiltScroll';
import EventTiltAngle from './EventTiltAngle/_EventTiltAngle';
import EventsAll from './EventsAll/_EventsAll';

import './ReactParallax.scss';

const stories = storiesOf('React Parallax Tilt', module);

stories
  .add('Default', () => <Default />)
  .add('Keep floating', () => <KeepFloating />)
  .add('Reverse tilt', () => <ReverseTilt />)
  .add('Scale', () => <TiltScale />)
  .add('Scale - No tilt', () => <ScaleNoTilt />)
  .add('Disable x/y axis', () => <TiltDisableAxis />)
  .add('Initial tilt', () => <InitialTilt />)
  .add('Flip vertically/horizontally', () => <FlipVH />)
  .add('Flip page', () => <FlipPage />)
  .add('Parallax effect', () => <ParallaxEffect />)
  .add('Parallax effect - Glare & Scale', () => <ParallaxEffectGlareScale />)
  .add('Parallax effect image', () => <ParallaxEffectImg />)
  .add('Tilt image', () => <TiltImg />)
  .add('Set max tilt', () => <TiltMax />)
  .add('Glare effect', () => <GlareEffect />)
  .add('Glare effect - No tilt', () => <GlareEffectNoTilt />)
  .add('Glare effect - 360', () => <GlareEffect360 />)
  .add('Track on window', () => <TrackOnWindow />)
  .add('Tilt manual input', () => <TiltManualInput />)
  .add('Gyroscope tilt', () => <Gyroscope />)
  .add('Multiple tilt', () => <MultipleTilt />)
  .add('Multiple tilt - Scroll', () => <MultipleTiltScroll />)
  .add('Event - Tilt angle', () => <EventTiltAngle />)
  .add('Events - All', () => <EventsAll />);
