function sumArrayElements(arr) {
    let total = 0;
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}
return total;
}
const myArray = [2, 4, 6, 8, 10];
const result = sumArrayElements(myArray);
console.log(result);