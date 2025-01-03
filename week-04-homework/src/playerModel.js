import { PrismaClient } from '../util/index.js';

export const lookUp = async () => {
  return await prisma.players.findMany({
    select: {
      name: true,
      speed: true,
      shooting: true,
    },
  });
};
