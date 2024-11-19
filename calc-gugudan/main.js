import readlineSync from "readline-sync";

//시작
function main() {
  console.log("1번. 사칙연산, 2번. 구구단 출력");
  const choice = readlineSync.question("숫자를 입력해주세요 :");

  switch (choice) {
    case "1":
      calculator();
      break;
    case "2":
      printMultiplicationTable();
      break;
    default:
      console.log("잘못 눌렀습니다. 프로그램 종료");
      calculator();
      break;
  }
}

// 사칙연산

function calculator() {
  //사칙연산 시작
  console.log("사칙 연산을 시작합니다.");
  // 연산자 설정후 입력할 첫번째 숫자와 두번째 숫자
  const calculate = readlineSync.question("+, -, *, / 중에 선택하세요.");
  const number1 = readlineSync.question("첫 번째 숫자를 입력하세요.");
  const number2 = readlineSync.question("두 번째 숫자를 입력하세요.");

  //사칙연산 계산식

  switch (calculate) {
    case "+":
      console.log(+number1 + +number2);
      break;
    case "-":
      console.log(+number1 - +number2);
      break;
    case "*":
      console.log(+number1 * +number2);
      break;
    case "/":
      console.log(+number1 / +number2);
      break;
    default:
      console.log("잘못 입력하셨습니다.");
      break;

    //vs코드에서 프리티어 사용하기
  }
}

function calculator() {
  console.log("사칙연산 시작");
  const operator = readlineSync.question("연산자를 선택하세요. +, -, *, /");
  const number1 = readlineSync.question("첫 번째 숫자를 입력해주세요 :");
  const number2 = readlineSync.question("두 번째 숫자를 입력해주세요 :");

  switch (operator) {
    case "+":
      console.log(Number(number1) + Number(number2));
      break;
    case "-":
      console.log(Number(number1) - Number(number2));
      break;
    case "*":
      console.log(Number(number1) * Number(number2));
      break;
    case "/":
      console.log(Number(number1) / Number(number2));
      break;

    default:
      console.log("연산자를 잘못 선택하셨습니다.");
      break;
  }
}
//구구단출력
function printMultiplicationTable() {
  console.log("구구단 시작");
  for (let i = 2; i <= 9; i++) {
    console.log("");
    console.log(`${i}단`);
    for (let j = 1; i <= 9; i++) {
      console(`${i} * ${j} = ${i * j}`);
    }
  }
}
//실행
main();
