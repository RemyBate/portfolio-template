import { removedCvResponse } from "@/lib/removedCv";

type RouteContext = {
  params: Promise<{ slug: string[] }>;
};

async function respond(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  return removedCvResponse(slug);
}

export const GET = respond;
export const HEAD = respond;
