

// import { clerkMiddleware } from '@clerk/nextjs/server'

// // export default clerkMiddleware();
// export default clerkMiddleware((auth, req) => {
//   console.log(" Clerk middleware is running for:", req.nextUrl.pathname);
// });
// export const config = {
//    matcher: [
//     "/((?!_next|sign-up|sign-in|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)",
//   ],
// }

import { clerkMiddleware } from '@clerk/nextjs/server';

// Optional: Log route being matched by middleware
export default clerkMiddleware((auth, req) => {
  console.log("✅ Clerk middleware active for:", req.nextUrl.pathname);
});

export const config = {
  matcher: [
    // Match all routes except static files (CSS, JS, images, etc.)
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js|json)).*)',
    // Always include API and trpc routes
    '/(api|trpc)(.*)',
  ],
};


