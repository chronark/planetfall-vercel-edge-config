import { get } from "@vercel/edge-config";
import { type NextRequest, NextResponse } from "next/server";

export async function measure(req: Request): Promise<NextResponse> {
  if (req.headers.get("authorization") !== process.env.AUTHORIZATION) {
    return NextResponse.json([{
      error: "Forbidden",
      time: Date.now(),
    }], {
      status: 403,
    });
  }

  try {
    const now = Date.now();
    const res = await get("greeting");
    const latency = Date.now() - now;

    return NextResponse.json([{
      status: 200,
      latency,
      body: res ? btoa(JSON.stringify(res)) : undefined,
      headers: {},
      time: now,
    }]);
  } catch (e) {
    const err = e as Error;

    console.error(err);
    return NextResponse.json([{
      error: err.message,
      time: Date.now(),
    }]);
  }
}
