import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token")?.value;
  const signInUrl = new URL("/", request.url);
  const dashboardURL = new URL("/", request.url);
  console.log(signInUrl);
  console.log(request.url);

  if (!token) {
    console.log(request.nextUrl.pathname);
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }
    console.log(signInUrl);
    return NextResponse.redirect(signInUrl);
  }

  if (request.nextUrl.pathname === "/" && token) {
    return NextResponse.redirect(dashboardURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard/turno",
    "/dashboard/programacao",
    "/dashboard/users",
  ],
};
