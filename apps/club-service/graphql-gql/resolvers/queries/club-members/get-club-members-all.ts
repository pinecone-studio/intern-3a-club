import { DB } from 'db/drizzle';
import { clubMembers } from 'db/schema';
import { eq } from 'drizzle-orm';

export const getClubMembersAll = async (
  _: unknown,
  { clubId }: { clubId: string }
) => {
  try {
    return await DB.select()
      .from(clubMembers)
      .where(eq(clubMembers.clubId, clubId));
  } catch (error) {
    console.error('Гишүүдийг авахад алдаа гарлаа:', error);
    throw new Error('Гишүүдийн жагсаалтыг ачаалж чадсангүй.');
  }
};
