const bubleSort = function (nums) {
  let temp;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

const bubleSortRecursive = function (nums, n) {
  if (n <= 0) return;
  let temp;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      temp = nums[j];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
    }
  }
  bubleSortRecursive(nums, n - 1);
  return nums;
};

let nums = [3, 2, 1, 4];
console.log(bubleSort(nums));
console.log(bubleSortRecursive(nums, nums.length - 1));
