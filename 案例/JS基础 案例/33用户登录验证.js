// - 题目描述：
// - 接收用户输入的用户名和密码，若用户名为 “admin” ,且密码为 “123456” ,则提示用户登录成功!  否则，让用户一直输入。
// - 题目提示：
// - 利用while循环或者do while 循环
var user_name = ''
var pwd = ''
while (user_name != 'admin' && pwd != '123456') {
  user_name = prompt("用户名")
  pwd = prompt("密码")
  alert("报错")
}
alert("用户登录成功! ")