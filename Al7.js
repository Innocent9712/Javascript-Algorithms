// CHALLENGE 7:LONELY NUMBER

// In a given array of numbers, one element will show up once and the rest will show up twice.
// Can you find that number in O(n) linear time ?

// lonelyNumber([4, 4, 6, 1, 3, 1, 3])
// // 6

// lonelyNumber([3, 3, 9])
// // 9

var lonelyNumber = function(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      delete obj[arr[i]];
    } else {
      obj[arr[i]] = true;
    }
  }
  return Object.keys(obj)[0];
};
lonelyNumber([11, 22, 22, 33, 33, 33]);