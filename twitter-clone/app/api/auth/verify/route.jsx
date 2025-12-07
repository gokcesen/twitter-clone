import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth/verifyToken";

export async function GET(req) {
  const auth = verifyToken(req);

  if (!auth.valid) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    authenticated: true,
    user: auth.user
  });
}
