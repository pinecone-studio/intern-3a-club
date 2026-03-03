import { verifyToken } from '@clerk/backend';
import { NextRequest } from 'next/server';

interface ClerkTokenPayload {
  sub: string;
  email?: string;
  primary_email_address?: string;
  [key: string]: unknown;
}

const getValidatedToken = (req: NextRequest): string => {
  const authHeader = req.headers.get('authorization') || '';
  return authHeader.replace('Bearer ', '');
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
    return {
      clerkId: decoded.sub,
      email: extractEmail(decoded),
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
