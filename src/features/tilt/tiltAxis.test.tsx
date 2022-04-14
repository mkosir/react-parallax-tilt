import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Tilt from '../..';
import { OnMoveParams } from '../../react-parallax-tilt/types';

configure({ adapter: new Adapter() });

describe('Tilt - Axis', () => {
  it('Disable y axis - Y angle should bo 0 if only x axis is enabled', () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltAxis="x"
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={onMove}
      />,
    );

    wrapper.simulate('mousemove');

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 0,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 0,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });

  it('Disable x axis - X angle should bo 0 if only y axis is enabled', () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltAxis="y"
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={onMove}
      />,
    );

    wrapper.simulate('mousemove');

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: 45,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });
});
