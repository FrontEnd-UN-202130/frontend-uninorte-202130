import { render, screen } from '@testing-library/react';

import Players from './players';

describe('Players', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Players teamid={434} />);
    const morales = await screen.findByRole('gridcell', { name: 'L. Morales' });
    expect(morales).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });
});
