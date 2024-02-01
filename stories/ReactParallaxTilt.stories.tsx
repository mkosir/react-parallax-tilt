import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { _Default } from './Default/_Default';
import { _EventParams } from './EventParams/_EventParams';
import { _EventTiltAngle } from './EventTiltAngle/_EventTiltAngle';
import { _FlipPage } from './FlipPage/_FlipPage';
import { _FlipVH } from './FlipVH/_FlipVH';
import { _GlareEffect } from './GlareEffect/_GlareEffect';
import { _GlareEffect360 } from './GlareEffect360/_GlareEffect360';
import { _GlareEffectNoTilt } from './GlareEffectNoTilt/_GlareEffectNoTilt';
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

import './ReactParallaxTilt.css';

export default {
  title: 'React Parallax Tilt',
  decorators: [
    (Story) => (
      <div className="root-story">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export const Default: StoryObj = {
  render: () => <_Default />,
};

export const KeepFloating: StoryObj = {
  render: () => <_KeepFloating />,
  name: 'Keep floating',
};

export const ReverseTilt: StoryObj = {
  render: () => <_ReverseTilt />,
  name: 'Reverse tilt',
};

export const Scale: StoryObj = {
  render: () => <_TiltScale />,
};

export const ScaleNoTilt: StoryObj = {
  render: () => <_ScaleNoTilt />,
  name: 'Scale - No tilt',
};

export const TiltDisableAxis: StoryObj = {
  render: () => <_TiltDisableAxis />,
  name: 'Disable x/y axis',
};

export const InitialTilt: StoryObj = {
  render: () => <_InitialTilt />,
  name: 'Initial tilt',
};

export const FlipVH: StoryObj = {
  render: () => <_FlipVH />,
  name: 'Flip vertically/horizontally',
};

export const FlipPage: StoryObj = {
  render: () => <_FlipPage />,
  name: 'Flip page',
};

export const ParallaxEffect: StoryObj = {
  render: () => <_ParallaxEffect />,
  name: 'Parallax effect',
};

export const ParallaxEffectGlareScale: StoryObj = {
  render: () => <_ParallaxEffectGlareScale />,
  name: 'Parallax effect - Glare & Scale',
};

export const ParallaxEffectImg: StoryObj = {
  render: () => <_ParallaxEffectImg />,
  name: 'Parallax effect image',
};

export const TiltImg: StoryObj = {
  render: () => <_TiltImg />,
  name: 'Tilt image',
};

export const GlareEffect: StoryObj = {
  render: () => <_GlareEffect />,
  name: 'Glare effect',
};

export const GlareEffectNoTilt: StoryObj = {
  render: () => <_GlareEffectNoTilt />,
  name: 'Glare effect - No tilt',
};

export const GlareEffect360: StoryObj = {
  render: () => <_GlareEffect360 />,
  name: 'Glare effect - 360',
};

export const TrackOnWindow: StoryObj = {
  render: () => <_TrackOnWindow />,
  name: 'Track on window',
};

export const TiltManualInput: StoryObj = {
  render: () => <_TiltManualInput />,
  name: 'Tilt manual input',
};

export const MultipleTilt: StoryObj = {
  render: () => <_MultipleTilt />,
  name: 'Multiple tilt',
};

export const MultipleTiltScroll: StoryObj = {
  render: () => <_MultipleTiltScroll />,
  name: 'Multiple tilt - Scroll',
};

export const EventTiltAngle: StoryObj = {
  render: () => <_EventTiltAngle />,
  name: 'Event - Tilt angle',
};

export const EventParams: StoryObj = {
  render: () => <_EventParams />,
  name: 'Event - Params',
};
