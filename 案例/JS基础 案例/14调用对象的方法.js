// 练习17：调用对象的方法
// 目的: 复习对象的使用
// 要求:
// 1. 对象声明完毕后, 调用对象中的吃饭的方法
// 2. 提示: 对象中的方法本质是函数, 调用需要加()
// 3. 方法也可以传递参数的
var per = new Object()
per.eat = '饭'
per.skill = function(){
     console.log('睡觉');
}
console.log(per);
console.log(per.eat);
per.skill()
console.log(per.skill);