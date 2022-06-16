// 练习16： 求从1 开始第35个能被7和3整除的整数


//  题目描述：
//   - 求从1开始第35个能被7和3整除的整数
// - 题目提示：
//   - 通过变量记录是第几个可以被3和7整除的数
// 答案：735
var count = 0
var i = 0
for (i = 0; true; i++) {
     if (i % 3 == 0 && i % 7 == 0) {
        count++
    }
    if(count==35+1){
        break
    }
}
while(count!=35){
    i++
    if (i % 3 == 0 && i % 7 == 0) {
        count++
    }
}
console.log(i);