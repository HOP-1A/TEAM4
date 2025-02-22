import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { phoneNumber } = body;
    const user = await prisma.users.findUnique({
      where: {
        phoneNumber,
      },
    });
    if (!user) {
      return NextResponse.json(
        { error: "Couldn't to find user" },
        { status: 500 }
      );
    }
    const itIsValidPass = await bcrypt.compare(body.password, user.password);
    if (!itIsValidPass) {
      return NextResponse.json(
        { error: "The password or phone number doesn't match" },
        { status: 500 }
      );
    }
    if (user && itIsValidPass) {
      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });
      return NextResponse.json(token);
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to logIn" }, { status: 500 });
  }
};
