import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const REMOVED_CV_PATHS = new Set([
  "/files/resume/resume (english).pdf",
  "/files/resume/resume (german).pdf",
  "/resume/resume (english).pdf",
  "/resume/resume (german).pdf",
]);

export function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname;

  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    return NextResponse.next();
  }

  if (!REMOVED_CV_PATHS.has(pathname.toLowerCase())) {
    return NextResponse.next();
  }

  return new NextResponse("This CV is no longer available.", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}

export const config = {
  matcher: ["/files/resume/:path*", "/resume/:path*"],
};
