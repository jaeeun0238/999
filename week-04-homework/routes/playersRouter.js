import express from 'express';

const router = express.Router();

let players = [
  { name: '차범근', speed: 100, shouting: 100, grade: 's' },
  { name: '메시', speed: 100, shouting: 100, grade: 's' },
  { name: '호날두', speed: 100, shouting: 100, grade: 's' },
];

// 플레이어 목록 조회 (GET)

export default router;
