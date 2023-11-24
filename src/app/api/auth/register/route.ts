import { prisma } from "@/libs";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullname, email, password } = (await req.json()) as {
      fullname: string;
      email: string;
      password: string;
    };
    const hashed_password = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        fullname,
        email: email.toLowerCase(),
        password: hashed_password,
        roleId: (await prisma.role
          .findFirst({ where: { name: "User" } })
          .then((x) => x?.id)) as string,
      },
    });

    return NextResponse.json({
      user: {
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 },
    );
  }
}
