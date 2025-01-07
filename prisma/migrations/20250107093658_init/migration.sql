-- CreateTable
CREATE TABLE "CompanyInformation" (
    "id" SERIAL NOT NULL,
    "contact" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomePage" (
    "id" SERIAL NOT NULL,
    "why" VARCHAR(255) NOT NULL,
    "service" VARCHAR(255)[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomePage_pkey" PRIMARY KEY ("id")
);
