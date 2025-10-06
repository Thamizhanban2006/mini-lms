// /middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const publicPaths = ["/", "/signin", "/signup", "/api/register"];
  const isPublic = publicPaths.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  // If public, allow
  if (isPublic) return NextResponse.next();

  // get token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const userRole = token?.role;

  // redirect unauthenticated
  if (!token) {
    const signinUrl = req.nextUrl.clone();
    signinUrl.pathname = "/signin";
    signinUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signinUrl);
  }

  // redirect if wrong role attempts to access protected dashboards
  if (pathname.startsWith("/admin-dashboard") && userRole !== "admin") {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = userRole === "student" ? "/student-dashboard" : "/";
    return NextResponse.redirect(redirectUrl);
  }
  if (pathname.startsWith("/student-dashboard") && userRole !== "student") {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = userRole === "admin" ? "/admin-dashboard" : "/";
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-dashboard/:path*", "/student-dashboard/:path*"],
  runtime:'nodejs'
};
