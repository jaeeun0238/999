// const primise = new Promise{(resolve, reject)} => {
//     const randomNumber = Math.random();
// const momChickenPromise1 = new Promise{(resolve, reject) => {
//     const randomNumber = Math.random();
//     if(randomNumber<0.5) {
//         resolve("사왔음!");
//     }else{
//         reject("안사옴...")
//     }
// }

// function momChickenPromise2 (){
//     return new Promise((resolve,reject) => {

//     });
// }
// momChickenPromise1()
// .then ((message) => console.log(message));
// // .catch ((error) => console.log(error));

const findTreasure = new Promise((resolve, reject) => {
  setTimeout(() => {
    let random = Math.random();
    if (random < 0.1) {
      resolve('성공');
    } else {
      reject('실패');
    }
  }, 3000);
});

findTreasure
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
