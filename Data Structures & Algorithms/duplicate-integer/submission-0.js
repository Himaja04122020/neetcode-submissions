class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length-1;i++){
            for (let j=i+1;j<nums.length;j++){
                if(nums[i]===nums[j]){
                    return true;
                }
            }
        }
        return false;
    }
    hasDuplicates(nums){
        const seenNumbers = new Set();
        for(const num of nums){
            if(seenNumbers.has(num)){
                return true;
            }
            seenNumbers.add(num);
        }
        return false;
    }
}


