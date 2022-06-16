// 比大小
function compare(num1,num2){
	if(num1>num2){
		return num1
	} else if (num1<num2){
		return num2
	} else {
        return '相等'
    }
}
function getMax(){
    return num1 > num2 ? num1 : num2;
}
console.log(getMax(2,3));