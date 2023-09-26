function squareArrayElements(arr) { 
    const squaredArray = [];

    for (let i = 0; i < arr.length; i++){
        const squaredValue = arr[i] * arr[i];
        squaredArray.push(squaredValue);
    }
return squaredArray
}

const myArray = [1, 6, 3, 12];
const squaredResult = squareArrayElements(myArray);
console.log(squaredResult);