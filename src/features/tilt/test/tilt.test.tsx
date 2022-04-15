import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Tilt from '../../..';
import { OnMoveParams } from '../../../react-parallax-tilt/types';
import { ElementSizePosition } from '../../../utils/types';

configure({ adapter: new Adapter() });

describe("Tilt - (manual input) - Callback 'onMove' should return correct calculated values for defined manual input angles", () => {
  let mockWrapperElSizePosition: ElementSizePosition;
  beforeEach(() => {
    mockWrapperElSizePosition = {
      width: 100,
      height: 100,
      top: 0,
      left: 0,
    };
  });

  it('Tilt events', () => {
    jest.useFakeTimers();

    const onEnter = jest.fn();
    const onMove = jest.fn();
    const onLeave = jest.fn();

    const wrapper = mount<Tilt>(<Tilt onEnter={onEnter} onMove={onMove} onLeave={onLeave} glareEnable={true} />);
    wrapper.simulate('mouseenter');
    jest.runAllTimers();
    wrapper.simulate('mousemove');
    wrapper.simulate('mouseleave');

    expect(onEnter).toBeCalledWith('mouseenter');
    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: NaN,
      tiltAngleY: NaN,
      tiltAngleXPercentage: NaN,
      tiltAngleYPercentage: NaN,
      glareAngle: 0,
      glareOpacity: NaN,
      eventType: 'mousemove',
    });
    expect(onLeave).toBeCalledWith('mouseleave');
  });

  it('Tilt disabled', () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(<Tilt tiltEnable={false} tiltMaxAngleX={60} tiltMaxAngleY={60} onMove={onMove} />);

    wrapper.instance()['wrapperEl'].size = mockWrapperElSizePosition;
    wrapper.simulate('touchmove', { touches: [{ pageX: 100, pageY: 50 }] });

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: 0,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: 0,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'touchmove',
    });
  });
});
