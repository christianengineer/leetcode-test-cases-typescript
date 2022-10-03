import { createLinkedListNode } from "./utils/linked-list";
import {
  mergeTwoLists,
  mergeTwoListsRecursive,
} from "./21-merge-two-sorted-lists";

const testCases = [
  [
    [1, 2, 3], // node1
    [4, 5, 6], // node2
    [1, 2, 3, 4, 5, 6], // expected result
  ],
  [
    [6, 6, 9],
    [0, 3, 5],
    [0, 3, 5, 6, 6, 9],
  ],
  [[], [0, 3, 5], [0, 3, 5]],
  [[1, 2], [], [1, 2]],
  [[], [], []],
  [[1], [1], [1, 1]],
  [null, [1], [1]],
  [[1], null, [1]],
  [null, null, null],
];

describe("mergeTwoLists", () => {
  test.each(testCases)(
    "node1 = %p, node2 = %p, expected result = %p",
    (testArray1, testArray2, testArrayResult) => {
      const node1 = createLinkedListNode(testArray1);
      const node2 = createLinkedListNode(testArray2);
      const expectedResult = createLinkedListNode(testArrayResult);
      const actualResult = mergeTwoLists(node1, node2);
      expect(actualResult).toEqual(expectedResult);
    }
  );
});

describe("mergeTwoListsRecursive", () => {
  test.each(testCases)(
    "node1 = %p, node2 = %p, expected result = %p",
    (testArray1, testArray2, testArrayResult) => {
      const node1 = createLinkedListNode(testArray1);
      const node2 = createLinkedListNode(testArray2);
      const expectedResult = createLinkedListNode(testArrayResult);
      const actualResult = mergeTwoListsRecursive(node1, node2);
      expect(actualResult).toEqual(expectedResult);
    }
  );
});
