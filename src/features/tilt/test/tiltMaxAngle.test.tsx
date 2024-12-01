import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import type { OnMove, OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Max Angle', () => {
  it('should constrain tilt angles to default constant when hover on element', async () => {
    const onMove = vi.fn<OnMove>();

    render(
      <TiltTest
        tiltMaxAngleX={300}
        tiltMaxAngleY={300}
        tiltAngleXManual={120}
        tiltAngleYManual={260}
        onMove={onMove}
      />,
    );

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 90,
      tiltAngleY: 90,
      tiltAngleXPercentage: 30,
      tiltAngleYPercentage: 30,
      glareAngle: 0,
      glareOpacity: 0,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      event: expect.objectContaining({
        type: 'initial',
      }),
    });
  });
});
