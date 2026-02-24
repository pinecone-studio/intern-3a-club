/* eslint-disable @typescript-eslint/no-explicit-any */

import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { updateClub } from 'graphql/resolvers/mutations';

jest.mock('db/drizzle', () => ({
  DB: {
    update: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    returning: jest.fn(),
  },
}));

describe('updateClub mutation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01'));
  });

  it('should update a club and return the updated data', async () => {
    const mockInput = {
      id: 'club-123',
      name: 'Updated Name',
    };

    const mockResult = { ...mockInput, updatedAt: new Date().toISOString() };

    // Method chaining-ийг bypass хийхэд 'as any' ашиглах нь хамгийн найдвартай
    (
      DB.update(clubs)
        .set({} as any)
        .where({} as any).returning as jest.Mock
    ).mockResolvedValue([mockResult]);

    const result = await updateClub({ input: mockInput as any });
    expect(result?.name).toBe('Updated Name');
  });
});
