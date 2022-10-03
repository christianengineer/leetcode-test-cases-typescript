import { createLinkedListNode } from "./data-structures/linked-list";
import { mergeTwoLists } from "./21";

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
