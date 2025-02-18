import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const user = await prisma.users.create({
      data: {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        phoneNumber: body.phoneNumber,
        password: body.password,
      },
    });
    console.log(user);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
};
// export const PUT = async (req: Request) => {
//   try {
//     const body = await req.json();
//     const user = await prisma.users.update({
//       where: {
//         email: body.email,
//       },
//       data: {
//         username: body.username,
//       },
//     });
//     console.log(user);
//     return NextResponse.json(user);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to update user" },
//       { status: 500 }
//     );
//   }
// };
