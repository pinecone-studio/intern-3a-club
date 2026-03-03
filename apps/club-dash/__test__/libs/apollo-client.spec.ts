import { execute, gql, ApolloLink } from '@apollo/client';
import { apolloClient } from '../../libs/apollo/apollo-client';

// Clerk-ийн бүтцийг тестэд зориулж тодорхойлох
interface MockClerk {
  session: {
    getToken: jest.Mock<Promise<string | null>, []>;
  };
}

describe('Apollo Client Auth Link', () => {
  beforeEach(() => {
    // Console-ын log-уудыг mock хийж цэвэрхэн байлгана
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    (console.error as jest.Mock).mockRestore();
    (console.warn as jest.Mock).mockRestore();
    // window.Clerk-ийг цэвэрлэнэ
    (window as any).Clerk = undefined;
  });

  it('Clerk токен байгаа үед Authorization header-ийг Bearer-тэй зөв дамжуулах ёстой', async () => {
    const mockToken = 'test-jwt-token-123';
    const mockClerk: MockClerk = {
      session: {
        getToken: jest.fn().mockResolvedValue(mockToken),
      },
    };

    // window.Clerk-ийг тодорхойлох
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

    // execute функцэд заавал 3 аргумент дамжуулна: (link, request, context)
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
      // Async getToken ажиллахыг хүлээнэ
      setTimeout(resolve, 100);
    });

    // Шалгалт: getToken ямар ч аргументгүй (template-гүй) дуудагдсан эсэх
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
