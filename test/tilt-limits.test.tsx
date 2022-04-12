import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Tilt from '../src';
import { OnMoveParams } from '../src/react-parallax-tilt/types';

configure({ adapter: new Adapter() });

describe('Tilt - Limits', () => {
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

  it("Constrain tilt angles - angles shouldn't be tilted more then specified constant", () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt tiltMaxAngleX={300} tiltMaxAngleY={300} tiltAngleXManual={120} tiltAngleYManual={260} onMove={onMove} />,
    );

    wrapper.simulate('mousemove');

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 90,
      tiltAngleY: 90,
      tiltAngleXPercentage: 30,
      tiltAngleYPercentage: 30,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });
});
