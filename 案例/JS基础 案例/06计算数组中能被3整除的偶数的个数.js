// 练习5: 计算数组中能被3整除的偶数的和
var arr = [2, 6, 18, 15, 40]
var sum = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 2 == 0) {
        sum += arr[i]
    }
}
console.log(sum);