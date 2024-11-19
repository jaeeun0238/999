// [데이터 타입 연습 문제]

// 문제 1: 자신의 이름과 나이를 변수에 저장하고 출력하세요.
const name = '유재은';
const age = 24;
console.log(name);
console.log(age);

// 문제 2: 불리언 값을 저장하는 변수를 만들고 출력하세요.

const isBoolean = false;
console.log(isBoolean);

// 문제 3: null과 undefined의 차이를 콘솔로 확인하세요.

let address;
console.log(address);

const empty = null;
console.log(empty);

// 힌트:
// var undefinedVar;
// var nullVar = null;
// 두 변수를 console.log로 출력하고, typeof 연산자를 사용하여 타입을 확인해보세요.

var undefinedVar;
var nullVar = null;
console.log(typeof undefinedVar);
console.log(typeof nullVar);

// 문제 4: 좋아하는 음식 3가지를 배열에 저장하고 첫 번째 음식을 출력하세요.

const food = ['마라탕', '치킨', '회'];

console.log(food[0]);


// 문제 5: 사람의 정보를 객체로 만들어 이름과 나이를 저장하고 출력하세요.

const person = {
    name: '홍길동',
    age: 50
};
console.log(person.name);
console.log(person.age);
