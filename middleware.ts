import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Use withAuth to extend NextAuth's middleware
export default withAuth(
  function middleware(req: NextRequest) {
    const authSessionToken = req.cookies.get('authjs.session-token') || 
                           req.cookies.get('next-auth.session-token') || 
                           req.cookies.get('__Secure-next-auth.session-token');

    if (!authSessionToken) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
    pages: {
      signIn: '/login',
    },
  }
);

// Configure which routes the middleware applies to
export const config = {
  matcher: [
    '/bid',
    '/create-contest',
    '/profile',
    /*
     * Match all request paths except:
     * - Static files (e.g., /_next/, /favicon.ico)
     * - Public assets (e.g., /images/, /public/)
     */
    // '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};

