import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token")?.value;
  // console.log(request);
  const signInUrl = new URL("/public/sign-in", request.url);
  const dashboardURL = new URL("private/dashboard", request.url);
  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInUrl);
  }

  if (request.nextUrl.pathname === "/" && token) {
    return NextResponse.redirect(dashboardURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/private/:path*"],
};
