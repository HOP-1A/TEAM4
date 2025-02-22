/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isNew` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_email_key";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imgUrls" TEXT[],
ADD COLUMN     "isNew" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "phoneNumber" SET DATA TYPE BIGINT;

-- CreateIndex
CREATE UNIQUE INDEX "Users_phoneNumber_key" ON "Users"("phoneNumber");
