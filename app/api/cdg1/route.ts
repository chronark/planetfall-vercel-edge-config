import { measure } from "../_ping";

export const runtime = "edge";
export const preferredRegion = ["cdg1"];

export async function POST(req: Request) {
  return measure(req);
}
