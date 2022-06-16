// 练习7：给一个数字数组，该数组中有很多数字0，将不为0的数据存入到一个新的数组中
var arr = [2, 0, 0, 6, 0, 18, 15, 40]
var new_arr = []
for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        // new_arr.push(arr[i])
        new_arr[new_arr.length]=arr[i]
    }
}
console.log(new_arr);