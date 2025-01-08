/*
  Warnings:

  - You are about to drop the column `service` on the `HomePage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "HomePage" DROP COLUMN "service";

-- CreateTable
CREATE TABLE "BrandServices" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BrandServices_pkey" PRIMARY KEY ("id")
);
