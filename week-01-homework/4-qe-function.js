// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function addNumber(number1, number2) {
    
    return number1 + number2;
    
}
console.log(addNumber(100,200));
// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
console.clear();
function greet(name){
    console.log('안녕하세요, ${name}님!')
}
greet('홍길동');
// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function returnMaxValue(number1, number2 , number3) {
    let max = number1;
    if (number2 > max) {
        max = number2
    }
    if (number3 > max) {
        max = number3
    }

    return max;
    
}
console.log(returnMaxValue(10,100,20));
// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function isEven(n){
    if(n%2===1){
        return('홀수');
    }
    else{
        return('짝수');
    };
}
console.clear();
console.log(isEven(35));

// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
function print(array) {
    for ( let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    
}
console.clear();
print(['강아지', '고양이', '알파카']);