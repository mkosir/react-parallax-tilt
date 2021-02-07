import type { Meta } from '@storybook/react';
import React from 'react';

import DefaultC from './Default/_Default';
import EventsAllC from './EventsAll/_EventsAll';
import EventTiltAngleC from './EventTiltAngle/_EventTiltAngle';
import FlipPageC from './FlipPage/_FlipPage';
import FlipVHC from './FlipVH/_FlipVH';
import GlareEffectC from './GlareEffect/_GlareEffect';
import GlareEffect360C from './GlareEffect360/_GlareEffect360';
import GlareEffectNoTiltC from './GlareEffectNoTilt/_GlareEffectNoTilt';
import GyroscopeC from './Gyroscope/_Gyroscope';
import InitialTiltC from './InitialTilt/_InitialTilt';
import KeepFloatingC from './KeepFloating/_KeepFloating';
import MultipleTiltC from './MultipleTilt/_MultipleTilt';
import MultipleTiltScrollC from './MultipleTiltScroll/_MultipleTiltScroll';
import ParallaxEffectC from './ParallaxEffect/_ParallaxEffect';
import ParallaxEffectGlareScaleC from './ParallaxEffectGlareScale/_ParallaxEffectGlareScale';
import ParallaxEffectImgC from './ParallaxEffectImg/_ParallaxEffectImg';
import ReverseTiltC from './ReverseTilt/_ReverseTilt';
import ScaleNoTiltC from './ScaleNoTilt/_ScaleNoTilt';
import TiltDisableAxisC from './TiltDisableAxis/_TiltDisableAxis';
import TiltImgC from './TiltImg/_TiltImg';
import TiltManualInputC from './TiltManualInput/_TiltManualInput';
import TiltScaleC from './TiltScale/_TiltScale';
import TrackOnWindowC from './TrackOnWindow/_TrackOnWindow';

import './ReactParallaxTilt.scss';

const meta: Meta = {
  title: 'React Parallax Tilt',
};

export default meta;

export const Default = () => <DefaultC />;

export const KeepFloating = () => <KeepFloatingC />;
KeepFloating.storyName = 'Keep floating';

export const ReverseTilt = () => <ReverseTiltC />;
ReverseTilt.storyName = 'Reverse tilt';

export const Scale = () => <TiltScaleC />;

export const ScaleNoTilt = () => <ScaleNoTiltC />;
ScaleNoTilt.storyName = 'Scale - No tilt';

export const TiltDisableAxis = () => <TiltDisableAxisC />;
TiltDisableAxis.storyName = 'Disable x/y axis';

export const InitialTilt = () => <InitialTiltC />;
InitialTilt.storyName = 'Initial tilt';

export const FlipVH = () => <FlipVHC />;
FlipVH.storyName = 'Flip vertically/horizontally';

export const FlipPage = () => <FlipPageC />;
FlipPage.storyName = 'Flip page';

export const ParallaxEffect = () => <ParallaxEffectC />;
ParallaxEffect.storyName = 'Parallax effect';

export const ParallaxEffectGlareScale = () => <ParallaxEffectGlareScaleC />;
ParallaxEffectGlareScale.storyName = 'Parallax effect - Glare & Scale';

export const ParallaxEffectImg = () => <ParallaxEffectImgC />;
ParallaxEffectImg.storyName = 'Parallax effect image';

export const TiltImg = () => <TiltImgC />;
TiltImg.storyName = 'Tilt image';

export const GlareEffect = () => <GlareEffectC />;
GlareEffect.storyName = 'Glare effect';

export const GlareEffectNoTilt = () => <GlareEffectNoTiltC />;
GlareEffectNoTilt.storyName = 'Glare effect - No tilt';

export const GlareEffect360 = () => <GlareEffect360C />;
GlareEffect360.storyName = 'Glare effect - 360';

export const TrackOnWindow = () => <TrackOnWindowC />;
TrackOnWindow.storyName = 'Track on window';

export const TiltManualInput = () => <TiltManualInputC />;
TiltManualInput.storyName = 'Tilt manual input';

export const Gyroscope = () => <GyroscopeC />;
Gyroscope.storyName = 'Gyroscope tilt';

export const MultipleTilt = () => <MultipleTiltC />;
MultipleTilt.storyName = 'Multiple tilt';

export const MultipleTiltScroll = () => <MultipleTiltScrollC />;
MultipleTiltScroll.storyName = 'Multiple tilt - Scroll';

export const EventTiltAngle = () => <EventTiltAngleC />;
EventTiltAngle.storyName = 'Event - Tilt angle';

export const EventsAll = () => <EventsAllC />;
EventsAll.storyName = 'Event - All';
