import { screen, render, fireEvent } from '@testing-library/react';

import type { OnMove, OnMoveParams } from '@/index';
import { TiltTest } from '@/utils/TiltTest';

describe('Tilt - Disable', () => {
  it('should not calculate tilt when disabled', () => {
    const onMove = vi.fn<OnMove>();

    render(<TiltTest tiltEnable={false} onMove={onMove} />);

    fireEvent.touchMove(screen.getByText('test'), { touches: [{ pageX: 100, pageY: 50 }] });

    expect(onMove).toHaveBeenLastCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: 0,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: 0,
      glareAngle: 0,
      glareOpacity: 0,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      event: expect.objectContaining({
        type: 'touchmove',
      }),
    });
  });
});
