import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';

import { OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - onTouchMove', () => {
  it('should call onMove prop when onTouchMove event is triggered', () => {
    const onMove = jest.fn();

    render(<TiltTest onMove={onMove} />);

    fireEvent.touchMove(screen.getByText('test'), { touches: [{ pageX: 100, pageY: 50 }] });

    expect(onMove).toHaveBeenLastCalledWith<[OnMoveParams]>({
      tiltAngleX: 20,
      tiltAngleY: -20,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: -100,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'touchmove',
    });
  });
});
