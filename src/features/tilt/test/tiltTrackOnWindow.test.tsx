import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Track On Window', () => {
  it('should calculate tilt when hover on window', async () => {
    const onMove = jest.fn();

    render(<TiltTest trackOnWindow={true} tiltAngleXManual={20} tiltAngleYManual={15} onMove={onMove} />);

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 20,
      tiltAngleY: 15,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'initial',
    });
  });
});
