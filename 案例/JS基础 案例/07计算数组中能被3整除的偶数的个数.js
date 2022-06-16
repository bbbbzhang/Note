// 练习6: 计算数组中能被3整除的偶数的个数
var arr = [2, 6, 18, 15, 40]
var num = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 2 == 0) {
        num++
    }
}
console.log(num);
