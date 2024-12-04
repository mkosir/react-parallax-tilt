import { screen, render, fireEvent } from '@testing-library/react';

import type { OnEnter } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - onEnter', () => {
  it('should trigger onEnter event when mouse enters an element', () => {
    const onEnter = vi.fn<OnEnter>();

    render(<TiltTest onEnter={onEnter} />);

    fireEvent.mouseEnter(screen.getByText('test'));

    const onEnterParams = onEnter.mock.calls[0][0];
    expect(onEnterParams.event.type).toBe('mouseenter');
  });
});
