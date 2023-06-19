-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "googleSub" TEXT NOT NULL,
    "currentExecLogId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "picture" TEXT,
    "given_name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "position" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "completedInId" INTEGER,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExecLog" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "closed" TIMESTAMP(3),
    "showUp" TEXT,
    "speakUp" TEXT,
    "syncUp" TEXT,
    "lessonsLearned" TEXT,
    "progressMade" TEXT,
    "progressNeeded" TEXT,
    "emotionHigh" TEXT,
    "emotionLow" TEXT,
    "personalScore" INTEGER,
    "professionalScore" INTEGER,
    "organizationScore" INTEGER,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ExecLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MotivationalQuote" (
    "id" SERIAL NOT NULL,
    "quote" TEXT NOT NULL,
    "attribution" TEXT NOT NULL,

    CONSTRAINT "MotivationalQuote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MotivationalQuoteSeen" (
    "quoteId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MotivationalQuoteSeen_pkey" PRIMARY KEY ("quoteId","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_googleSub_key" ON "User"("googleSub");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE INDEX "Todo_userId_position_idx" ON "Todo"("userId", "position");

-- CreateIndex
CREATE INDEX "ExecLog_userId_created_at_idx" ON "ExecLog"("userId", "created_at" DESC);

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_completedInId_fkey" FOREIGN KEY ("completedInId") REFERENCES "ExecLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExecLog" ADD CONSTRAINT "ExecLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotivationalQuoteSeen" ADD CONSTRAINT "MotivationalQuoteSeen_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "MotivationalQuote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotivationalQuoteSeen" ADD CONSTRAINT "MotivationalQuoteSeen_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

