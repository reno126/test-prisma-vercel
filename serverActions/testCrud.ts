"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// CREATE
export async function createTestCrud(name: string, value: number) {
  return await prisma.testCrud.create({
    data: { name, value },
  });
}

// CREATE as SERVER ACTION
export async function createTestCrudServerAction(formData: FormData) {
  await prisma.testCrud.create({
    data: {
      name: formData.get("name") as string,
      value: Number(formData.get("value")),
    },
  });
  revalidatePath("/test-crud");
}

// READ (all)
export async function getAllTestCrud() {
  return await prisma.testCrud.findMany({ orderBy: { UID: "desc" } });
}

// READ (by UID)
export async function getTestCrudById(UID: number) {
  return await prisma.testCrud.findUnique({ where: { UID } });
}

// UPDATE
export async function updateTestCrud(UID: number, name: string, value: number) {
  return await prisma.testCrud.update({
    where: { UID },
    data: { name, value },
  });
}

// DELETE
export async function deleteTestCrud(UID: number) {
  return await prisma.testCrud.delete({ where: { UID } });
}
