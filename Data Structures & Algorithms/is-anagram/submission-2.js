class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(t.length!==s.length) return false;
        let sSort = s.split('').sort().join('');
        let tSort = t.split('').sort().join('');

        for(let i=0;i<s.length;i++){
            if(sSort[i]!==tSort[i]){
                return false;
            }
        }
        return true;

    }
}
