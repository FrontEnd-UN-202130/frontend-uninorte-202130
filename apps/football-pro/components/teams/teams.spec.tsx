import { render, screen } from '@testing-library/react';

import Teams from './teams';

describe('Teams', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Teams country="Argentina" />);
    const teamTitle = await screen.findByText('Teams of Argentina');
    expect(teamTitle).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });
});
