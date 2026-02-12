import { apolloClient } from '../apollo-client';

describe('Apollo Client', () => {
  it('Client зөв үүсгэгдсэн байх ёстой', () => {
    expect(apolloClient).toBeDefined();
    expect(apolloClient.extract()).toBeDefined();
  });
});