// 1.随机生成一个1~10 的整数  我们需要用到 Math.random() 方法。
// 2.需要一直猜到正确为止，所以需要一直循环。
// 3.while 循环更简单
// 4.核心算法：使用 if  else if 多分支语句来判断大于、小于、等于。
// 5**.进阶思考**：限制最多猜5次，否则挑战失败
var a = alert("选择猜数字的范围")
    let a_num = Number(prompt("选择最小的数字"))
    let b_num = Number(prompt("选择最大的数字"))
    // 限制最多猜五次，否则挑战失败
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let result_num = getRandom(a_num, b_num)
    for (let i = 1; i <= 5; i++) {
        let d = Number(prompt("猜"))
        if (d > result_num) {
            alert("大了")
        } else if (d < result_num) {
            alert("小了")
        } else {
            alert("恭喜你，猜对了！")
            break
        }
        i == 5 ? alert("五次够了") : ''
    }
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// var a = getRandom(1, 10)
// var i = 0
// console.log(a);
while (i != 5) {
var pro = Number(prompt('猜数字'))

    if (pro > a) {
        alert('猜大了')
    }
    else if (pro < a) {
        alert('猜小了')
    }
    else  {
        alert('正确')
        alert(i+'次');
        break
    }
    i++
}   