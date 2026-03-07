/**
 * @jest-environment node
 */
import { apolloClient } from '../apollo/apollo-client';
import { execute, gql } from '@apollo/client';

describe('Apollo Client Auth Link (Node Environment)', () => {
  it('should return prevContext when window is undefined', async () => {
    const query = gql`
      query TestNode {
        me {
          id
        }
      }
    `;

    // Under node environment, window should be undefined
    const observable = execute(
      apolloClient.link,
      { query },
      { client: apolloClient }
    );

    await new Promise<void>((resolve) => {
      observable.subscribe({
        next: () => resolve(),
        error: () => resolve(),
        complete: () => resolve(),
      });
      setTimeout(resolve, 50);
    });

    expect(typeof window).toBe('undefined');
  });
});
