class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * 思路:
 *  1. 遞迴方式處理
 *  2. 左右子樹互換
 */
const invertTree1 = (root) => {
    if (root == null) {
        return root;
    }
    // const tmp = root.left;
    // root.left = invertTree(root.right);
    // root.right = invertTree(tmp);
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

    return root;
};

/**
 * 思路:
 *  1. DFS方式處理
 *  2. 如果有左右子樹就放進stack中待處理
 *  3. 處理stack中最後一個元素(深度優先)
 *  4. 迴圈跑到所有元素都處理完
 */
const invertTree2 = (root) => {
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (node != null && (node.left || node.right)) {
            stack.push(node.left, node.right);
            // const tmp = node.left;
            // node.left = node.right;
            // node.right = tmp;
            [node.left, node.right] = [node.right, node.left];
        }
    }

    return root;
};

// const n1 = new TreeNode(1);
// const n2 = new TreeNode(2);
// const n3 = new TreeNode(3);
// n1.left = n2;
// n1.right = n3;
