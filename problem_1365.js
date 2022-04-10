// memory too large
const smallerNumbersThanCurrent = function(nums) {
    const sortArr = [...nums].sort((a, b) => {return a - b;});
    const arr = [];
    const indexMap = {};
    sortArr.forEach((num, index) => {
        if (!indexMap.hasOwnProperty(num)) {
            indexMap[num] = index; 
        }
    });
    for (let i = 0; i < nums.length; i++) {
        arr.push(indexMap[nums[i]]);
    }

    return arr;
};