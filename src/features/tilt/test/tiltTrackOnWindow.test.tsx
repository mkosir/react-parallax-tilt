import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from '../../../react-parallax-tilt/types';
import { TiltTest } from '../../../utils/TiltTest';

describe('Tilt - Track On Window', () => {
  it('should calculate tilt tracked on window', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        trackOnWindow={true}
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
      tiltAngleY: 45,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });
});
