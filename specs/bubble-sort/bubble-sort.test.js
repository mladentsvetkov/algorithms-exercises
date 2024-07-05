/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

// 1. compare two items in an array that are next to each other
// 2. If they're out of order (that is, the larger one comes first in the array) swap them.
// 3. Then move forward one index, repeat 1. and 2.
// 4. Check if it is the end of the array
// 5. If yes, check if in this array traversal we did some swapping
// 6. If yes, start from the beginning of the array


function bubbleSort(nums) {
  let didSwap = true
  let arrayTraversalsCount = 0

  while(didSwap) {
    didSwap = false
    for(let i = 0; i < nums.length - arrayTraversalsCount; i++) {
      if(nums[i] > nums[i+1]) {
        const temp = nums[i+1]

        nums[i+1] = nums[i]
        nums[i] = temp
        didSwap = true
      }
    }
    arrayTraversalsCount++
  }

  return nums
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
test("bubble sort empty array", function () {
  const nums = [];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([]);
});
test("bubble sort odd elements array", function () {
  const nums = [5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
test("bubble sort all elements equal", function () {
  const nums = [5, 5, 5, 5];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([5, 5, 5, 5]);
});
// Additional tests
test("bubble sort single element array", function () {
  const nums = [1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1]);
});

test("bubble sort array with negative numbers", function () {
  const nums = [3, -1, 4, -1, 5, -9, 2, 6, 5];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([-9, -1, -1, 2, 3, 4, 5, 5, 6]);
});

test("bubble sort already sorted array", function () {
  const nums = [1, 2, 3, 4, 5];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5]);
});

test("bubble sort reverse sorted array", function () {
  const nums = [5, 4, 3, 2, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5]);
});

test("bubble sort array with duplicates", function () {
  const nums = [4, 2, 4, 3, 2, 1, 3, 4];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 2, 3, 3, 4, 4, 4]);
});

test("bubble sort large array", function () {
  const nums = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
  const sortedNums = bubbleSort([...nums]);
  expect(sortedNums).toEqual(nums.sort((a, b) => a - b));
});
