// [반복문 연습 문제]

// 문제 1: 1부터 10까지의 숫자를 출력하세요.
// i는 1이다.
// i 는 10까지 출력된다.
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// 문제 2: 1부터 10까지의 합을 계산하여 출력하세요.
// i+i+i+i...
let s = 0;
for(let i = 1; i <= 10; i++){
    s+=i;
}
// 문제 3: 구구단 3단을 출력하세요.
// n=3
// 9까지 반복하는 반복문
let n = 3;
for(let i = 1; i <= 9; i++){
    n*i;
    //console.log(n," x ",i ," = ", n*i);
    console.log(`${n} x ${i} = ${n*i}`);
}

// 문제 4: 배열에 저장된 과일들을 하나씩 출력하세요.
// var fruits = ['사과', '바나나', '포도'];
let fruits = ['사과', '바나나', '포도'];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
for(let i = 1; i < fruits.length; i++){
    console.log(fruits[i]);

}

// 문제 5: while문을 사용하여 5부터 1까지 역순으로 출력하세요.

// const arr= [1,2,3,4,5];
// const reverseArr = arr.reverse();

// console.log(reverseArr);

let count = 5;
while (count<0) {
    console.log(count);
    count--;
}
