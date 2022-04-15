import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from '../../../react-parallax-tilt/types';
import { TiltTest } from '../../../utils/TiltTest';

describe('Tilt', () => {
  it('Tilt events aaaa', () => {
    const onEnter = jest.fn();
    const onMove = jest.fn();
    const onLeave = jest.fn();

    render(<TiltTest onEnter={onEnter} onMove={onMove} onLeave={onLeave} glareEnable={true} />);

    userEvent.hover(screen.getByText('test'));
    userEvent.unhover(screen.getByText('test'));

    expect(onEnter).toHaveBeenCalledWith('mouseenter');
    expect(onMove).toHaveBeenLastCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: -0,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: -0,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'autoreset',
    });
  });
});
