import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';

import { TiltTest } from 'utils/TiltTest';

describe('Tilt - onLeave', () => {
  it('should trigger onLeave event when mouse leaves an element', () => {
    const onLeave = jest.fn();

    render(<TiltTest onLeave={onLeave} />);

    fireEvent.mouseLeave(screen.getByText('test'));

    expect(onLeave).toHaveBeenCalledWith('mouseleave');
  });
});
