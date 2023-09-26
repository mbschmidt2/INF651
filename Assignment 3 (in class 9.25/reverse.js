function reverseArray(arr) {
    const reversedArray = arr.slice().reverse();
    return reversedArray;
  }
  const originalArray = [2, 4, 6, 8, 10];
  const reversedArray = reverseArray(originalArray);
  console.log(reversedArray);