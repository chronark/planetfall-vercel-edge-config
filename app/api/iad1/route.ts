export const runtime = "edge";
export const preferredRegion = ["iad1"];
import { measure } from "../_ping";

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  return measure(req);
}
