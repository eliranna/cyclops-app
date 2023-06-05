import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest) {
  return NextResponse.json({});
}

export const config = {
  runtime: "edge",
};
