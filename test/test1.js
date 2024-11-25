function solution(n) {
  //1. n을 문자로 바꾼다.
  const str1 = n.toString();

  //2. 바꾼 문자를 for 문을 돌려서 새로운 배열에 넣어준다.
  const reverse = [];
  //       i = 4                4 >= 0  4-- -> 3
  //                            3 >= 0
  for (let i = str1.length - 1; i >= 0; i--) {
    //                  str1[4] -> '5' -> Number('5') -> 5 -> reverse.push(5)
    //                  str1[3]
    reverse.push(Number(str1[i]));
  }
  console.log(reverse);
  //3. for문을 거꾸로돌면서...
  return reverse;
}
const str1 = solution(12345);
