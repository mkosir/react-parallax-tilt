import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';

import { TiltTest } from 'utils/TiltTest';

describe('Tilt - onEnter', () => {
  it('should trigger onEnter event when mouse enters an element', () => {
    const onEnter = jest.fn();

    render(<TiltTest onEnter={onEnter} />);

    fireEvent.mouseEnter(screen.getByText('test'));

    expect(onEnter).toHaveBeenCalledWith('mouseenter');
  });
});
