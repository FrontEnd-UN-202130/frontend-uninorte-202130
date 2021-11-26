import { render, screen } from '@testing-library/react';

import Players from './players';

describe('Players', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Players teamid={434} />);
    const morales = await screen.findByRole('gridcell', { name: 'L. Morales' });
    expect(morales).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it('check images players', async () => {
    const { baseElement } = render(<Players teamid={434} />);
    const images = await screen.findAllByRole('img');
    expect(images).not.toHaveLength(0);
  });
});
