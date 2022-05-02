import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TiltTest } from 'utils/TiltTest';

describe('Tilt - onLeave', () => {
  it('should trigger onLeave event', () => {
    const onLeave = jest.fn();

    render(<TiltTest onLeave={onLeave} />);

    userEvent.unhover(screen.getByText('test'));

    expect(onLeave).toBeCalledWith('mouseleave');
  });
});
