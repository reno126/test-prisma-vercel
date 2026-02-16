import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, value } = await req.json();
  const item = await prisma.testCrud.create({ data: { name, value } });
  return NextResponse.json(item, { status: 201 });
}
