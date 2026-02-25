import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { InferInsertModel } from 'drizzle-orm';

// 1. Table-ийн үндсэн төрлийг авна
type ClubInsert = InferInsertModel<typeof clubs>;

// 2. Input-ийн бүтцийг тодорхойлно:
// 'id' заавал байна, бусад нь байсан ч болно, байгаагүй ч болно (Partial)
interface UpdateClubInput {
  input: Pick<ClubInsert, 'id'> & Partial<Omit<ClubInsert, 'id'>>;
}

export const updateClub = async ({ input }: UpdateClubInput) => {
  const { id, ...updateData } = input;

  // Шууд update хийгээд үр дүнг буцаах
  const [updatedClub] = await DB.update(clubs)
    .set({
      ...updateData,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(clubs.id, id))
    .returning();

  return updatedClub; // Олдсонгүй бол undefined буцна, энийг caller нь шалгана
};
