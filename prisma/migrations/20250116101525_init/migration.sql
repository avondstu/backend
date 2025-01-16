-- CreateTable
CREATE TABLE "ProjectPortfolio" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "category" "OurServices" NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectPortfolio_pkey" PRIMARY KEY ("id")
);
