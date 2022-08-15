import type { Meta } from '@storybook/react';
import React from 'react';

import { _Default } from './Default/_Default';
import { _EventParams } from './EventParams/_EventParams';
import { _EventTiltAngle } from './EventTiltAngle/_EventTiltAngle';
import { _FlipPage } from './FlipPage/_FlipPage';
import { _FlipVH } from './FlipVH/_FlipVH';
import { _GlareEffect } from './GlareEffect/_GlareEffect';
import { _GlareEffect360 } from './GlareEffect360/_GlareEffect360';
import { _GlareEffectNoTilt } from './GlareEffectNoTilt/_GlareEffectNoTilt';
import { _Gyroscope } from './Gyroscope/_Gyroscope';
import { _InitialTilt } from './InitialTilt/_InitialTilt';
import { _KeepFloating } from './KeepFloating/_KeepFloating';
import { _MultipleTilt } from './MultipleTilt/_MultipleTilt';
import { _MultipleTiltScroll } from './MultipleTiltScroll/_MultipleTiltScroll';
import { _ParallaxEffect } from './ParallaxEffect/_ParallaxEffect';
import { _ParallaxEffectGlareScale } from './ParallaxEffectGlareScale/_ParallaxEffectGlareScale';
import { _ParallaxEffectImg } from './ParallaxEffectImg/_ParallaxEffectImg';
import { _ReverseTilt } from './ReverseTilt/_ReverseTilt';
import { _ScaleNoTilt } from './ScaleNoTilt/_ScaleNoTilt';
import { _TiltDisableAxis } from './TiltDisableAxis/_TiltDisableAxis';
import { _TiltImg } from './TiltImg/_TiltImg';
import { _TiltManualInput } from './TiltManualInput/_TiltManualInput';
import { _TiltScale } from './TiltScale/_TiltScale';
import { _TrackOnWindow } from './TrackOnWindow/_TrackOnWindow';

import './ReactParallaxTilt.scss';

const meta: Meta = {
  title: 'React Parallax Tilt',
};

// eslint-disable-next-line
export default meta;

export const Default = () => <_Default />;

export const KeepFloating = () => <_KeepFloating />;
KeepFloating.storyName = 'Keep floating';

export const ReverseTilt = () => <_ReverseTilt />;
ReverseTilt.storyName = 'Reverse tilt';

export const Scale = () => <_TiltScale />;

export const ScaleNoTilt = () => <_ScaleNoTilt />;
ScaleNoTilt.storyName = 'Scale - No tilt';

export const TiltDisableAxis = () => <_TiltDisableAxis />;
TiltDisableAxis.storyName = 'Disable x/y axis';

export const InitialTilt = () => <_InitialTilt />;
InitialTilt.storyName = 'Initial tilt';

export const FlipVH = () => <_FlipVH />;
FlipVH.storyName = 'Flip vertically/horizontally';

export const FlipPage = () => <_FlipPage />;
FlipPage.storyName = 'Flip page';

export const ParallaxEffect = () => <_ParallaxEffect />;
ParallaxEffect.storyName = 'Parallax effect';

export const ParallaxEffectGlareScale = () => <_ParallaxEffectGlareScale />;
ParallaxEffectGlareScale.storyName = 'Parallax effect - Glare & Scale';

export const ParallaxEffectImg = () => <_ParallaxEffectImg />;
ParallaxEffectImg.storyName = 'Parallax effect image';

export const TiltImg = () => <_TiltImg />;
TiltImg.storyName = 'Tilt image';

export const GlareEffect = () => <_GlareEffect />;
GlareEffect.storyName = 'Glare effect';

export const GlareEffectNoTilt = () => <_GlareEffectNoTilt />;
GlareEffectNoTilt.storyName = 'Glare effect - No tilt';

export const GlareEffect360 = () => <_GlareEffect360 />;
GlareEffect360.storyName = 'Glare effect - 360';

export const TrackOnWindow = () => <_TrackOnWindow />;
TrackOnWindow.storyName = 'Track on window';

export const TiltManualInput = () => <_TiltManualInput />;
TiltManualInput.storyName = 'Tilt manual input';

export const Gyroscope = () => <_Gyroscope />;
Gyroscope.storyName = 'Gyroscope tilt';

export const MultipleTilt = () => <_MultipleTilt />;
MultipleTilt.storyName = 'Multiple tilt';

export const MultipleTiltScroll = () => <_MultipleTiltScroll />;
MultipleTiltScroll.storyName = 'Multiple tilt - Scroll';

export const EventTiltAngle = () => <_EventTiltAngle />;
EventTiltAngle.storyName = 'Event - Tilt angle';

export const EventParams = () => <_EventParams />;
EventParams.storyName = 'Event - Params';
