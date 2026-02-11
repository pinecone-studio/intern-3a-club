import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";


export const clubsTable = sqliteTable("clubs", {
  id: text("id").primaryKey().notNull(),

  creatorId: text("creatorId"),
  name: text("name").notNull(),
  description: text("description"),
  teacherId: text("teacherId"),

  minMember: int("minMember"),
  maxMember: int("maxMember"),

  type: text("type", { enum: ["self", "mentor"] })
    .notNull(),

  preferredTeacher: text("preferredTeacher"),

  status: text("status", { enum: ["pending", "approved", "declined"] })
    .default("pending")
    .notNull(),


});
