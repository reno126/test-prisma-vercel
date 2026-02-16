-- CreateTable
CREATE TABLE "TestCrud" (
    "UID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "TestCrud_pkey" PRIMARY KEY ("UID")
);
