
// 1 ======= 153

// let arr = [7, 10, 5, 3, 2]
// let nat = 0

// for (let i = arr.length; i > 0; i--) {
//   if (arr[i] % 2 == 0) {
//     console.log(i);
//     nat += 1
//   }
// }

// console.log("Jami: >>", nat);



// 2 ======= 154

// let arr = [7, 10, 5, 3, 2]
// let k = 2

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j % k == 0; j++) {
//     console.log(arr[j]);
//   }
// }



// 3 ======= 155

// let arr = [7, 10, 5, 3, 2]
// let k = 2

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j % k == 0; j++) {
//     console.log(arr[j]);
//   }
// }



// 4 ======= 156

// let arr = [1, 2, 3, 10, -4, true]

// for (let i = arr.length; i > 0; i--) {
//   for (let j = i - 1; j % 2 != 0; j++) {
//     console.log(arr[j]);
//   }
// }



// 5 ======= 157

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



// 6 ======= 158

// let arr = [7, 10, 3, 2]

// for (let i = 0; i <= arr.length; i += 2) {
//   console.log(arr[i]);
// }



// 7 ======= 159

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



// 8 ======= 160

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



// 9 ======= 161

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



// 11 ======= 163

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


// 12 ======= 164

// let arr = [11, 14, 17, 20, 23]
// let natija = 0;

// natija = Math.abs(arr[0] - arr[1])
// let n = arr[1]

// for (let i = 2; i < arr.length; i++) {
//   if (n + natija == arr[i]) {
//     n = arr[i];
//   } else {
//     natija = false
//   }
// }

// console.log(natija);



// 13 ======= 165

// let arr = [2, 6, 18]
// let natija = 0;

// natija = arr[1] / arr[0]
// let n = arr[1]

// for (let i = 2; i < arr.length; i++) {
//   if (n * natija == arr[i]) {
//     n = arr[i];
//   } else {
//     natija = false
//   }
// }

// console.log(natija);



// 14 ======= 166

// let arr = [5, -3, -2, 5, -10, 12, -4, 3, -5]
// let natija = 0

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0 && arr[i] < 0) {
//     natija = i
//     break
//   } else if (i % 2 != 0 && arr[i] > 0) {
//     natija = i
//     break
//   } else {
//     natija = true
//   }
// }

// console.log(natija);



// 15 ======= 167

// let arr = [1, -3, 12, -1, 3, -4, -2, 1, -7]
// let natija = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0) {
//     natija += arr[i]
//   }
// }

// console.log(natija);



// 16 ======= 168

// let arr = [1, -3, 12, -1, 3, -4]
// let natija = 0;


// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1] && arr[i] > 0) {
//     console.log(i);
//     natija += 1
//   }
// }

// console.log("Natija ->>", natija);



// 17 ====== 169

// let arr = [-2, 5, -10, 12, 3, -4, -5]
// let natija = 0;


// for (let i = arr.length; i >= 0; i--) {
//   if (arr[i] > arr[i + 1]) {
//     console.log(arr[i]);
//     natija += 1
//   }
// }

// console.log("Natija ->>", natija);



// 18 ====== 170

// let arr = [1, 3, -10, 8, 5, 6]
// let R = 5
// let arr1 = []
// let arr2 = []
// let natija = 0


// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < R) {
//     arr1[arr1.length] = arr[i]
//     let n = arr1[0]
//     for (let j = 0; j < arr1.length; j++) {
//       if (n <= arr[j]) {
//         natija = arr[j]
//       }
//     }
//   } else if (arr[i] > R) {
//     arr2[arr2.length] = arr[i]
//     let n = arr2[0]
//     for (let k = 0; k < arr2.length; k++) {
//       if (n >= arr[k]) {
//         natija = arr[k]
//       }
//     }
//   }
//   else {
//     natija = arr[i]
//   }
// }

// console.log(natija);
// console.log(arr1);
// console.log(arr2);