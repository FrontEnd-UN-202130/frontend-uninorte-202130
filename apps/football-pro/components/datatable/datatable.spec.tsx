import { render } from '@testing-library/react';

import Datatable from './datatable';

describe('Datatable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Datatable columns={undefined} data={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});
