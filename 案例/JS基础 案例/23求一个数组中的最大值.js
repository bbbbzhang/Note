function getArrMax(arr){
    var max = arr[0];
    for(var i=1 ;i <= arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }return max;
}
console.log(getArrMax([9,7,6,5,8]));