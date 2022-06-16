// - 题目描述
//       1、用户输入总的银行卡金额，依次输入本月花费的电费，水费， 。
//       2、页面打印一个表格，计算出本月银行卡还剩下的余额。
//     - 题目提示
//       - 思路：
//         1.我们需要5个变量：银行卡总额、水费、电费、网费、银行卡余额
//         2.银行卡余额= 银行卡总额 – 水费 –电费  - 网费
//         3.第一步准备5个变量接受输入的数据
//         4.第二步计算银行卡余额
//         5.第三步页面打印生成表格，里面填充数据即可。
//         6.当然可以提前把html页面搭好。
    var zong = Number(prompt("输入总金额"))
    var shui = Number(prompt("输入水费"))
    var dian = Number(prompt("输入电费"))
    var wang = Number(prompt("输入网费"))
    var yu = zong - shui - dian - wang
    document.write(shui+','+ dian+','+ dian+','+ yu)