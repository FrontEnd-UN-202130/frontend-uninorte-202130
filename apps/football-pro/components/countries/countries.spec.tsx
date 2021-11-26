import { render, screen } from '@testing-library/react';

import Countries from './countries';

describe('Countries', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Countries />);
    const austria = await screen.findByText(/austria/i);
    const argentina = await screen.findByText(/argentina/i);
    expect(austria).toBeInTheDocument();
    expect(argentina).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });
});
