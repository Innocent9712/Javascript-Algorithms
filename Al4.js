// CHALLENGE 4: Fast Minimum In Rotated Array

// We're given an array of integers that looks like the following:

// [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Let's imagine we're an assembly line and we decide to shift some workers around.

// Say we take our array, and rotate it at a random pivot so that the section after the pivot comes before. Let's put our pivot between 5 and 6:

// [6, 7, 8, 0, 1, 2, 3, 4, 5]

// See how it shifts?

// Can you find the smallest element in O(log n) time? Assume that there are no repeat numbers.

// Here are some other examples: given [4, 5, 1, 2, 3], we'd get 1.

function getMinimum(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    // Is this section sorted? If so, the left-hand
    // number must be the original first element and
    // thus the minimum.
    if (numbers[left] < numbers[right]) {
      return numbers[left];
    }

    let midpoint = Math.floor((left + right) / 2);

    if (numbers[midpoint] >= numbers[left]) {
      // The midpoint is higher; keep searching in
      // the right-hand side.
      left = midpoint + 1;
    } else {
      // The midpoint is lower; keep searching in
      // the left-hand side.
      right = midpoint;
    }

    // Eventually left will = right.
  }

  return numbers[left];
}
console.log(getMinimum([2, 3, 4, 5, 6]));