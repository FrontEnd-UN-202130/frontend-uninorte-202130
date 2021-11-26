import { render, screen } from '@testing-library/react';

import Indexcarousel from './indexcarousel';

describe('Indexcarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Indexcarousel />);
    expect(baseElement).toBeTruthy();
  });

  it('should check number of images', async () => {
    const { baseElement } = render(<Indexcarousel />);
    const numberImages = await screen.findAllByRole('img');
    expect(numberImages).toHaveLength(3);
  });
});
