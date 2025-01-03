import express from 'express';
import prisma from '../util/index.js';

const router = express.Router();
router.post('players', async (req, res) => {
  const { name, speed, shooting, grade } = req.body;
  try {
    const player = await prisma.players.create({
      data: {
        name,
        speed,
        shooting,
        grade,
      },
    });
    return res.status(201).json({message : '생성 완료'})
  } catch (err) {
    console.error(err);
    
  }
});
