import { screen, render, fireEvent } from '@testing-library/react';

import type { OnEnter, OnLeave, OnMove, OnMoveParams } from '@/index';
import { TiltTest } from '@/utils/TiltTest';

describe('Tilt - Reset', () => {
  it('should not reset tilt when mouse leave an element', () => {
    const onEnter = vi.fn<OnEnter>();
    const onMove = vi.fn<OnMove>();
    const onLeave = vi.fn<OnLeave>();

    render(<TiltTest onEnter={onEnter} onMove={onMove} onLeave={onLeave} reset={false} />);

    fireEvent.mouseEnter(screen.getByText('test'));
    const onEnterParams = onEnter.mock.calls[0][0];
    expect(onEnterParams.event.type).toBe('mouseenter');

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: -0,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: -0,
      glareAngle: 0,
      glareOpacity: 0,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      event: expect.objectContaining({
        type: 'initial',
      }),
    });

    fireEvent.mouseLeave(screen.getByText('test'));
    const onLeaveParams = onLeave.mock.calls[0][0];
    expect(onLeaveParams.event.type).toBe('mouseleave');
  });
});
