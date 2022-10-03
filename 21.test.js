import { createLinkedListNode } from "./data-structures/linked-list";
import { mergeTwoLists } from "./21";

test("merge [1, 2, 3] and [4, 5, 6]", () => {
  const node1 = createLinkedListNode([1, 2, 3]);
  const node2 = createLinkedListNode([4, 5, 6]);
  const result = createLinkedListNode([1, 2, 3, 4, 5, 6]);

  expect(mergeTwoLists(node1, node2)).toEqual(result);
});
