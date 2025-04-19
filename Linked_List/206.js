/**
 * 思路:
 *  第一個head指向null，其他node往前上一層指
 *  保存head.next資料，後面會被覆蓋
 *  先定義node.next再將node補回prev中
 *  往node下一層繼續操作直到遇到null
 */
const reverseList = (head) => {
    if (head === null || head.next === null) {
        return head;
    }
    let prev = null;
    let tmp = null;
    while (head) {
        tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }

    return prev;
};

// class Node {
//     constructor(data, next = null) {
//         this.next = next;
//         this.data = data;
//     }
// }
// let n1 = new Node(1);
// let n2 = new Node(2);
// let n3 = new Node(3);
// n1.next = n2;
// n2.next = n3;
