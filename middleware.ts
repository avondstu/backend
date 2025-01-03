import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {locales} from '@/config';

export default async function middleware(request: NextRequest) {
  
 


  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get('dashcode-locale') || 'en';
 
  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale
    
  });
  const response = handleI18nRouting(request);
 
  // Step 3: Alter the response (example)
  response.headers.set('dashcode-locale', defaultLocale);


 
  return response;
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
  ]
};