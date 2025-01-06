/*
  Warnings:

  - You are about to alter the column `address` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "address" SET DATA TYPE VARCHAR(255);
