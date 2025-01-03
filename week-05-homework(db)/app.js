import express from 'express';

const app = express();
app.use(express.json()); // body를 json으로 변환

const PORT = 3000;

app.listen(PORT, () => {
  console.log('서버시작');
});

