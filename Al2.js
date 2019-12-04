// CHALLENGE 2: Return largest numbers in an array
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// EG ==>>
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
// and
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
// Goodluck

// function largestOfFour(arr) {
//   var largestNumber = [0, 0, 0, 0];
//   for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
//     for (
//       var subArrayIndex = 0;
//       subArrayIndex < arr[arrayIndex].length;
//       subArrayIndex++
//     ) {
//       if (arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
//         largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
//       }
//     }
//   }
//   return largestNumber;
// }
// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]);

// function largestOfFour(mainArray) {
//   return mainArray.map(function(subArray) {
//     return subArray.reduce(function(
//       previousLargestNumber,
//       currentLargestNumber
//     ) {
//       return currentLargestNumber > previousLargestNumber
//         ? currentLargestNumber
//         : previousLargestNumber;
//     },
//     0);
//   });
// }
// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]);

function largestOfFour(mainArray) {
  // Step 1. Map over the main arrays
  return mainArray.map(function(subArray) {
    // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]

    // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
    return Math.max.apply(null, subArray);
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);