// 练习20：把数组的首尾两个元素互换

var arr = ["鹿晗", "王俊凯", "蔡徐坤", "彭于晏", "周杰伦", "刘德华", "赵本山"]
var a = arr.shift()
var b = arr.pop()
arr.unshift(b)
arr.push(a)
console.log(arr);