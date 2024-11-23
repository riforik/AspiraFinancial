import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import type { NextRequest } from 'next/server'

export default NextAuth(authConfig).auth;
 
// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get('authjs.session-token')?.value // is user signed in, temporary partnerAccess authentification
 
//   // disable only these pages, leaves static assets reachable. All unknown pages will reach 404.
//   const disabledPages = ['about', 'register', 'contact', 'community', 'pricing', 'login']
//   for (let i = 0; i < disabledPages.length; i++) {
//     if (currentUser && request.nextUrl.pathname.startsWith(`/${disabledPages[i]}`) || request.nextUrl.pathname.length === 1) {
//       return Response.redirect(new URL('/dashboard', request.url))
//     }
//   }
 
//   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
//     return Response.redirect(new URL('/login', request.url))
//   }
// }

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.svg$).*)'],
};
