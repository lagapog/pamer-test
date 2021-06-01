function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // create a new array with both params
  const arrayMerged: number[] = [...nums1, ...nums2];
  // sort the array in ascending order
  arrayMerged.sort((a, b) => a - b);
  // save the lenght in a variable because we have to check this value many times
  const len: number = arrayMerged.length;
  // get the median
  const median: number = len % 2 === 0
      ? (arrayMerged[len/2] + arrayMerged[(len/2) -1]) / 2
      : arrayMerged[(len - 1)/ 2];
  return median;
};

// example 1: it should return ((4 + 8)/2) => 6
// you can use these lines to execute as many examples as you want.
// Just run `check-game-01` script when update the values
const arr1: number[] = [1, 3, 8];
const arr2: number[] = [12, 4, 8];
const median: number = findMedianSortedArrays(arr1, arr2);
console.log(median);