import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TiltTest } from '../../common/TiltTest';
import { OnMoveParams } from '../../react-parallax-tilt/types';

describe('Tilt - Max Angle', () => {
  it('should constrain tilt angles to default constant', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={300}
        tiltMaxAngleY={300}
        tiltAngleXManual={120}
        tiltAngleYManual={260}
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

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
