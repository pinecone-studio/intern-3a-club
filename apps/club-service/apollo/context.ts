import { createClerkClient, verifyToken } from '@clerk/backend';
import { NextRequest } from 'next/server';

interface ClerkTokenPayload {
  sub: string;
  email?: string;
  primary_email_address?: string;
  [key: string]: unknown;
}

const getValidatedToken = (req: NextRequest): string => {
  const authHeader = req.headers.get('authorization') || '';
  return authHeader.replace(/^Bearer\s+/i, '').trim();
};

const extractEmail = (decoded: ClerkTokenPayload): string | null => {
  return (
    (decoded.email as string) ||
    (decoded.primary_email_address as string) ||
    null
  );
};

const decodeToken = async (
  token: string,
  secretKey: string
): Promise<ClerkTokenPayload | null> => {
  try {
    return (await verifyToken(token, {
      secretKey,
    })) as unknown as ClerkTokenPayload;
  } catch (error) {
    console.error('Токен баталгаажуулахад алдаа гарлаа:', error);
    return null;
  }
};

const resolveEmailViaClerk = async (
  clerkId: string,
  secretKey: string
): Promise<string | null> => {
  try {
    const clerkClient = createClerkClient({ secretKey });
    const user = await clerkClient.users.getUser(clerkId);
    const primaryEmail = user.emailAddresses.find(
      (item) => item.id === user.primaryEmailAddressId
    );
    return primaryEmail?.emailAddress ?? null;
  } catch (fallbackError) {
    console.error('Clerk хэрэглэгчийн email авахад алдаа гарлаа:', fallbackError);
    return null;
  }
};

const resolveTokenIdentity = async (
  decoded: ClerkTokenPayload,
  secretKey: string
) => {
  const email = extractEmail(decoded);
  if (email || !decoded.sub) {
    return { clerkId: decoded.sub, email };
  }

  const fallbackEmail = await resolveEmailViaClerk(decoded.sub, secretKey);
  return { clerkId: decoded.sub, email: fallbackEmail };
};

const verifyClerkToken = async (token: string, secretKey: string) => {
  const decoded = await decodeToken(token, secretKey);
  if (!decoded) return { clerkId: null, email: null };
  return resolveTokenIdentity(decoded, secretKey);
};

export const createContext = async ({ req }: { req: NextRequest }) => {
  const token = getValidatedToken(req);
  const secretKey = process.env.CLERK_SECRET_KEY;

  if (!token) return { clerkId: null, email: null };
  if (!secretKey) {
    console.error('CLERK_SECRET_KEY тохируулагдаагүй байна.');
    return { clerkId: null, email: null };
  }

  return verifyClerkToken(token, secretKey);
};
