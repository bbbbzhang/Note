function Person(name){
    this.name = name
}
function f1(x){
    console.log(x.name);
    x.name='zhang'
    console.log(x.name);
}
var p = new Person('liu')
console.log(p.name);
f1(p);
console.log(p.name);

// liu
// liu
// zhang
// zhang