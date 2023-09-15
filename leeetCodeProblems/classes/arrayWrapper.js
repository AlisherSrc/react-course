var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.length !== 0 && this.nums.reduce((acc,curr) => acc + curr);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums}]`
}
