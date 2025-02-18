// [함수 알아보기]

// 함수는 특정 작업을 수행하는 코드 블록입니다.
// 코드의 재사용성과 가독성을 높여줍니다.

// 예시 1: 매개변수가 없는 함수
function sayHello() {
    console.log('예시 1: 안녕하세요!');
  }
  
  // 함수 호출
  sayHello();
  
  // 예시 2: 매개변수가 있는 함수
  function greet(name) {
    console.log('예시 2: 안녕하세요, ' + name + '님!');
  }
  
  greet('홍길동'); // 홍길동 -> 인자 라고부른다.
  
  // 예시 3: 값을 반환하는 함수
  function add(a, b) {
    return a + b;
  }
  
  const sum = add(10, 5);
  console.log('예시 3: 합계 - ' + sum);
  
  // 예시 4: 함수 표현식
  // 함수 표현식은 함수를 변수에 할당하여 하나의 값처럼 사용하는 방식이기 때문에 표현식이라고 부릅니다.
  const multiply = function (a, b) {
    return a * b;
  };
  
  const result = multiply(4, 5);
  console.log('예시 4: 곱하기 결과 - ' + result);
  
  // 예시 5: 화살표 함수 (ES6부터 지원) //둘다 같다
  const divide = (a, b) => {
    return a / b;
  };
  function divide(a, b) {
    return a / b;
  };

  const quotient = divide(20, 4);
  console.log('예시 5: 나누기 결과 - ' + quotient);
  
  // 예시 6: 재귀 함수
  function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const factResult = factorial(5);
  console.log('예시 6: 팩토리얼 결과 - ' + factResult);
  