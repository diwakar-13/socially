import "dotenv/config";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

// Global object ko access karne ke liye (Next.js 15/16 safe way)
const globalForPrisma = globalThis;

const prismaClientSingleton = () => {
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL,
  });
  return new PrismaClient({ adapter });
};

// Agar global memory mein pehle se prisma hai toh wahi use karo,
// nahi toh naya banao
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Dev mode mein prisma ko global object mein save kar lo
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
