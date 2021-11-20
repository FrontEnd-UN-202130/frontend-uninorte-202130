import { render } from '@testing-library/react';

import Indexcarousel from './indexcarousel';

describe('Indexcarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Indexcarousel />);
    expect(baseElement).toBeTruthy();
  });
});
