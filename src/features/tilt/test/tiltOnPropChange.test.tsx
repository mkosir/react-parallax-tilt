import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { OnMove, OnMoveParams } from '@/index';
import { TiltTest } from '@/utils/TiltTest';

describe('Tilt - Prop change', () => {
  it('should re-calculate tilt when manual tilt angle y prop changes', async () => {
    const onMove = vi.fn<OnMove>();

    const { rerender } = render(
      <TiltTest tiltMaxAngleX={60} tiltMaxAngleY={60} tiltAngleXManual={60} tiltAngleYManual={45} onMove={onMove} />,
    );

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 45,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      event: expect.objectContaining({
        type: 'initial',
      }),
    });

    const onMoveRerender = vi.fn();

    rerender(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={30}
        onMove={onMoveRerender}
      />,
    );

    expect(onMoveRerender).toHaveBeenCalledExactlyOnceWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 30,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 50,
      glareAngle: 0,
      glareOpacity: 0,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      event: expect.objectContaining({
        type: 'propChange',
      }),
    });
  });
});
