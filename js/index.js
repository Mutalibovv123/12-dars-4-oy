// 12-dars masalalari
// 1-masala
// function massivYigindilari(massive) {
//     let sum = 0;
//     for (let i = 0; i < massive.length; i ++) {
//         sum += massive[i];
//     }
//     return sum;
// }
// let sonlar = [1,2,3];
// let res = massivYigindilari(sonlar);
// console.log(res);

// 2-masala

// function smallValue(massive) {
//     let small = massive[0];
//     for (let i = 1; i < massive.length; i++) {
//         if (small > massive[i]) {
//            massive[i] = small;
//         }
//     }
//     return small
// }
// let arr = [1,2,3,4];
// let res = smallValue(arr);
// console.log(res);

// 3-masala

// function theLengthOfMassiveElements(massive) {
//     let res = [];
//     for (let i = 0; i < massive.length; i++) {
//         if (typeof massive[i] === 'string') {
//             res.push(massive[i].length); 
//         }
//     }
//     return res;
// }

// 4-masala

// function decreasingNumbers(massive) {
//     let res = []; 
//     for (let i = massive.length - 1; i >= 0; i--) {
//       res.push(massive[i]); 
//     }
//     return res;
//   }
  
//   let arr = [1, 2, 3];
//   let res = decreasingNumbers(arr);
//   console.log(res);

// 5-masala

// function collectMassives(arr1, arr2) {
//     let res = [];
//     res.push(arr1.concat(arr2))
//     return res
// }
// let array1 = [1,2,3,4,5,6];
// let array2 = ["salom", 'xayr'];
// let res = collectMassives(array1, array2);
// console.log(res);

// 6-masala

// function reverseMassive(massive) {
//     let res = [];
//     for (let i = massive.length - 1; i >= 0; i--) {
//       res.push(massive[i]); 
//     }
//     return res;
//   }
  
//   let arr1 = [1, 2, 3, 4];
//   let res = reverseMassive(arr1);
//   console.log(res);

// 7-masala

function musbatSonlar(array) {
    let res = [];
    for (let i = 0; i < array.length; i ++) {
        if (array[i] > 0) {
         res.push(array[i])
        }
    }
    return res
}
let array = [1,2,3,4,5,6,-7];
let res = musbatSonlar(array);
console.log(res);





