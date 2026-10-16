class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const responseArray ={};
        for(let s of strs){
            const sortedS = s.split('').sort().join('');
            if(!responseArray[sortedS]){
                responseArray[sortedS] =[];
            }
            responseArray[sortedS].push(s);
        }
        return Object.values(responseArray)
    }
}
