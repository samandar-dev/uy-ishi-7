
// 1 =======

// let arr = [7, 10, 5, 3, 2]
// let nat = 0

// for (let i = arr.length; i > 0; i--) {
//   if (arr[i] % 2 == 0) {
//     console.log(i);
//     nat += 1
//   }
// }

// console.log("Jami: >>", nat);



// 2 =======

// let arr = [7, 10, 5, 3, 2]
// let k = 2

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j % k == 0; j++) {
//     console.log(arr[j]);
//   }
// }



// 3 =======

// let arr = [7, 10, 5, 3, 2]
// let k = 2

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j % k == 0; j++) {
//     console.log(arr[j]);
//   }
// }



// 4 =======

// let arr = [1, 2, 3, 10, -4, true]

// for (let i = arr.length; i > 0; i--) {
//   for (let j = i - 1; j % 2 != 0; j++) {
//     console.log(arr[j]);
//   }
// }



// 5 =======

// let arr = [7, 10, 5, 3, 2]
// let nat1 = 0

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0) {
//     console.log(arr[i]);
//   } else {
//     continue
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 != 0) {
//     console.log(arr[i]);
//   } else {
//     continue
//   }
// }



// 6 =======

// let arr = [7, 10, 3, 2]

// for (let i = 0; i <= arr.length; i += 2) {
//   console.log(arr[i]);
// }



// 7 =======

// let arr = [10, 12, 5, 3, 2, 10]
// let natija = 0

// for (let i = 0; i < arr.length; i++) {
//   if (arr[arr.length - 1] > arr[i]) {
//     natija = i
//     break
//   } else {
//     natija = "Mavjut emas"
//   }
// }

// console.log(natija);



// 8 =======

// let arr = [10, 12, 5, 11, 13, 15]
// let natija = 0

// for (let i = arr.length - 1; i > 0; i--) {
//   if (arr[arr.length - 1] > arr[i] && arr[0] < arr[i]) {
//     natija = i
//     break
//   } else {
//     natija = false
//   }
// }

// console.log(natija);


// 9 =======

// let arr = [5, 10, 3, 7, 10, 12, 4];
// let k = 0;
// let l = 4;
// let natija = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (l > i && i > k) {
//     natija += arr[i]
//   } else if (l == k) {
//     natija = 0
//   }
// }

// console.log(natija);



// 11 =======

// let arr = [5, 10, 3, 7, 10, 12, 4];
// let k = 0;
// let l = 4;
// let natija = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (l > i && i > k) {
//     continue
//   } else {
//     natija += arr[i]
//   }
// }

// console.log(natija);




// 14 =======

// let arr = [-2, 5, -10, 12, -4, 3, -5]
// let natija = 0

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0 && arr[i] > 0) {
//     natija = i
//     break
//   } else if (i % 2 != 0 && arr[i] < 0) {
//     natija = i
//     break
//   } else {
//     natija = true
//   }
// }

// console.log(natija);



// 15 =======

// let arr = [1, -3, 12, -1, 3, -4, -2, 1, -7]
// let natija = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0) {
//     natija += arr[i]
//   }
// }

// console.log(natija);