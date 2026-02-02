import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const PROTECTED_PATHS = ["/profile", "/create-story"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );

  if (!isProtected) return NextResponse.next();

  const token = await getToken({ req });

  if (token) return NextResponse.next();

  const signupUrl = req.nextUrl.clone();
  signupUrl.pathname = "/signup";
  signupUrl.searchParams.set("callbackUrl", `${pathname}${req.nextUrl.search}`);

  return NextResponse.redirect(signupUrl);
}

export const config = {
  matcher: ["/profile/:path*", "/create-story/:path*"],
};

