
import { DB } from "./drizzle";
import { teachers, clubs, timetable } from "./schema";

async function main() {
  console.log("Seed эхэллээ...");

  // 1. Багшийн мэдээлэл
  await DB.insert(teachers).values({
    id: "t1",
    name: "Bold",
    email: "bold@example.com",
    isActive: 1,
  });

  // 2. Клубийн мэдээлэл
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
    clubEndTime: "16:00",
    room: 301,
    duration: 120,
  });

  console.log("Seed амжилттай дууслаа!");
}

main().catch((err) => {
  console.error("Алдаа гарлаа:", err);
  process.exit(1);
});