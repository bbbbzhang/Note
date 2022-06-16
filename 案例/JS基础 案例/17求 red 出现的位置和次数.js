
// 练习22：求 red 出现的位置和次数

var arr = ['red', 'blue', 'red', 'green', 'pink', 'red']
var count = 0
var arr1 = []
for (i = 0; i < arr.length; i++) {
    if(arr[i]=='red'){
        count++
        arr1.push(i)
    }
}
console.log(`出现了${count}次，分别在索引${arr1}位置`);