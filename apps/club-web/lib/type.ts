export interface Instructor {
  name: string;
  role: string;
  image: string;
}

export interface Club {
  id: number;
  name: string;
  description: string;
  status: 'Open' | 'Full';
  instructors: Instructor[];
  currentMembers: number;
  maxMembers: number;
  schedule: string;
  time: string;
  class: string;
  enrolledStudents: string[];
  image: string;
  isEnrolled?: boolean; // Энэ мөрийг нэмээрэй (? тавьснаар сонголтоор байж болно)
}

export type ClubCardProps = {
  club: Club & { isEnrolled?: boolean; bannedUntil?: number };
  isSelected: boolean;
  onClick: (_id: number) => void;
};

export interface ExtendedClub extends Club {
  isEnrolled: boolean;
  bannedUntil: number;
}
