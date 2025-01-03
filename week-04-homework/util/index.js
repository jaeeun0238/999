import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
export const lookUp = async () => {
  return await prisma.players.findMany({
    select: {
      name: true,
      speed: true,
      shooting: true,
    },
  });
};
