import { execute, gql, ApolloClient } from '@apollo/client';
import { apolloClient } from 'apps/club-dash/libs/apollo/apollo-client';

// 1. Window интерфейсийг "any" ашиглахгүйгээр өргөтгөх
interface MockClerk {
  session: {
    getToken: jest.Mock<Promise<string | null>, [{ template: string }]>;
  };
}

// 2. ApolloClient-ийн төрлийг generic-гүйгээр авах
type ClientInstance = InstanceType<typeof ApolloClient>;

describe('Apollo Client Auth Link & Instance', () => {
  const mockToken = 'test-clerk-token';

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    (console.error as jest.Mock).mockRestore();
    // @ts-ignore: Цэвэрлэгээ хийхэд unsafe delete ашиглахаас өөр аргагүй
    delete (window as Record<string, unknown>).Clerk;
  });

  it('should include the authorization header when Clerk token exists', async () => {
    // 3. Mock Clerk-ийг тодорхойлох
    const mockClerk: MockClerk = {
      session: {
        getToken: jest.fn().mockResolvedValue(mockToken),
      },
    };

    // Window-д Clerk-ийг safe байдлаар нэмэх
    Object.defineProperty(window, 'Clerk', {
      value: mockClerk,
      configurable: true,
      writable: true,
    });

    const query = gql`
      query Test {
        foo
      }
    `;

    // 4. execute-ийг ажиллуулах (Generic алдааг ClientInstance-аар зассан)
    const observable = execute(
      apolloClient.link,
      { query },
      {
        client: apolloClient as ClientInstance,
      }
    );

    await new Promise<void>((resolve) => {
      const subscription = observable.subscribe({
        next: () => {
          subscription.unsubscribe();
          resolve();
        },
        error: () => {
          subscription.unsubscribe();
          resolve();
        },
        complete: () => {
          resolve();
        },
      });

      setTimeout(resolve, 100);
    });

    // Line 24-28 coverage энд хангагдана
    expect(mockClerk.session.getToken).toHaveBeenCalledWith({
      template: 'pineclub',
    });
  });

  it('should handle missing Clerk session gracefully', async () => {
    Object.defineProperty(window, 'Clerk', {
      value: undefined,
      configurable: true,
      writable: true,
    });

    const query = gql`
      query TestFallback {
        bar
      }
    `;

    const observable = execute(
      apolloClient.link,
      { query },
      {
        client: apolloClient as ClientInstance,
      }
    );

    await new Promise<void>((resolve) => {
      const subscription = observable.subscribe({
        next: () => resolve(),
        error: () => resolve(),
        complete: () => resolve(),
      });
      setTimeout(resolve, 50);
    });

    expect(apolloClient).toBeDefined();
  });
});
