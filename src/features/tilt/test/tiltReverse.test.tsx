import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Reverse', () => {
  it('should calculate reverse tilt when hover on element', async () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltReverse={true}
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={onMove}
      />,
    );

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: -45,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: -75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'initial',
    });
  });
});
