import { render } from '@testing-library/react';

import DataMocksApi from './data-mocks-api';

describe('DataMocksApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataMocksApi />);
    expect(baseElement).toBeTruthy();
  });
});
