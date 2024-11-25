// myIndexOf를 구현하여 arr.indexOf와 동일한 값이 나오도록 하기.
const arr = ["a", "b", "c", "d", "e"];
function myIndexOf(arr, value) {
  // myIndexOf 구현
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
}

const index1 = arr.indexOf("d"); // 3
const index2 = myIndexOf(arr, "d"); // 3
console.log(index1 === index2); // true
