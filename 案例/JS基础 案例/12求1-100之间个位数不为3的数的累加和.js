// 练习15：求1-100之间个位数不为3的数的累加和


// - 题目描述：
//   - 求整数1～100的累加值，但要求跳过所有个位为3的数。
// - 题目提示：
//   - 使用%判个位数是否为3
//   - 用continue实现、

var sum = 0
for (i = 0; i <= 100; i++) {
    // if (i % 10 != 3) {
    //     sum += i
    // }
    if (i % 10 == 3) {
        continue
    }
    sum += i
}
console.log(sum);