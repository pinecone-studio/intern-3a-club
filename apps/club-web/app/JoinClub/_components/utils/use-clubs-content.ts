import { useAuth } from '@clerk/nextjs';
import { useClubsLogic } from './use-clubs-logic';

const pickUserId = (
  prop: string | undefined,
  clerk: string | null | undefined
): string => {
  if (prop) return prop;
  return clerk || '';
};

export const useClubsContent = (userId?: string) => {
  const { userId: clerkUserId } = useAuth();
  const logic = useClubsLogic(clerkUserId ?? undefined);
  const resolvedId = pickUserId(userId, clerkUserId);
  return { logic, resolvedId };
};
