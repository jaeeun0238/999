import express from 'express';

const router = express.Router();

let players = [
  { name: '차범근', speed: 100, shouting: 100, grade: 's' },
  { name: '메시', speed: 100, shouting: 100, grade: 's' },
  { name: '호날두', speed: 100, shouting: 100, grade: 's' },
];

// 플레이어 목록 조회 (GET)
router.get('/players', (req, res) => {
  res.json(players);
});

// 플레이어 추가 (POST)
router.post('/players', (req, res) => {
  const newPlayer = req.body;
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

// 특정 플레이어 조회 (GET)
router.get('/players/:name', (req, res) => {
  const player = players.find((p) => p.name === req.params.name);
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ message: '선수를 찾을 수 없습니다.' });
  }
});

// 플레이어 수정 (PUT)
router.put('/players/:name', (req, res) => {
  const playerIndex = players.findIndex((p) => p.name === req.params.name);
  if (playerIndex !== -1) {
    players[playerIndex] = { ...players[playerIndex], ...req.body };
    res.json(players[playerIndex]);
  } else {
    res.status(404).json({ message: '선수를 찾을 수 없습니다.' });
  }
});

// 플레이어 삭제 (DELETE)
router.delete('/players/:name', (req, res) => {
  const playerIndex = players.findIndex((p) => p.name === req.params.name);
  if (playerIndex !== -1) {
    const deletedPlayer = players.splice(playerIndex, 1);
    res.json(deletedPlayer);
  } else {
    res.status(404).json({ message: '선수를 찾을 수 없습니다.' });
  }
});

export default router;
