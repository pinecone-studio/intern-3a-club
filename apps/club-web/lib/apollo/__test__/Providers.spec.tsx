import React from 'react';
import { render } from '@testing-library/react';
import { Providers } from '../Providers';

describe('Providers', () => {
    it('should render children while wrapping with ApolloProvider', () => {
        const { getByText } = render(
            <Providers>
                <div>Test Child</div>
            </Providers>
        );
        expect(getByText('Test Child')).toBeTruthy();
    });
});
