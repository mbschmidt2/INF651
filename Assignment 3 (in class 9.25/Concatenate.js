function concatenateArrays(arr1, arr2) { 
    const concatenatedArray = arr1.concat(arr2);
    return concatenatedArray;
}
const array1 = [2, 4, 6];
const array2 = [8, 10, 12];
const concatenatedResult = concatenateArrays(array1, array2);
console.log(concatenatedResult);