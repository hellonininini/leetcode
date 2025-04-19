var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q || p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// class TreeNode {
//     constructor (val, left, right) {
//         this.val = val === undefined ? 0 : val;
//         this.left = left === undefined ? null : left;
//         this.right = right === undefined ? null : right;
//     }
// };
// let n1 = new TreeNode(1);
// let n2 = new TreeNode(2);
// let n3 = new TreeNode(3);
// let m1 = new TreeNode(1);
// let m2 = new TreeNode(2);
// let m3 = new TreeNode(3);
// n1.left = n2;
// n1.right = n3;
// m1.left = m2;
// m1.right = m3;
