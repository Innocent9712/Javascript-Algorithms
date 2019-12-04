// CHALLENGE 10: FIBONACCI

// How do you get nth Fibonacci number?
// A series of numbers in which each number(Fibonacci number) is the sum of the two preceding numbers.
// The simplest is the series 1, 1, 2, 3, 5, 8, etc.


function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);  
}

fibonacci(12);