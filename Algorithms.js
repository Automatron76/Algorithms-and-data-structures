Recursion

Given a number n find the nth element of the Fibonacci sequence
 
function fib(n) {
    if ( n < 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
 }
 
 Big-O = O(n) linear   iterative solution
 Big-O = O(2^n) exponential   recursive solution
 
 
 Give an integer n, find the factorial of that integer
 
  function fact(n) {
    if ( n === 0) {
        return 1
    }
    return fact n * (n-1)
 }
 
 Big-O = O(n) linear  recursive solution
 
 --------------------------------------

Search algorithms
Linear search    Binary search   Recursive binary search
 

Linear
Given an array of n elements and a target element t find the index of t in the array. Return -1 if the target element is not found.

example

arr = [-5, 2, 10, 4,6] t=10 -> should return 2

function arr(arr, t) {
    for ( i = 0; i < arr.length; i++)
     if(arr[i] === t) {
         return i
     }
     return -1
}

 console.log(arr([1,2,3,4,5], 3))
 //Big-O = O(n) linear  recursive solution



Binary search  --> binary search works only on sorted arrays
given a sorted array of n elements and a target element t, find the index of t in the array.
Return -1 if the target element is not found 

example

arr =[-5,2,4,6,10], t=10 -> should return 4
arr =[-5,2,4,6,10], t=6 -> should return 4

Binary search pseudocode

1)If the array is empty, return -1 as the element cannot be found. 
2)If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index.

3)If target is less than the middle element, binary search left half of the array.
4)If target is greater than middle element, binary search right half of the array.

function arr(arr, t) {
   let leftIndex = 0
   let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2) //since the middle can be a decimal, we use Math.floor per arrotondare
        if(t === arr[middleIndex]) {
            return middleIndex
        }
        if(t < arr[middleIndex]) {
            rightIndex = middleIndex -1
        } else {
            leftIndex = middleIndex +1 
        }
    }
    return -1
}


 console.log(arr([1,2,3,4,5], 3))
 //Big-O = O(logn) log because we have one while loop and every iteration we reduce the input size by half

Recursive binary search

function arr(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}


 console.log(arr([1,2,3,4,5], 3))

//Big-O = O(logn) log because we have one while loop and every iteration we reduce the input size by half
