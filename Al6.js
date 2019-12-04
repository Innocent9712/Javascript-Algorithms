// CHALLENGE 6: MISSING NUMBER


// Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.
// Explanation: You have an array of numbers 1 to 100 in an array.Only one number is missing in the array.
// The array is unsorted.Find the missing number.

function missingNumber(arr){
  var n = arr.length+1, 
  sum = 0,
  expectedSum = n* (n+1)/2;
  
  for(var i = 0, len = arr.length; i < len; i++){
    sum += arr[i];
  }
  
  return expectedSum - sum;
}

missingNumber([5, 2, 6, 1, 3]);