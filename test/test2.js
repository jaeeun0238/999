function solution(n) {
  let str = n.toString();

  let answer = [];
  for (let i = 0; i < str.length; i++) {
    answer.push(Number(str[i]));
    // console.log(answer);
  }
  answer.sort(function (a, b) {
    return b - a; //오름차순 a - b (양수) 내림차순 b - a(음수)
  });

  const arrToStr = answer.join(''); // 다 연결시키는 녀석..!
  const strToNum = Number(arrToStr);
  return strToNum;
}

const n = solution(6721);
console.log(n);
//const arr = [2, 3, 6, 7];

// a : 왼쪽
// b : 오른쪽
// arr.sort((a, b) => {
//   // a = 1
//   // b = 2
//   // a - b = -1
//   return a - b;
//   if (a < b) return 양수;
//   if (a > b) return 음수;
// });

// a = 2
// b = 3
// // b - a = 3 - 2 = 1
// arr.sort((a, b) => b - a);

// console.log(arr);
