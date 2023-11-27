import { prisma } from "@/libs";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  const token = await getToken({ req });

  if (token) {
    try {
      const guest = await prisma.guest.findMany({});
      return NextResponse.json(guest);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}
