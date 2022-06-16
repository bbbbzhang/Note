

// 练习8：闰年
// 通过提示框提示用户输入一个年份，用户输入完成后弹出是闰年还是平年
var year = parseInt(prompt("输入一个年份"))
if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    alert("闰年")
} else {
    alert('平年')
}

function runYear(year) {
    return year % 4 == 0 && year % 100 == 0 || year % 400 == 0;
}
