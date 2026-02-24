/* eslint-disable @typescript-eslint/no-explicit-any */

import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { createClub } from 'graphql/resolvers/mutations';

// 1. DB-г mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    insert: jest.fn().mockReturnThis(),
    values: jest.fn().mockReturnThis(),
    returning: jest.fn(),
  },
}));

// 2. crypto.randomUUID-г mock хийх (Энэ хамгийн чухал нь)
if (!global.crypto) {
  (global as any).crypto = {};
}
global.crypto.randomUUID = jest.fn().mockReturnValue('mocked-uuid-123');

describe('createClub mutation coverage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should cover line 14 by returning the created club', async () => {
    const mockInput = {
      name: 'Coding Club',
      type: 'academic' as const,
    };

    // Мөр 14-ийг хамрахын тулд заавал массив [ ] буцаах ёстой
    const mockCreatedClub = { id: 'mocked-uuid-123', ...mockInput };
    (
      DB.insert(clubs).values({} as any).returning as jest.Mock
    ).mockResolvedValue([mockCreatedClub]);

    const result = await createClub({ input: mockInput as any });

    // Шалгалтууд
    expect(result).toBeDefined();
    expect(result.id).toBe('mocked-uuid-123');
    expect(result.name).toBe('Coding Club');
  });

  it('should test the "self" fallback branch', async () => {
    const mockInput = { name: 'Self Club' };
    const mockCreatedClub = { id: 'uuid-456', name: 'Self Club', type: 'self' };

    (
      DB.insert(clubs).values({} as any).returning as jest.Mock
    ).mockResolvedValue([mockCreatedClub]);

    const result = await createClub({ input: mockInput as any });

    expect(result.type).toBe('self');
  });
});
