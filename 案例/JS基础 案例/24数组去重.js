var arr = ['嬴政', '李世民', '刘秀', '朱元璋', '李世民', '朱元璋', '嬴政', '刘秀', '朱元璋', '刘秀'];
var newArr = [];

// 方案1
for (i = 0; i < arr.length; i++) {
    newArr.indexOf(arr[i]) ? newArr.push(arr[i]) : ''
}
console.log(newArr);

//  方案2
var newArr = [...new Set(arr)]
console.log(newArr);

// 方案3
arr.map(i => {
    return newArr.includes(i) ? '' : newArr.push(i)
})
console.log(newArr);

// 方案4
for (i = 0; i < arr.length; i++) {
    let flag = true
    for (j = 0; j < newArr.length; j++) {
        if (newArr[j] == arr[i]) {
            // 有重复的flag为false
            // 在下面判断flag为false则将其加入新数组
            flag = false
        }
    }
    if (flag) {
        newArr.push(arr[i])
    }
}
console.log(newArr);