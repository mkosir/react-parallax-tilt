import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from '../../../react-parallax-tilt/types';
import { TiltTest } from '../../../utils/TiltTest';

describe('sss', () => {
  it('Tilt events aaaa', () => {
    jest.useFakeTimers();

    const onEnter = jest.fn();
    const onMove = jest.fn();
    const onLeave = jest.fn();

    render(<TiltTest onEnter={onEnter} onMove={onMove} onLeave={onLeave} glareEnable={true} />);

    userEvent.hover(screen.getByText('test'));
    // wrapper.simulate('mouseenter');
    jest.runAllTimers();
    userEvent.unhover(screen.getByText('test'));
    // wrapper.simulate('mousemove');
    // wrapper.simulate('mouseleave');

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
  });
});
