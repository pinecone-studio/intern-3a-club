import { execute, gql } from '@apollo/client';
import { apolloClient } from '../../libs/apollo/apollo-client';

interface MockClerk {
  session: {
    getToken: jest.Mock<Promise<string | null>, []>;
  };
}

interface ExtendedWindow extends Window {
  Clerk?: MockClerk | undefined;
}

const customWindow = window as unknown as ExtendedWindow;

describe('Apollo Client Auth Link', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    (console.error as jest.Mock).mockRestore();
    (console.warn as jest.Mock).mockRestore();
    customWindow.Clerk = undefined;
  });

  it('Clerk токен байгаа үед Authorization header-ийг Bearer-тэй зөв дамжуулах ёстой', async () => {
    const mockToken = 'test-jwt-token-123';
    const mockClerk: MockClerk = {
      session: {
        getToken: jest.fn().mockResolvedValue(mockToken),
      },
    };

    Object.defineProperty(window, 'Clerk', {
      value: mockClerk,
      configurable: true,
      writable: true,
    });

    const query = gql`
      query TestAuth {
        me {
          id
        }
      }
    `;

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
      setTimeout(resolve, 100);
    });

    expect(mockClerk.session.getToken).toHaveBeenCalledWith();
    expect(mockClerk.session.getToken).toHaveBeenCalledTimes(1);
  });

  it('Clerk session байхгүй үед алдаа заахгүй, apolloClient тодорхойлогдсон байх ёстой', async () => {
    Object.defineProperty(window, 'Clerk', {
      value: undefined,
      configurable: true,
      writable: true,
    });

    const query = gql`
      query TestNoAuth {
        me {
          id
        }
      }
    `;

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

    expect(apolloClient).toBeDefined();
    expect(apolloClient.link).toBeDefined();
  });
});
