import express from 'express';

const router = express.Router();

let players = [
  { name: '차범근', speed: 100, shouting: 100, grade: 's' },
  { name: '메시', speed: 100, shouting: 100, grade: 's' },
  { name: '호날두', speed: 100, shouting: 100, grade: 's' },
];
// 선수 불러오기 - Read
// 불러오니까 메서드 -Get
// 불러오니까 Url - /players
playersRouter.get('/api/players', (req, res) => {
  res.json(players);
});
// 선수 생성하기 -Create
// 생성하니까 메서드 - Post
// 생성하니까 Url - /players
playerRouter.post('/api/players', (req, res) => {
  // 데이터 받기
  // 보내는사람 req를 쓰자
  // req.body

  const { name, speed, grade } = req.body;
  //   players.push({ name: req.name, speed: req.speed, grade: req.grade });
  players.push({ name, speed, grade });
  res.json(players);
});

// 특정 선수 데이터 삭제
playersRouter.delete('/api/players/:name', (req, res) => {
  // filter 사용 - 그 선수가 아닌 사람들만 찾아내기
  const { name } = req.params;
  const _players = players.filter((player) => {
    return player.name !== name;
  });
  console.log(_players);
  res.json(_players);
});

playersRouter.patch('/api/players/:name', (req, res) => {
  const { name } = req.params;
  const { grade, speed } = req.body;
  // 이름으로 선수를 검색하고 확인
  // 선수가 없으면 없다고 응담
  // 선수가 있으면 업데이트
  const _players = players.filter((player) => {
    return player.name == name;
  });
  if (_players.length <= 0) {
    return res.status(404).json({ message: '찾는선수가없습니다.' });
  }
  const player = players.find((player) => {
    return player.name === name;
  });

  if (speed) {
    player.speed = speed;
  }
  if (grade) {
    player.grade = grade;
  }

  res.json(players);
});

export default router;
