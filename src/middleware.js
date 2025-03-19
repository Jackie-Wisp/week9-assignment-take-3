import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(["/user-profile(.*)"]);

export default clerkMiddleware(async (auth, req) => {
if(isProtectedRoute(req)) await auth.protect();
});
//requests from protected route trigger authentication
export const config = {
  matcher: [
    
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    '/(api|trpc)(.*)',
  ],
}