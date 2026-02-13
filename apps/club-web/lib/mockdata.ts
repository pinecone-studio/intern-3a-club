import type { Club } from "./type"

export const clubs: Club[] = [
  {
    id: 1,
    name: "Robotics Lab",
    description: "Build, program, and compete with autonomous robots.",
    schedule: "Tue & Thu",
    time: "16:00 - 17:30",
    class: "B-201",
    currentMembers: 12,
    maxMembers: 20,
    status: "Open",
    instructors: [
      { name: "Ari", role: "Mentor", image: "/avatars/ari.png" },
      { name: "Bata", role: "Coach", image: "/avatars/bata.png" },
    ],
    enrolledStudents: ["Anu", "Bold", "Sara"],
  },
  {
    id: 2,
    name: "Design Studio",
    description: "Visual design, branding, and creative direction.",
    schedule: "Mon & Wed",
    time: "15:00 - 16:30",
    class: "C-102",
    currentMembers: 18,
    maxMembers: 18,
    status: "Full",
    instructors: [{ name: "Enkhee", role: "Lead", image: "/avatars/enkhee.png" }],
    enrolledStudents: ["Tseren", "Naraa", "Tomi"],
  },
  {
    id: 3,
    name: "Code Club",
    description: "Full-stack projects, team sprints, and demos.",
    schedule: "Mon & Fri",
    time: "17:00 - 18:30",
    class: "A-305",
    currentMembers: 9,
    maxMembers: 15,
    status: "Open",
    instructors: [
      { name: "Kira", role: "Engineer", image: "/avatars/kira.png" },
      { name: "Max", role: "Engineer", image: "/avatars/max.png" },
    ],
    enrolledStudents: ["Oyun", "Temuulen"],
  },
]
