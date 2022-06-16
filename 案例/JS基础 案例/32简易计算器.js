// 练习17：简易计算器
// - 题目描述：
//   - 用户在弹出的输入框中选择要做的运算
//   - 用户选择后弹出两个输入框，让用户输入数据
//   - 根据用户选择的操作和输入的数据，计算出最后结果并弹出提示框显示结果
// - 题目提示：
//   - 用户通过在弹出的输入框输入操作对应的数值选择需要的计算
//   - 弹出另外两个输入框，收集用户输入的参与运算的数据

//   - 把计算结果通过提示框显示出来
var num1 = Number(prompt('请输入第一个数'))
var num2 = Number(prompt('请输入第二个数'))
do {
    var pro = prompt('1.加法\n2.减法\n3.乘法\n4.除法')
    switch (pro) {
        case '1':
            alert(num1 + num2)
            break
        case '2':
            alert(num1 - num2)
            break
        case '3':
            alert(num1 * num2)
            break
        case '4':
            alert(num1 / num2)
            break
        case '5':
            alert('退出')
            break
        default:
            alert('输入有效值')
            break
    }
} while (pro != 5)  
    //  封装
    var calc = new Object()
    calc.jia = function (a, b) {
        return a + b
    }
    calc.jian = function (a, b) {
        return a - b
    }
    calc.chen = function (a, b) {
        return a * b
    }
    calc.chu = function (a, b) {
        return a / b
    }
    var pro = prompt('1.加法\n2.减法\n3.乘法\n4.除法')
    var num1 = Number(prompt('请输入第一个数'))
    var num2 = Number(prompt('请输入第二个数'))
    switch (pro) {
        case '1':
            alert(calc.jia(num1, num2))
            break
        case '2':
            alert(calc.jian(num1, num2))
            break
        case '3':
            alert(calc.chen(num1, num2))
            break
        case '4':
            alert(calc.chu(num1, num2))
            break
    }

