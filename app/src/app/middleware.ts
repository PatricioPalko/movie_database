import { auth } from "@/app/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const pathname = req.nextUrl.pathname;

  const isOnDashboard = pathname.startsWith("/dashboard");
  const isOnLogin = pathname.startsWith("/login");

  if (isOnDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isOnLogin && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
