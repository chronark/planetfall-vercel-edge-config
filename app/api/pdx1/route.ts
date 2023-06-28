export const runtime = "edge";
export const preferredRegion = ["pdx1"];
import { measure } from "../_ping";

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  return measure(req);
}
