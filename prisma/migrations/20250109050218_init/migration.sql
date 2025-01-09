/*
  Warnings:

  - You are about to drop the column `nama` on the `BrandServices` table. All the data in the column will be lost.
  - You are about to drop the column `why` on the `HomePage` table. All the data in the column will be lost.
  - Added the required column `description` to the `BrandServices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `layanan` to the `BrandServices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `HomePage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `headline` to the `HomePage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainButton` to the `HomePage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainLink` to the `HomePage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondButton` to the `HomePage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondLink` to the `HomePage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagline` to the `HomePage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BrandServices" DROP COLUMN "nama",
ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "layanan" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "HomePage" DROP COLUMN "why",
ADD COLUMN     "desc" VARCHAR(255) NOT NULL,
ADD COLUMN     "headline" VARCHAR(255) NOT NULL,
ADD COLUMN     "mainButton" VARCHAR(255) NOT NULL,
ADD COLUMN     "mainLink" VARCHAR(255) NOT NULL,
ADD COLUMN     "secondButton" VARCHAR(255) NOT NULL,
ADD COLUMN     "secondLink" VARCHAR(255) NOT NULL,
ADD COLUMN     "tagline" VARCHAR(255) NOT NULL;
