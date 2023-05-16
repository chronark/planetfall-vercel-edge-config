export const runtime = "edge";
export const preferredRegion = ["kix1"];
import { measure } from "../_ping";

export async function POST(req: Request) {
  return measure(req);
}
