import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { firstname, lastname, email, phoneNumber, password } = body;
    const hashedPassword = bcrypt.hashSync(password, 5);
    const user = await prisma.users.create({
      data: {
        firstname,
        lastname,
        email,
        phoneNumber,
        password: hashedPassword,
      },
    });
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    return NextResponse.json(token);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
};
