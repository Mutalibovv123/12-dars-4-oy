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

// function musbatSonlar(array) {
//     let res = [];
//     for (let i = 0; i < array.length; i ++) {
//         if (array[i] > 0) {
//          res.push(array[i])
//         }
//     }
//     return res
// }
// let array = [1,2,3,4,5,6,-7];
// let res = musbatSonlar(array);
// console.log(res);


// 8-masala

// function yangiMassivgaQiymatQoshish(massive, element) {
//     let res =[];
//     for(let i = 0; i < massive.length; i++) {
//         res.push(massive[i] + element);
//     }
//     return res;
// }

// 9-masala

// function musbatAndManfiy(arr) {
//     let resForManfiy = [];
//     let resForMusbat = [];
//     for (let i = 0 ; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             resForMusbat.push(arr[i])
//         } 
//         if (arr[i] < 0) {
//             resForManfiy.push(arr[i]);
//         }
//     }

//     return resForManfiy
//     return resForMusbat
// }

// 10-masala

// function changeValue(massive) {
//     let res =[];
//     for(let i = 0; i < massive.length; i++) {
//         res.push(Number(massive[i]))
//     }
//     return res;
// }

// 11-masala

// function average(arr) {
//     let sum = 0;
//     let res =[];
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
      
//     }
//     return sum / arr.length
// }

// 12-masala

// let res =[];
// function oddAndEven(arr) {
//     let res1 = []
//     let res2 = []
//     for(let i = 0; i < arr.length; i ++) {
//         if (arr [i] % 2 == 1) {
//             res1.push(arr[i]);
//         }
//         if (arr [i] % 2 == 0) {
//             res2.push(arr[i])
//         }
//     }
// }

// 13-masala

// function deleteValues(massive) {
//     let res =[];
//     for(let i = 0; i < massive.length; i++ ) {
//         res.push(massive[i])
//         res.pop()
//     }
//     return res
// }

// 14-masala

// function massiveniOshirish(massive) {
//     let res = [];
//     for(let i = 0; i < massive.length; i++) {
//             massive [i] ** 2
//             res.push(massive[i])
//     }
// }

// 15-masala


// function massiveniIkkiMartaOshirish(massive) {
//     let res = [];
//     for(let i = 0; i < massive.length; i++) {
//             massive [i] ** 2
//             res.push(massive[i])
//     }
// }

// 16-masala

// function deleteValues(arr) {
//     let res =[];
//     for (let i = 0; i < arr.length; i ++) {
//         if (arr[i] !== undefined) {
//             res.push(arr[i])
//         }
//         if (arr [i] !== null) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// 17-masalada ozgina qiynaldim

// 18-masala

// function theNumberOfElement(arr, element) {
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (element == arr[i]) {
//             counter ++
//         }
//     }
//     return counter
// }

// 19-masala

// function addElements(massive, elements) {
//     let average = Math.floor(massive.length / 2);
//     massive.splice(average, 0, elements)
//     return massive
// }

// 20-masala

// function stringniTartiblash(massiv) {
//     return massiv.sort((a, b) = a.length - b.length);
//    }

// 21-masala

// function longMassive(massive) {
//     let long = massive[0].length
//     for (let i = 0 ; i < massive.length; i++) {
//         if (long.length > massive[i].length) {
//             long = massive [i]
//         }
//     }
//     return long
// }

// 22-masala

// function vergulBilanAjratish(massive) {
//  return massive.join(", ")
// }

// 23-masala

// function onlyNumberElements(massive) {
//     let res = [];
//     for (let i = 0; i <massive.length; i++) {
//         if (typeof massive[i] === "number") {
//             res.push(massive[i]);
//         }
//     }
// }

// 24-masala

// function ntaElementQaytarish(massive, n) {
//     return massive.slice(massive.length - n);
//   }























