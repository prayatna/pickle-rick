import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SIGNUP_DATA_COOKIE_NAME } from "@/constants";

export function middleware(request: NextRequest) {
  const restrictedPaths = ["/characters", "/profile"];
  const signupDataCookie = request.cookies.get(SIGNUP_DATA_COOKIE_NAME);

  if (restrictedPaths.includes(request.nextUrl.pathname) && !signupDataCookie) {
    const url = request.nextUrl.clone();
    url.pathname = "/signup";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signup", "/characters", "/profile"],
};
