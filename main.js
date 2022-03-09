
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

// let arr = [1, 3, -10, 8, 5]
// let R = 5
// let arr1 = []
// let arr2 = []
// let natija = 0
// let n = 0
// let nn = 0


// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < R) {
//     arr1[arr1.length] = arr[i]
//     n = arr1[0]
//     for (let j = 0; j < arr1.length; j++) {
//       if (n <= arr1[j]) {
//         natija = arr1[j]
//       }
//     }
//   } else if (arr[i] > R) {
//     arr2[arr2.length] = arr[i]
//     nn = arr2[0]
//     for (let k = 0; k < arr2.length; k++) {
//       if (nn >= arr2[k]) {
//         natija = arr2[k]
//       }
//     }
//   }
//   else {
//     natija = arr[i]
//   }
// }

// console.log(n);
// console.log(nn);

// if (n == nn) {
//   natija = n
//   console.log(natija);
// }
// else if (n + R <= nn) {
//   natija = n
//   console.log(natija);
// } else if (n + R > nn) {
//   natija = nn
//   console.log(natija);
// }

// console.log(natija);
// console.log(arr1);
// console.log(arr2);



// 19 ======= 171

// let arr = [1, -10, 2, 1, 2, 5]
// let arr1 = []
// let natija = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = arr.length; j > i; j--) {
//     if (arr[i] == arr[j]) {
//       console.log(arr[j]);
//       // arr = arr.pop(j)
//     }
//   }
// }

// console.log(arr);



// 20 ======= 172

// let arr1 = [true, -5];
// let arr2 = [2, null];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (i == j) {
//       let n = arr1[i]
//       arr1[i] = arr2[j]
//       arr2[j] = n
//     }
//   }
// }

// console.log("arry1 ->", arr1);
// console.log("arry2 ->", arr2);



// 21 ======= 173

// let arr = [2, 5, 6, 4, 4]
// let arr2 = []

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 5) {
//     arr2[arr2.length] = (2 * arr[i]);
//   } else {
//     arr2[arr2.length] = arr[i] / 2;
//   }
// }

// console.log(arr2);



// 22 ======= 174

// let arr1 = [10, - 8]
// let arr2 = [5, 1]
// let arr3 = []

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] > arr2[i]) {
//     arr3[arr3.length] = arr1[i]
//   } else {
//     arr3[arr3.length] = arr2[i]
//   }
// }

// console.log(arr3);



// 23 ======= 175

// let arr = [2,10,5,8,12]
// let arr2 = []

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     arr2[arr2.length] = arr[i]
//   }
// }

// console.log(arr2);



// 24 ======= 176

// let arr = [2, 10, 5, 8, 12]
// let arr2 = []
// let n = arr[0]

// for (let i = 1; i <= arr.length; i++) {
//   arr2[arr2.length] = n
//   let nat = n + arr[i]
//   n = nat
// }

// console.log(arr2);



// 25 ======= 177

// let arr = [2, 10, 5, 8, 12]
// let arr2 = []
// let n = 0

// for (let i = 0; i < arr.length; i++) {
//   n += arr[i]
// }

// let nat = n
// for (let i = 0; i < arr.length; i++) {
//   arr2[arr2.length] = nat
//   nat -= arr[i]
// }

// console.log(arr2);



// 26 ======= 179

// let n = 6;
// let natija = 0;

// let k1 = 0;
// let k2 = 1;

// for (let i = 0; i <= n - 1; i++) {
//   console.log(k2);
//   let a = k2
//   k2 = k1 + k2
//   k1 = a
// }



// 27 ====== 180

// let arr = [1, 12, 10, 5, 6, 7]
// let min = 0;
// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < arr[i]) {
//       min = arr[j]
//     }
//   }
// }

// console.log(min);