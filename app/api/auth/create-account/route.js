import { connectToDB } from "@/config/database";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectToDB();

  const { name, email, password } = await req.json();

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return NextResponse.json(
        { message: "Account with this email already exist" },
        {
          status: 400,
        }
      );
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    if (!newUser) {
      return NextResponse.json(
        { message: "Something went wrong, please try again later" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Account created successfully",
        user: newUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 400,
      }
    );
  }
};
