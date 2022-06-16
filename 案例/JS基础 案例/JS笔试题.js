// 题目1
var i = 1;
var timer = setInterval(function () {
    if (i == 5) {
        clearInterval(timer);
    }
    i++;
}, 1000);

// 每隔1s中，对变量i的值进行自增1的操作，问，当定时器取消之后，if结束之后i最后的值为多少（）

// 全局变量和取消定时器的理解
// i是全局变量，作用的范围是整个script标签中，所以定时函数中使用的i就是全局变量的i

// 这份js代码的效果是每隔1s中，对i的值进行自增1的操作，当i的值等于5的时候，取消定时器。
// 取消定时器只是会取消接下来到达时间间隔的函数处理，对于本次已经进入到定时处理函数是不会有影响的，本次定时处理函数依然会继续向下执行。
// 所以当i等于5的时候，虽然我们取消了定时器，但是i++的代码还是会执行，所以最终i的值为6



// 题目2
<body>
    <p style="height:3000px;"></p>
    <button>点我试试</button>
</body>
// 这份布局中的p标签的高度非常的大，意味着界面会出现垂直的滚动条，
// 下面对页面的滚动进行滚动事件的监听，在滚动事件的处理函数中，监听按钮button的点击事件，代码如下：
window.addEventListener('scroll', function () {
    var btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        console.log('我被点击了...')
    });
});

// 可以通过window.onscroll = function(){}或window.addEventListener('scroll', function () {})
// 监听页面的滚动事件，当页面发生滚动的时候，function中的代码将会得到执行。

// 当我们从一个页面的顶部手动的慢慢滚动到底部，滚动事件是发生了很多次的，每发生一次都会执行function中的代码。
// 而function中的代码是通过btn.addEventListener('click', function () {}) 对按钮进行了点击事件的监听。
// 换一句话说，从页面顶部滚动到底部的过程中，我们使用addEventListener重复对btn进行了事件的注册，点击事件注册了多次。
// 当点击事件发生的时候，由于是使用addEventListener进行事件的重复注册，所以每一个事件监听函数中的代码都会得到执行。



// 题目3
// 代码1：
var btn = document.querySelector("#btn");
btn.onclick = function () {
    console.log('我被点击了1...');
};
btn.onclick = function () {
    console.log('我被点击了2...');
};
// 代码2：
var btn = document.querySelector("#btn");

btn.addEventListener('click', function () {
    console.log('我被点击了1...');
});
btn.addEventListener('click', function () {
    console.log('我被点击了2...');
});

// 通过btn.onclick=function(){}属性赋值的方式，为同一个元素绑定多次事件，
// 那么只有最后一次绑定事件才会生效，之前的绑定函数都会被覆盖掉

// 通过btn.addEventListener('click',function(){})方法调用的方式，为同一个元素绑定多次事件，
// 那么每一次事件的绑定都会生效，并且函数响应的顺序和注册事件的顺序是一样的



// 题目4
var name = "window";
function showName() {
    console.log(this.name);
}
var person1 = {
    name: "kxy",
    sayName: showName
}
var person2 = {
    name: "Jake",
    sayName: function () {
        var fun = person1.sayName;
        fun();
    }
}
person1.sayName();    //kxy
person2.sayName();    //window

// 第一个执行语句：
// person1.sayName(); 
// 首先确定这是方法调用模式，对象为person1，
// sayName被赋值为全局函数对象showName，
// 在showName执行时，this绑定的是person1，所以结果为”kxy”。

// 第二个执行语句：
// person2.sayName(); 
// 这还是方法调用模式，对象为person2，调用的是它的sayName方法。
// 再看sayName函数体，发现函数体最终执行的函数是fun，fun是用函数调用模式调用的。
// 而fun最终也被赋值为showName函数，
// 因为fun是用 函数调用模式 调用的，所以这里的this绑定为window，
// 结果为window。



// 题目5
var length = 10;

function fn() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
}
obj.method(fn, 1)



// 题目6
var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log(this.foo);
        console.log(self.foo);
        (function () {
            console.log(this.foo);
            console.log(self.foo);
        }());
    }
};
myObject.func();



// 题目7
(function () {
    var a = b = 3
    //相当于var b = 3; a = (b = 3);
})()
console.log(b);
console.log(a);
// 3 报错
(function () {
    var a = b = 3
})()
console.log(a);
console.log(b);
//报错



// 题目8
console.log('start');
setTimeout(() => {
    console.log('timeout');
});
Promise.resolve().then(() => {
    console.log('resolve');
});
console.log('end');
// 1.首先整个脚本作为宏任务开始执行，遇到同步代码直接执行
// 2.打印 start
// 3.将setTimeout放入宏任务队列
// 4.将promise.resolve放入微任务队列
// 5.打印 end
// 6.执行所有微任务，打印 resolve 
// 7.执行宏任务，打印 timeout



// 题目9
setTimeout(() => console.log(4))
new Promise(resolve => {
    resolve()
    console.log(1)
}).then(_ => {
    console.log(3)
})
console.log(2)
//1 2 3 4
// new Promise在实例化的过程中所执行的代码都是同步执行的，
// 而then中注册的回调才是异步执行的代码在同步代码执行完成后才去检查是否有异步任务完成，并执行对应的回调，
// 而微任务又会在宏任务之前执行



// 题目10
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0);
Promise.resolve().then(function () {
    console.log('promise1');
}).then(function () {
    console.log('promise2');
});
console.log('script end');
//script start
//script end
//promise1
//promise2
//setTimeout



// 题目11
console.log(1)
setTimeout(function () {
    console.log(2)
}, 0)
new Promise(function (resolve, reject) {
    console.log(3)
    resolve(4)
}).then(function (res) {
    console.log(5)
    console.log(res)
    setTimeout(function () {
        console.log(7)
    }, 0)
})
console.log(6)
//1 3 6 5 4 2 7



// 题目12
const a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}
if (a == 1 && a == 2 && a == 3) { console.log("ok") } else { console.log("no") }

var val = 0;
Object.defineProperty(window, 'a', {
    get: function () {
        return ++val;
    }
})
if (a == 1 && a == 2 && a == 3) { console.log("ok") } else { console.log("no") }
// 不同类型的值进行比较
// JavaScript中当遇到不同类型的值进行比较时，会根据类型转换规则试图将它们转为同一个类型再比较。
// 比如
// Object 类型与 Number 类型进行比较时，Object 类型会转换为 Number 类型。
// 转换时会尝试调用 Object.valueOf 和 Object.toString 来获取对应的数字基本类型。