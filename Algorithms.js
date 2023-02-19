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


Sorting algorithms
Bubble sort   Insertion sort   Quick sort 


Bubble Sort 
Given an array of integers, sort the array. it can be ascending or descending
example
const arr = [-6, 20, 8, -2, 4]
should return -6, -2, 4, 8 ,20 


How does it work:
Compare adjacent elements in the array and swap the positions if they are not in the intended order. 
Repeat the instruction as you step through each element in the array

Repeat the instruction as you step through each element in the array

Once you step through the whole array with no swap, the array is sorted

example [-6 20 8 -2 4]
 
[-6 20 8 -2 4] -> [-6 8 20 -2 4] swap since 20>8
[-6 8 20 -2 4] -> [-6 8 -2 20 4] swap since 20>-2
[-6 8 -2 20 4] -> [-6 8 -2 4 20] swap since 20>-4
end of array. Element swapped? Yes. Repeat the comparison.

[-6 8 -2 4 20]
[-6 8 -2 4 20] -> [-6 -2 8 4 20] Swap since 8>-2
[-6 -2 8 4 20] -> [-6 -2 4 8 20] Swap since 8> 4
[-6 -2 4 8 20]
end of array. Elements swapped? Yes. Repeat comparison. If all elements are in the right place we reach the end of the array.
Element swapped? No. Array is sorted.

function bubble(arr) {
    let swapped
    do {
        swapped = false
    for(let i= 0; i<arr.length -1; i++) {
        if(arr[i]> arr[i+1]) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
  } while(swapped)
}

const arr = [8, 20, -2, 4, -6]
bubble(arr)
console.log(arr)
 
 BigO = O(n^2) due to a nested for loop within a loop


 
 Insertion sort
 
 Same idea, however this works differently
 
 Virtually split the array into a sorted and unsorted part
 
 Assume that the first element is already sorted and remaining elements are unsorted
 
 Select an unsorted element and compare with all elements in the sorted part

 If the elements in the sorted part is smaller than the selected elelement, proceed to the net element in the unsorted part.
 Else , shift larger elements in the sorted part towards the right.

 Insert the selected element at the right index.
 
 Repeat till all the unsorted elelments are placed in the right order.

function ins(arr) {
    for(let i=1; i < arr.length; i++) {
    let numberToInsert =arr[i]
    let j = i -1
    while(j >= 0 && arr[j] > numberToInsert) {
        arr[j+1] = arr[j]
        j = j-1
    }
    arr[j+1] = numberToInsert
  }
}  
const arr = [8, 20, -2, 4, -6]
ins(arr)
console.log(arr)

Big-O = O(n^2)
 
 
 Quick Sort
 
 Indentify the pivot element in the array
 Pick first element as pivot
 Pick last element as pivot (what we'll do)
 Pick a random element as pivot
 Pick median as pivot
 
 Put everything that's smaller than the pivot into a left array and everything greater than pivot into a right array.
 Repeat the process for the individual left and right arrays till you have an array of length 1 which is sorted by definition
 Repeatedly concatenate the left array, pivot and right array till one sorted array remains
 
                             
 function quick(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quick(left), pivot, ...quick(right)];
}

 //worst case Big-O = O(n^2)
 //avg case O(nlogn)
 The quick function takes an array arr, and uses the last element of the array as a pivot to partition the array into two subarrays. 
 The function then recursively sorts the left and right subarrays using the same partitioning and sorting steps, and combines the results with the pivot element to produce the final sorted array.
