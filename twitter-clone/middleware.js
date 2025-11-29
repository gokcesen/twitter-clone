import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("authToken");

  const isProtected = request.nextUrl.pathname.startsWith("/main");

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/main/:path*"],
};
