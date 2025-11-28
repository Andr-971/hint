
import array from "./array.js";

// Длина массива
let chunk = 4;
let linghtArray = array.length;
// console.log(linghtArray);
let remains = linghtArray % chunk;
// console.log(remains);


function splitArray(array, n) {
    let chunks = [],
        i = 0,
        n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
}
function chunkArray(arr, chunk) {}

// const res = chunkArray(array, chunk);
// console.log(res);
// const perChunk = 4 // items per chunk    
// const inputArray = array
// const result = inputArray.reduce((resultArray, item, index) => { 
//     const chunkIndex = Math.floor(index/perChunk)

//     if(!resultArray[chunkIndex]) {
//         resultArray[chunkIndex] = [] // начать новый кусок
//     }
//     resultArray[chunkIndex].push(item)
//     return resultArray
// }, [])
// console.log(result); // result: [['a','b'], ['c','d'], ['e']]
// function chunkArray(arr, chunk) {

// }
function chunkAr(arr, len) {
    var chunks = [],
        i = 0,
        n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
}
console.log(chunkAr(array, 4));
// При желании вы можете сделать следующее, чтобы не загромотить пространство глобальных имен:
// Array.chunk = chunk;
