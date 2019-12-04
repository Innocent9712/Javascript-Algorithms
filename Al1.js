// // Contigeous sub-array sum

// Given an array of numbers, return true if there is a contiguous subarray that sums up to a certain number n.
// const arr = [1, 2, 3], sum = 5
// subarraySum(arr, sum)
// // true

// const arr = [11, 21, 4], sum = 9
// subarraySum(arr, sum)
// // false
// In the above examples, 2, 3 sum up to 5 so we return true. On the other hand, no subarray in [11, 21, 4] can sum up to 9

function subArraySum(arr, n) {
  var obj = {};
  var currentSum = 0;

  for (var i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum == n) {
      return [true, 0, i];
    }
    obj[currentSum] = i;

    if (obj.hasOwnProperty(currentSum - n)) {
      return [true, obj[currentSum - n] + 1, i];
    }

    console.log(obj);
  }
  return false;
}

subArraySum([1, 4, 20, 3, 10, 5], 13);