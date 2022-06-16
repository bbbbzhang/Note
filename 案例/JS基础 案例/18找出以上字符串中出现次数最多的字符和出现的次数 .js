
// 练习23：找出以上字符串中出现次数最多的字符和出现的次数 

// 字符串：“abaasdffggghhjjkkgfddsssss3444343”，问题如下： 
// 1、 字符串的长度 
// 2、 取出指定位置的字符，如：0,3,5,9等 
// 3、 查找指定字符是否在以上字符串中存在，如：i，c ，b等 
// 4、 找出以上字符串中出现次数最多的字符和出现的次数 
var str = 'abaasdffggghhjjkkgfddsssss3444343'
console.log(str.length);
console.log(str[0],str[3],str[5],str[9]);
str.indexOf('i')==-1?console.log('不存在'):console.log('存在');
str.indexOf('c')==-1?console.log('不存在'):console.log('存在');
str.indexOf('b')==-1?console.log('不存在'):console.log('存在');
var obj = {}
var count = 0
var max = 0
for (i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
        obj[str[i]]++
    } else {
        obj[str[i]] = 1
    }
}
for (var key in obj) {
    if (obj[key] > count) {
        count = obj[key]
        max = key
    }
}
console.log(obj);
console.log(max);
console.log(count);