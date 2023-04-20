
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */




function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
*/
const l1_node3 = new ListNode(3, undefined)
const l1_node2 = new ListNode(4, l1_node3)
const l1_node1 = new ListNode(2, l1_node2)

const l2_node3 = new ListNode(4, undefined)
const l2_node2 = new ListNode(6, l2_node3)
const l2_node1 = new ListNode(5, l2_node2)

const addTwoNumbers = function(l1, l2) {
  let carry = 0
  let previousNode =  new ListNode()
  const result = previousNode
  while (l1||l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0
    const sum = x+y+carry;
    carry = Math.floor(sum / 10);
    const newNode = new ListNode(0, undefined);
    newNode.val = sum%10;
    newNode.next = null;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
    previousNode.next = newNode;
    previousNode = previousNode.next;
  }
  if (carry>0) previousNode.next = new ListNode(carry, undefined);
  return result.next
};

console.log(addTwoNumbers(l1_node1, l2_node1))