// 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

// 如果不存在最后一个单词，请返回 0 。

// 说明：一个单词是指由字母组成，但不包含任何空格的字符串。

// 示例:

// 输入: "Hello World"
// 输出: 5

// var lengthOfLastWord = function(s) {
//     let p = s.trim().split(" ");
//     if(p.length === 1){
//     	return p[0].length;
//     } else {
//     	for(let i = p.length - 1; i >= 0; i--){
//     		let result = p[i];
//     		if(result.length !== 0){
//     			console.log(result.length);
//     			return result.length;
//     		}
//     	}
//     	return 0;
//     }
// };

var lengthOfLastWord = function(s) {
    let p = s.trim().split(" ");
    return p[p.length - 1].length;
};
lengthOfLastWord(" Hello World ");
