import { screen, render, fireEvent } from '@testing-library/react';

import type { OnLeave } from '@/index';
import { TiltTest } from '@/utils/TiltTest';

describe('Tilt - onLeave', () => {
  it('should trigger onLeave event when mouse leaves an element', () => {
    const onLeave = vi.fn<OnLeave>();

    render(<TiltTest onLeave={onLeave} />);

    fireEvent.mouseLeave(screen.getByText('test'));

    const onLeaveParams = onLeave.mock.calls[0][0];
    expect(onLeaveParams.event.type).toBe('mouseleave');
  });
});
