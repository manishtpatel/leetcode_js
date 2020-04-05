/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let reminder = 0

    // Assuming both numbers are of same length
    while (true) {
        let vall1 = l1.val()
        let vall2 = l2.val()

        let vall3 = vall1 + vall2

        if (val3 >= 10)
            reminder = 1

        let nextl1 = l1.next()
        let nextl2 = l2.next()

        if (nextl1 === null || nextl2 === null){
            break
        }
    }
};