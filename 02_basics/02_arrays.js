const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Batman","Flash"]

//as we know array me sabhi trha ka data a sakta he to jese hi hum ek array ko doosre array me push krenge to output me array ke ander array a jaega
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros.at(3)); // index no 3 par jo element he
console.log(marvel_heros[3]); // index no 3 par jo element he
console.log(marvel_heros[3][1]); // index no 3 ke 1 par jo element he

arr1 = [1,2,3]
arr2 = [4,5]
let arr3 = arr1.concat(arr2) // ye array ke ander array nahi dega balki new array bna dega
console.log(arr3);
