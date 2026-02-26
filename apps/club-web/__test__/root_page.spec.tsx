import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing/react';
import Page from '../app/page';
import { commonMocks } from './common-mocks';

test('renders root page', async () => {
  render(
    <MockedProvider mocks={commonMocks}>
      <Page />
    </MockedProvider>
  );
  await screen.findByText(/Клуб бүртгүүлэх/i);
  await screen.findByText(/Mock Club/i);
  await screen.findByText(/Teacher One/i);
});
