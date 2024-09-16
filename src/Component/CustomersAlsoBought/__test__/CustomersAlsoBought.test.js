import React from 'react';

import CustomersAlsoBought from '../CustomersAlsoBought';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Items render to the screen', () => {
  const component = render(<CustomersAlsoBought />);
  const header = (<h1>hello</h1>);
  expect(component.contains(header)).toEqual(true);
});
