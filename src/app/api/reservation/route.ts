import { prisma } from "@/libs";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  const token = await getToken({ req });

  if (token) {
    try {
      const reservation = await prisma.reservation.findMany({
        include: {
          user: true,
        },
      });
      return NextResponse.json(reservation);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}
