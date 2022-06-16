var a = {};
var b = { name: '张三' };
var c = { name: '李四' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// 对象传到中括号里面，会转换为字符串

var b = {name:'zero'}
a[b] = 123
// 所有对象，转换为字符串，都是"[object object]"