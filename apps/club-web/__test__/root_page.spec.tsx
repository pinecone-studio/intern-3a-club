import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing/react';
import Page from '../app/page';

test('renders root page', () => {
  render(
    <MockedProvider>
      <Page />
    </MockedProvider>
  );
});
