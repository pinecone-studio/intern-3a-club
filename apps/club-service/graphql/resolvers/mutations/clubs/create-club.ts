import { DB } from "db/drizzle";
import { clubs } from "db/schema";

export const  createClub = async ({ input }: any) => {
    const [newClub] = await DB.insert(clubs)
      .values({
        id: crypto.randomUUID(),
        ...input,
        type: input.type || "self",
      })
      .returning();
    return newClub;
  }