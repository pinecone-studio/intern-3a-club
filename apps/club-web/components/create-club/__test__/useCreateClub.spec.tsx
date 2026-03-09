import { renderHook, act } from '@testing-library/react';
import { useCreateClub } from '../useCreateClub';
import { MockedProvider } from '@apollo/client/testing/react';
import React from 'react';

jest.mock('../../../graphql/mutations', () => ({
    CREATE_CLUB_WITH_SCHEDULE: 'CREATE_CLUB_WITH_SCHEDULE',
}));

describe('useCreateClub', () => {
    it('handles field change without error (line 31)', () => {
        const { result } = renderHook(() => useCreateClub(), {
            wrapper: ({ children }) => <MockedProvider>{children}</MockedProvider>,
        });

        act(() => {
            // Changing field that has NO error
            result.current.handleFormChange('name', 'New Name');
        });

        expect(result.current.formData.name).toBe('New Name');
    });

    it('handles field change with error (to clear it)', () => {
        const { result } = renderHook(() => useCreateClub(), {
            wrapper: ({ children }) => <MockedProvider>{children}</MockedProvider>,
        });

        // Manually trigger handleSubmit to get error if possible or just test logic
        // But handleFormChange logic only clears IF errors[name] is truthy.

        // We can simulate handleSubmit error by having empty name
        act(() => {
            result.current.handleSubmit();
        });

        expect(result.current.errors.name).toBeTruthy();

        act(() => {
            // Now changing field that HAS error
            result.current.handleFormChange('name', 'Fixed Name');
        });

        expect(result.current.errors.name).toBeUndefined();
    });
});
