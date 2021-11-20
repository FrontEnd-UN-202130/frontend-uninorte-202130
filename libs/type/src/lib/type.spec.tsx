import { render } from '@testing-library/react';

import Type from './type';

describe('Type', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Type />);
    expect(baseElement).toBeTruthy();
  });
});
