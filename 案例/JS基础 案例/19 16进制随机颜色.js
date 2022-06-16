
// 练习24：16进制随机颜色
// 题目描述：使用Math对象，制作一个16进制的随机颜色
// 题目提示：16进制包括 “ 0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F ”
// 例： “#f23a4b” 
var color_arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
var str_arr = []
str_arr.push('#')
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var a = getRandom(0, color_arr.length-1) 
// console.log(a);
for(i=0;i<=5;i++){
str_arr.push(color_arr[getRandom(0, color_arr.length-1)])
}
console.log(str_arr.join(''));