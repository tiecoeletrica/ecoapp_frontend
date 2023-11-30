import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const signInUrl = new URL("/", request.url);
  const dashboardURL = new URL("/dashboard", request.url);

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
  matcher: ["/", "/dashboard:path*"],
};

// import { getSession } from "next-auth/react";
// import { NextRequest, NextResponse } from "next/server";

// import parseUrl from "../lib/parseURL";

// async function handle(req: NextRequest) {
//   const signInPage = "/sign-in";
//   const errorPage = "/sign-in";
//   const basePath = parseUrl(process.env.NEXTAUTH_URL).path;

//   if (
//     req.nextUrl.pathname.startsWith(basePath) ||
//     [signInPage, errorPage].includes(req.nextUrl.pathname)
//   ) {
//     return;
//   }

//   const requestForNextAuth: any = {
//     headers: {
//       cookie: req.headers.get("cookie"),
//     },
//   };

//   const session = await getSession({ req: requestForNextAuth });

//   if (session) {
//     return NextResponse.next();
//   }

//   const signInUrl = new URL(signInPage, req.nextUrl.origin);
//   return NextResponse.redirect(signInUrl);
// }

// export default handle;
