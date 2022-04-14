import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TiltTest } from '../../common/TiltTest';
import { OnMoveParams } from '../../react-parallax-tilt/types';

describe('Tilt - Axis', () => {
  it('should disable y axis', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltAxis="x"
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

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

  it('should disable x axis', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltAxis="y"
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

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
