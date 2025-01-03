-- CreateEnum
CREATE TYPE "BrandCategory" AS ENUM ('Alter', 'Avond');

-- CreateEnum
CREATE TYPE "OurServices" AS ENUM ('Branding', 'Logo', 'Socmed', 'Website', 'Ads');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "telepon" VARCHAR(100) NOT NULL,
    "category" "BrandCategory" NOT NULL DEFAULT 'Avond',
    "address" VARCHAR NOT NULL,
    "services" "OurServices" NOT NULL DEFAULT 'Branding',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
