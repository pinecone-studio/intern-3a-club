
import { DB } from "db/drizzle";
import { teachers, clubs, timetable } from "./db/schema"; // Схем рүүгээ чиглүүлнэ

async function seed() {
  console.log("Seed хийж эхэллээ...");

  try {
    // 1. Багш
    await DB.insert(teachers).values({
      id: "t1",
      name: "Bold",
      email: "bold@example.com",
    });

    // 2. Клуб
    await DB.insert(clubs).values({
      id: "c1",
      name: "React",
      teacherId: "t1",
      type: "Programming",
      status: "active",
    });

    // 3. Цагийн хуваарь
    await DB.insert(timetable).values({
      id: "tt1",
      clubId: "c1",
      date: "2026-02-13",
      clubStartTime: "14:00",
      room: 301,
    });

    console.log("✅ Амжилттай!");
  } catch (error) {
    console.error("❌ Алдаа:", error);
  }
}

seed();