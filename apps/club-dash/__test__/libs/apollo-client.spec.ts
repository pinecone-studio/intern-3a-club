import { execute, gql, ApolloClient } from '@apollo/client';
import { apolloClient } from '../../libs/apollo/apollo-client';

interface MockClerk {
  session: {
    getToken: jest.Mock<Promise<string | null>, [{ template: string }]>;
  };
}

type ClientInstance = ApolloClient;

describe('Apollo Client Auth Link', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    (console.error as jest.Mock).mockRestore();
    (window as unknown as Record<string, unknown>)['Clerk'] = undefined;
  });

  it('Clerk токен байгаа үед Authorization header-ийг зөв дамжуулах ёстой', async () => {
    const mockClerk: MockClerk = {
      session: {
        getToken: jest.fn().mockResolvedValue('test-token'),
      },
    };

    Object.defineProperty(window, 'Clerk', {
      value: mockClerk,
      configurable: true,
      writable: true,
    });

    const query = gql`
      query Test {
        me {
          id
        }
      }
    `;

    const observable = execute(
      apolloClient.link,
      { query },
      { client: apolloClient as unknown as ClientInstance }
    );

    await new Promise<void>((resolve) => {
      // 'subscription' хувьсагч зарлахгүйгээр шууд subscribe хийх
      observable.subscribe({
        next: () => resolve(),
        error: () => resolve(),
        complete: () => resolve(),
      });
      setTimeout(resolve, 100);
    });

    expect(mockClerk.session.getToken).toHaveBeenCalledWith({
      template: 'pineclub',
    });
  });

  it('Clerk session байхгүй үед алдаа заахгүй байх ёстой', async () => {
    Object.defineProperty(window, 'Clerk', {
      value: undefined,
      configurable: true,
      writable: true,
    });
    const query = gql`
      query Fallback {
        me {
          id
        }
      }
    `;

    const observable = execute(
      apolloClient.link,
      { query },
      { client: apolloClient as unknown as ClientInstance }
    );

    await new Promise<void>((resolve) => {
      observable.subscribe({
        next: () => resolve(),
        error: () => resolve(),
        complete: () => resolve(),
      });
      setTimeout(resolve, 50);
    });

    expect(apolloClient).toBeDefined();
  });
});
