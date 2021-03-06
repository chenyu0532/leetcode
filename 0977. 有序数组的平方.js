// 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

// 示例 1：
// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]

// 示例 2：
// 输入：[-7,-3,2,3,11]
// 输出：[4,9,9,49,121]

// 提示：
//     1 <= A.length <= 10000
//     -10000 <= A[i] <= 10000
//     A 已按非递减顺序排序。

/////数据量小的话，用sort都一样
var sortedSquares = function(A) {
	let m = 0;
	let n = A.length - 1;
	let result = [];
    for(let i = A.length - 1; i >= 0; i--){
    	if(Math.abs(A[m]) > Math.abs(A[n])){
    		result[i] = A[m] * A[m];
    		m++;
    	} else {
    		result[i] = A[n] * A[n];
    		n--;
    	}
    }
    return result;
};
console.log(sortedSquares([-4,-1,0,3,10]));


