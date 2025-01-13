-- CreateTable
CREATE TABLE "ServicePage" (
    "id" SERIAL NOT NULL,
    "tagline" VARCHAR(255) NOT NULL,
    "headline" VARCHAR(255) NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServicePage_pkey" PRIMARY KEY ("id")
);
