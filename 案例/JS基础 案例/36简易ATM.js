// - 题目描述：
// - 里面现存有  100 块钱。
// - 如果存钱，就用输入钱数加上先存的钱数, 之后弹出显示余额提示框
// - 如果取钱，就减去取的钱数，之后弹出显示余额提示框
// - 如果显示余额，就输出余额
// - 如果退出，弹出退出信息提示框
// 题目提示：
// - 通过输入的数值判断用户操作
var money = 100
do {
var pro = prompt('请输入：\n1.存钱\n2.取钱\n3.查看余额\n4.退出')
  switch (pro) {
      case '1':
          var save = Number(prompt('请输入要存的钱数'))
          money += save
          alert('现在有' + money + '元')
          break
      case '2':
          var qu = Number(prompt('请输入要取的钱数'))
          if (money < qu) {
              alert('不够了')
          } else {
              money -= qu
              alert('现在有' + money + '元')
          }
          break
      case '3':
          alert('现在有' + money + '元')
          break
      case '4':
          alert("请取走你的银行卡")
          break
      default:
          alert("请输入正确的数字")
          break
  }
} while (pro != 4)