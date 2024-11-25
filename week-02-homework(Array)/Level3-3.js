const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

// filter 를 이용하여 price가 200 이상인 객체 filter

const result = objArray.filter(function (item) {
  // console.log(item);
  return item.price >= 200;
});
console.log(result);
