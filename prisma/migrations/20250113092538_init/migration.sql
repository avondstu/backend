/*
  Warnings:

  - You are about to drop the column `contact` on the `CompanyInformation` table. All the data in the column will be lost.
  - Added the required column `description` to the `CompanyInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iglink` to the `CompanyInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin` to the `CompanyInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `CompanyInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiktoklink` to the `CompanyInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `CompanyInformation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompanyInformation" DROP COLUMN "contact",
ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "iglink" VARCHAR(255) NOT NULL,
ADD COLUMN     "linkedin" VARCHAR(255) NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "tiktoklink" VARCHAR(255) NOT NULL,
ADD COLUMN     "whatsapp" VARCHAR(255) NOT NULL;
