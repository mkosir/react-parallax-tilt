import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { OnMove, OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Axis', () => {
  it('should disable y axis when only x tilt axis prop is enabled', async () => {
    const onMove = vi.fn<OnMove>();

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

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 0,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 0,
      glareAngle: 0,
      glareOpacity: 0,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      event: expect.objectContaining({
        type: 'initial',
      }),
    });
  });

  it('should disable x axis when only y tilt axis prop is enabled', async () => {
    const onMove = vi.fn<OnMove>();

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

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: 45,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      event: expect.objectContaining({
        type: 'initial',
      }),
    });
  });
});
