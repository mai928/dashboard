// middleware.ts

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define routes that are always public and don't require authentication
// const isPublicRoute = createRouteMatcher([
//   '/', 
//   '/sign-in(.*)', 
//   '/sign-up(.*)',
//   // '/dashboard/CRM',
//   '/pages/profile',
//   '/pages/users',
//   '/pages/users/reports',
//   '/pages/users/newUser',
//   '/pages/accounts/billing',
//   '/pages/accounts/invoice',
//   '/pages/accounts/settings',
//   '/ecommerce/products',
//   '/ecommerce/orders',
//   '/translations/en',
//   '/translations/ar'
// ]);



export default clerkMiddleware((auth, req) => {
  console.log('Middleware is running for path:', req.nextUrl.pathname); 

  // if ( !isPublicRoute(req)) {
  //   return  auth.protect()
  // }

});

// export const config = {
//   // The matcher ensures the middleware runs on all routes except for static assets.
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };

export const config = {
  matcher: [
    // Apply middleware to all routes EXCEPT static assets and public files
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js|json)).*)",
  ],
};


