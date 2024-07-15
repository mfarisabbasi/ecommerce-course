import { connectToDB } from "@/config/database";
import { NextResponse } from "next/server";

// GET/POST/PUT/DELETE

export const GET = async (req) => {
  await connectToDB();

  return NextResponse.json(
    { message: "Hello World" },
    {
      status: 200,
    }
  );
};
