import prismaCleint from '@prisma/client';

const { PrismaClient } = prismaCleint;
const prisma = new PrismaClient();
export default prisma;
