import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out" });

  res.cookies.set("authToken", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0, 
  });

  return res;
}
