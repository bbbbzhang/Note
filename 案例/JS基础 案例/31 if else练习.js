// 练习26：检测时间


var time = Number(prompt("输入时间"))
    if (6 <= time && time < 12) {
        alert("早上好")
    }
    else if (12 <= time && time < 18) {
        console.log(1111);
        alert("下午好")

    }
    else if (18 <= time && time < 23) {
        alert("晚上好")
    }
    else if (0 <= time && time < 6) {
        alert("半夜了")
    } else {
        alert("请输入正确值")
    }


// 练习27：检测分数



var score = Number(prompt("请输入一个分数"))
    if (100 >= score > 90) {
        alert("A")
    } else if (score >= 80) {
        alert("B")

    } else if (score >= 70) {
        alert("C")

    } else if (score >= 60) {
        alert("D")

    } else {
        alert("E")
    }


// 练习28：检测钱数


var pocket_money = Number(prompt("班长口袋里的钱"))
    if (pocket_money > 2000) {
        alert("吃西餐")
    } else if (pocket_money > 1500) {
        alert("吃快餐")

    } else if (pocket_money > 1000) {
        alert("喝饮料")

    } else if (pocket_money > 500) {
        alert("吃棒棒糖")

    } else {
        alert("记得带够钱呀，咯咯")
    }


