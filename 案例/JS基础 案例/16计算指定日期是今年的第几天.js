// 练习21：计算指定日期是今年的第几天

// 题目描述：制作一个函数，getDayNum( 年月日日期 )，可以返回指定日期是当前年的第几天
// 例：  getDayNum( “2021-1-2”)    返回值为：2
function getDayNum(time) {
    var year = new Date(time).getFullYear().toString()
    var year_num = +new Date(year)
    var input_time_num = +new Date(time)
    return Math.ceil((input_time_num - year_num) / 1000 / 60 / 60 / 24) + 1
}
console.log(getDayNum('2021-1-3'));