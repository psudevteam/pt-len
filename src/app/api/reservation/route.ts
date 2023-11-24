import { prisma } from "@/libs";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any, res: NextApiResponse) {
  const token = await getToken({ req });

  if (token) {
    try {
      await prisma.reservation.create({
        data: {
          ...req.body,
        },
      });
      return res.json({
        message: "Reservation created successfully",
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}

export async function GET(req: any, res: any) {
  const token = await getToken({ req });

  if (token) {
    try {
      const reservation = await prisma.reservation.findMany();
      return NextResponse.json(reservation);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}
