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

const verifyClerkToken = async (token: string, secretKey: string) => {
  try {
    const decoded = (await verifyToken(token, {
      secretKey,
    })) as unknown as ClerkTokenPayload;

    let email = extractEmail(decoded);
    if (!email && decoded.sub) {
      try {
        const clerkClient = createClerkClient({ secretKey });
        const user = await clerkClient.users.getUser(decoded.sub);
        const primaryEmail = user.emailAddresses.find(
          (item) => item.id === user.primaryEmailAddressId
        );
        email = primaryEmail?.emailAddress ?? null;
      } catch (fallbackError) {
        console.error('Clerk хэрэглэгчийн email авахад алдаа гарлаа:', fallbackError);
      }
    }

    return {
      clerkId: decoded.sub,
      email,
    };
  } catch (error) {
    console.error('Токен баталгаажуулахад алдаа гарлаа:', error);
    return { clerkId: null, email: null };
  }
};

export const createContext = async ({ req }: { req: NextRequest }) => {
  const token = getValidatedToken(req);
  const secretKey = process.env.CLERK_SECRET_KEY;
  console.log('auth header', req.headers.get('authorization'));


  if (!token) return { clerkId: null, email: null };
  if (!secretKey) {
    console.error('CLERK_SECRET_KEY тохируулагдаагүй байна.');
    return { clerkId: null, email: null };
  }

  return verifyClerkToken(token, secretKey);
};
