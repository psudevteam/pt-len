import { prisma } from "@/libs";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function DELETE(req: NextApiRequest, context: any) {
  const res = NextResponse;
  const token = getToken({ req });

  if (!token) {
    return res.json({ error: "Unauthorized" });
  }

  try {
    await prisma.reservation.delete({
      where: {
        id: context.params.id,
      },
    });
    return res.json({
      message: "Reservation deleted successfully",
    });
  } catch (error: any) {
    return res.json({ error: error.message });
  }
}
