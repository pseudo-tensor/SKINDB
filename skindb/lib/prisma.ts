import { PrismaClient } from "@prisma/client";

const GlobalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  GlobalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"]
  })

if (process.env.NODE_ENV !== "production") GlobalForPrisma.prisma= prisma;