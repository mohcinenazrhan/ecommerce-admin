/*
This setup ensures that you have a single instance of PrismaClient
 throughout your application, promoting reusability
  and preventing potential issues related to multiple database connections.
   Additionally, it sets up a development-friendly behavior
    where the same PrismaClient instance is reused during development for improved performance
*/
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
