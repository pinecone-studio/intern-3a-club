import { DB } from "db/drizzle";
import { clubs } from "db/schema";
import { eq } from "drizzle-orm";

export const updateClub = async ({ input }: { input: any }) => {
  const { id, ...updateData } = input;
  try {
    const [updatedClub] = await DB.update(clubs)
      .set({
        ...updateData,
        updatedAt: new Date().toISOString(), // updatedAt-ийг шинэчлэх
      })
      .where(eq(clubs.id, id))
      .returning();
    
    return updatedClub;
  } catch (error) {
    console.error("Update Error:", error);
    throw new Error("Failed to update club");
  }
}