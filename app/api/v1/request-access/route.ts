import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import insertUser from "@/lib/schema";

// export const runtime = "experimental-edge";
// export const preferredRegion = "ida1";

export async function POST(request: NextRequest) {
  if (request.nextUrl.origin !== "https://abyss-eight.vercel.app") {
    console.error("bad actor");
    return;
  }

  // const body = await request.json();
  // try {
  //   await insertUser({
  //     email: body.email,
  //     provider: body.provider,
  //   });
  // } catch (err) {
  //   console.error(err);
  // }
  console.log(new URL("/waitlist", request.nextUrl.origin).toString());
  return NextResponse.redirect(new URL("/waitlist", request.nextUrl.origin));
}
