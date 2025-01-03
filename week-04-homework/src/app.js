// esm 모듈 방식
import express from 'express';
import playersRouter from '../routes/player.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', playersRouter);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요');
});
