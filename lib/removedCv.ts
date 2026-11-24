import { NextResponse } from "next/server";

const REMOVED_CV_FILES = new Set([
  "resume (english).pdf",
  "resume (german).pdf",
]);

export function removedCvResponse(slug: string[]): NextResponse {
  const file = slug.join("/").toLowerCase();

  if (!REMOVED_CV_FILES.has(file)) {
    return new NextResponse(null, { status: 404 });
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
