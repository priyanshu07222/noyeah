-- CreateEnum
CREATE TYPE "ContestStatus" AS ENUM ('OPEN', 'CLOSED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "TxnType" AS ENUM ('CONTEST_CREATION_FEE', 'PARTICIPATION_FEE');

-- CreateEnum
CREATE TYPE "TxnStatus" AS ENUM ('SUCCESS', 'PENDING', 'FAILED');

-- CreateEnum
CREATE TYPE "Answerenum" AS ENUM ('YES', 'NO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "name" TEXT,
    "walletAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "entryAmount" DOUBLE PRECISION NOT NULL,
    "creatorId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "ContestStatus" NOT NULL DEFAULT 'OPEN',
    "totalPool" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contestId" TEXT NOT NULL,
    "amountPaid" DOUBLE PRECISION NOT NULL,
    "answer" "Answerenum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Participation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Winner" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contestId" TEXT NOT NULL,
    "reward" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Winner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TxnHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "TxnType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "contestId" TEXT,
    "transactionHash" TEXT,
    "status" "TxnStatus" NOT NULL DEFAULT 'SUCCESS',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TxnHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_walletAddress_key" ON "User"("walletAddress");

-- AddForeignKey
ALTER TABLE "Contest" ADD CONSTRAINT "Contest_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Winner" ADD CONSTRAINT "Winner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Winner" ADD CONSTRAINT "Winner_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TxnHistory" ADD CONSTRAINT "TxnHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TxnHistory" ADD CONSTRAINT "TxnHistory_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
