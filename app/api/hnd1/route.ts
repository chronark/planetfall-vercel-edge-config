export const runtime = "edge";
export const preferredRegion = ["hnd1"];
import { measure } from "../_ping";

export async function POST(req: Request) {
  return measure(req);
}
