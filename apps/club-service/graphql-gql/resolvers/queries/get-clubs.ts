import { DB } from "db/drizzle";

export const getClubs = async () => {
  const clubs = await DB.query.clubs.findMany();
  return clubs;
};