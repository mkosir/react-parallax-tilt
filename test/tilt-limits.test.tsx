import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import Tilt from '../src';

configure({ adapter: new Adapter() });

describe('Tilt - Limits', () => {
  it('Disable y axis - Y angle should bo 0 if only x axis is enabled', () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltAxis="x"
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(60, 0, 100, 0, 0, 0, 'mousemove')).toEqual(true);
  });

  it('Disable x axis - X angle should bo 0 if only y axis is enabled', () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltAxis="y"
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(0, 45, 0, 75, 0, 0, 'mousemove')).toEqual(true);
  });

  it("Constrain tilt angles - angles shouldn't be tilted more then specified constant", () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={300}
        tiltMaxAngleY={300}
        tiltAngleXManual={120}
        tiltAngleYManual={260}
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(90, 90, 30, 30, 0, 0, 'mousemove')).toEqual(true);
  });
});
