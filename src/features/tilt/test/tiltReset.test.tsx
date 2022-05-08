import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Reset', () => {
  it('should not reset tilt', () => {
    const onEnter = jest.fn();
    const onMove = jest.fn();
    const onLeave = jest.fn();

    render(<TiltTest onEnter={onEnter} onMove={onMove} onLeave={onLeave} reset={false} />);

    userEvent.hover(screen.getByText('test'));
    userEvent.unhover(screen.getByText('test'));

    expect(onEnter).toBeCalledWith('mouseenter');
    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: -0,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: -0,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'initial',
    });
    expect(onLeave).toBeCalledWith('mouseleave');
  });
});
