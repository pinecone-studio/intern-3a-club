import { verifyToken } from '@clerk/backend';
import { NextRequest } from 'next/server';

export const createContext = async ({ req }: { req: NextRequest }) => {
  const authHeader = req.headers.get('authorization') || '';
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return { clerkId: null, email: null };
  }

  try {
    const secretKey = process.env.CLERK_SECRET_KEY;
    if (!secretKey) {
      console.error('CLERK_SECRET_KEY тохируулагдаагүй байна.');
      return { clerkId: null, email: null };
    }

    // Токеныг баталгаажуулах
    const decoded = await verifyToken(token, { secretKey });

    // Clerk-ийн JWT payload-оос мэдээллүүдийг салгаж авах
    return {
      clerkId: decoded.sub,
      email:
        (decoded as any).email ||
        (decoded as any).primary_email_address ||
        null,
    };
  } catch (error) {
    console.error('Токен баталгаажуулахад алдаа гарлаа:', error);
    return { clerkId: null, email: null };
  }
};
