const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

// myFindIndex 를 구현하여 arr.findIndex 와 동일한 값이 나오도록 하기.
function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i; // index값!
    }
  }
  // myFindIndex 구현
}

const result1 = objArray.findIndex(function (obj) {
  return obj.name === "banana";
});

const result2 = myFindIndex(objArray, function (obj) {
  return obj.name === "banana";
});
console.log(result1 === result2); // true
// result1 = 1 result2= 1 고로 true