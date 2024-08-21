import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/checkout-page")) {
    const userEmail = req.cookies.get("userEmail");
    const userPassword = req.cookies.get("userPassword");

    if (!userEmail || !userPassword) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout-page"],
};
