export type Instructor = {
  name: string
  role: string
  image: string
}

export type Club = {
  id: number
  name: string
  description: string
  schedule: string
  time: string
  class: string
  currentMembers: number
  maxMembers: number
  status: "Open" | "Full"
  instructors: Instructor[]
  enrolledStudents: string[]
  bannedUntil?: number
  isEnrolled?: boolean
}

export type ClubCardProps = {
  club: Club & { isEnrolled?: boolean; bannedUntil?: number }
  isSelected: boolean
  onClick: (id: number) => void
}
