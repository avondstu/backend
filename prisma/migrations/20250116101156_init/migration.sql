-- CreateTable
CREATE TABLE "ProjectPage" (
    "id" SERIAL NOT NULL,
    "tagline" VARCHAR(255) NOT NULL,
    "headline" VARCHAR(255) NOT NULL,
    "mainButton" VARCHAR(255) NOT NULL,
    "mainLink" VARCHAR(255) NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectPage_pkey" PRIMARY KEY ("id")
);
