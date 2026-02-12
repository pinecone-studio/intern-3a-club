/* eslint-disable @typescript-eslint/no-explicit-any */

import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { deleteClub } from 'graphql/resolvers/mutations';

jest.mock('db/drizzle', () => ({
  DB: {
    delete: jest.fn().mockReturnThis(),
    where: jest.fn().mockResolvedValue(true), // Энэ нь 6-7-р мөрийг "await" хийж дуусгахад тусална
  },
}));

describe('deleteClub', () => {
  it('should cover lines 6-7 by executing delete with where clause', async () => {
    const mockId = '123';

    const result = await deleteClub({ id: mockId });

    // Where функц дуудагдсан эсэхийг шалгаснаар 6-7-р мөр хамрагдана
    expect(DB.delete(clubs).where).toHaveBeenCalled();
    expect(result).toBe(true);
  });
});
