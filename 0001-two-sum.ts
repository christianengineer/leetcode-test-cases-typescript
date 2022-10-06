// Proposed solution before coding:
// We're going to iterate through the number array, and on each number,
// we are going to subtract the target - currentNumber, and we're going to store that result in a map.
// The reason we are storing this difference in a map, is because if the next number on the number array is the same
// as the difference, then we have found the two numbers that equal to the target.
// We return the index of the currentNumber and the index of the difference,
// this is why we will be storing the difference as a key,value pair {"difference": "index"}

// Time complexity: O(n)
// Why: We are iterating through the given number array only once

// Space complexity: O(n)
// Why: We are creating a map that can only be as big as the given number array.

export const twoSum = (numbers: number[], target: number) => {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const diff = target - num;

    if (map.has(diff)) return [map.get(diff), i];

    map.set(num, i);
  }

  return [];
};

// Find Bug:
// Which line of code can be changed so that this solution can be optimized?
export const twoSumNonOptimized = (
  nums: number[],
  target: number
): number[] => {
  let indices: { [key: string]: number } = {};
  let response: number[] = [];

  for (let [index, num] of nums.entries()) {
    const difference = target - num;

    if (indices[difference] !== undefined) {
      response = [index, indices[difference]!];
    } else {
      indices[num] = index;
    }
  }

  return response;
};
