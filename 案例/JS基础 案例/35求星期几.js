let week = Number(prompt("请输入一个数"))
if (week > 7 || week < 1) {
    alert(`请重新输入`)
    week = Number(prompt("请输入一个数"))
}
switch (week) {
    case 1: alert("星期一"); break
    case 2: alert("星期二"); break
    case 3: alert("星期三"); break
    case 4: alert("星期四"); break
    case 5: alert("星期五"); break
    case 6: alert("星期六"); break
    case 7: alert("星期日"); break
}