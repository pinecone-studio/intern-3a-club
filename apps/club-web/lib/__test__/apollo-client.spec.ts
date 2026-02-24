import { apolloClient } from '../apollo-client';

describe('Apollo Client (lib/root)', () => {
    it('should be defined', () => {
        expect(apolloClient).toBeDefined();
        expect(apolloClient.extract()).toBeDefined();
    });
});
