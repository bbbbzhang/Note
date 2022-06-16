// 0 简化版，无注释
window.addEventListener('load', () => {
    var arrow_l = document.querySelector('.arrow-l'),
        arrow_r = document.querySelector('.arrow-r'),
        focus = document.querySelector('.focus'),
        ul = focus.querySelector('ul'),
        ol = focus.querySelector('.circle'),
        focusWidth = focus.offsetWidth,
        num = 0,
        flag = true,
        timer = setInterval(() => arrow_r.click(), 2000)

    focus.addEventListener('mouseenter', () => {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
        clearInterval(timer)
    })
    focus.addEventListener('mouseleave', () => {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
        timer = setInterval(() => arrow_r.click(), 2000)
    })

    Array.from(ul.children).forEach((item, index) => {
        var li = document.createElement('li')
        ol.appendChild(li)
        li.addEventListener('click', () => {
            Array.from(ol.children).forEach(i => i.className = '')
            li.className = 'current'
            animate(ul, -index * focusWidth)
        })
    })

    ul.appendChild(ul.children[0].cloneNode(true))
    ol.children[0].className = 'current'

    arrow_l.addEventListener('click', click)
    arrow_r.addEventListener('click', click)
    
    function click(e) {
        var arrow = e.target.className.substr(e.target.className.length - 1, 1)
        if (flag) {
            flag = false
            if (arrow == 'r') {
                if (num == ul.children.length - 1) {
                // 到真实的最后一张时，点击按钮，变为第一张(闪一下)，然后再变为第二张
                    num = 0
                    ul.style.left = 0
                }
                animate(ul, -(++num) * focusWidth, () => flag = true)
            } else {
                // 到第一张图时，点击按钮，变为复制的最后一张(闪一下)，然后再变为真实的最后一张
                if (num == 0) {
                    // num = 4 
                    num = ul.children.length - 1
                    ul.style.left = -num * focusWidth + 'px'
                }
                animate(ul, -(--num) * focusWidth, () => flag = true)
            }
            Array.from(ol.children).forEach(i => i.className = '')
            ol.children[num] ? ol.children[num].className = 'current' : ol.children[0].className = 'current'
        }
    }
})

// 6
// window.addEventListener('load', () => {
//     // 左右箭头 轮播图区域 轮播图列表 小圆点列表 轮播图宽度
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     var focusWidth = focus.offsetWidth;
//     var num = 0;
//     var flag = true;
//     focus.addEventListener('mouseenter', () => {
//         arrow_l.style.display = 'block'
//         arrow_r.style.display = 'block'
//         clearInterval(timer)
//         timer = null
//     })
//     focus.addEventListener('mouseleave', () => {
//         arrow_l.style.display = 'none'
//         arrow_r.style.display = 'none'
//         timer = setInterval(() => arrow_r.click(), 2000)
//     })
//     Array.from(ul.children).forEach((item, index) => {
//         var li = document.createElement('li')
//         ol.appendChild(li)
//         Array.from(ol.children).forEach(i => i.className = '')
//         li.addEventListener('click', () => li.className = 'current')
//         num = index
//         animate(ul, -num * focusWidth)
//     })
//     ul.appendChild(ul.children[0].cloneNode(true))
//     ol.children[0].className = 'current'
//     arrow_l.addEventListener('click', click)
//     arrow_r.addEventListener('click', click)
//     function click(e) {
//         var arrow = e.target.className.substr(e.target.className.length - 1, 1)
//         if (flag) {
//             flag = false
//             if (arrow == 'r') {
//                 if (num == ul.children.length - 1) {
//                     num = 0
//                     ul.style.left = 0
//                 }
//                 num++
//                 animate(ul, -num * focusWidth, () => flag = true)
//             } else {
//                 if (num == 0) {
//                     num = ul.children.length - 1
//                     ul.style.left = -num * focusWidth + 'px'
//                 }
//                 num--
//                 animate(ul, -num * focusWidth, () => flag = true)
//             }
//             ol.children[num] ? ol.children[num].className = 'current' : ol.children[0].className = 'current'
//         }
//     }
//     var timer = setInterval(() => arrow_r.click(), 2000)
// })

    // 1
    // window.addEventListener('load', () => {
    //     // 左右箭头 轮播图区域 轮播图列表 小圆点列表 轮播图宽度
    //     var arrow_l = document.querySelector('.arrow-l');
    //     var arrow_r = document.querySelector('.arrow-r');
    //     var focus = document.querySelector('.focus');
    //     var ul = focus.querySelector('ul');
    //     var ol = focus.querySelector('.circle');
    //     var focusWidth = focus.offsetWidth;
    //     var num = 0;
    //     // var circle = 0;
    //     var flag = true;
    //     focus.addEventListener('mouseenter', () => {
    //         arrow_l.style.display = 'block';
    //         arrow_r.style.display = 'block';
    //         clearInterval(timer);
    //         timer = null;
    //     });
    //     focus.addEventListener('mouseleave', () => {
    //         arrow_l.style.display = 'none';
    //         arrow_r.style.display = 'none';
    //         timer = setInterval(() => arrow_r.click(), 2000);
    //     });

    //     // 控制小圆点
    //     Array.from(ul.children).forEach((item, index) => {
    //         var li = document.createElement('li');
    //         ol.appendChild(li);
    //         // 小圆点添加点击事件
    //         li.addEventListener('click', () => {
    //             Array.from(ol.children).forEach(i => i.className = '')
    //             li.className = 'current';
    //             num = index;
    //             // circle = index;
    //             animate(ul, -index * focusWidth);
    //         })
    //     })
    //     ol.children[0].className = 'current';
    //     // 把ul第一个li复制到ul的最后一份
    //     ul.appendChild(ul.children[0].cloneNode(true));

    //     arrow_r.addEventListener('click', click);
    //     arrow_l.addEventListener('click', click);

    //     function click(e) {
    //         var arrow = e.target.className.substr(e.target.className.length - 1, 1)
    //         if (flag) {
    //             flag = false;
    //             // 右箭头
    //             if (arrow == 'r') {
    //                 if (num == ul.children.length - 1) {
    //                     ul.style.left = 0;
    //                     num = 0;
    //                 }
    //                 num++;
    //                 // console.log(num);
    //                 animate(ul, -num * focusWidth, () => flag = true);
    //                 // circle++;
    //                 // circle = circle > ol.children.length - 1 ? 0 : circle
    //                 // 左箭头
    //             } else {
    //                 if (num == 0) {
    //                     num = ul.children.length - 1;
    //                     ul.style.left = -num * focusWidth + 'px';
    //                 }
    //                 num--;
    //                 // console.log(num);
    //                 animate(ul, -num * focusWidth, () => flag = true);
    //                 // circle--;
    //                 // circle = circle < 0 ? ol.children.length - 1 : circle;
    //             }
    //             Array.from(ol.children).forEach(i => i.className = '')
    //             // console.log(ol.children.length);
    //             // console.log(ul.children.length);
    //             // console.log(num);
    //             if (ol.children.length-1 >= num) {
    //                 ol.children[num].className = 'current';
    //             } else {
    //                 ol.children[0].className = 'current'
    //             }
    //             // ol.children[num] ? ol.children[num].className = 'current' : ol.children[0].className = 'current';
    //             // circleChange();
    //         }
    //     }

    // function circleChange() {
    //     Array.from(ol.children).forEach(i => i.className = '')
    //     if(ol.children[num]){
    //         ol.children[num].className = 'current';
    //     }else{
    //         ol.children[0].className = 'current';
    //     }
    //     // ol.children[circle].className = 'current';
    // }
    // var timer = setInterval(() => arrow_r.click(), 2000);
// })

// 2
// window.addEventListener('load', () => {
//     // 左右箭头 轮播图区域 轮播图列表 小圆点列表 轮播图宽度
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     var focusWidth = focus.offsetWidth;
//     var num = 0;
//     var circle = 0;
//     var flag = true;
//     focus.addEventListener('mouseenter', () => {
//         arrow_l.style.display = 'block'
//         arrow_r.style.display = 'block'
//         clearInterval(timer)
//         timer = null
//     })
//     focus.addEventListener('mouseleave', () => {
//         arrow_l.style.display = 'none'
//         arrow_r.style.display = 'none'
//         timer = setInterval(() => {
//             arrow_l.click()
//         })
//     })
//     Array.from(ul.children).forEach((item, index) => {
//         var li = document.createElement('li')
//         ol.appendChild(li)
//         li.addEventListener('click', () => {
//             Array.from(ol.children).forEach(i, () => i.className = '')
//             li.className = 'current'
//             num = index
//             circle = index
//             AnimationEffect(ul, -num * focusWidth)
//         })
//     })
//     ul.appendChild(ul.children[0].cloneNode(true))
//     ol.children[0].className = 'current'
//     arrow_l.addEventListener('click', click)
//     arrow_r.addEventListener('click', click)
//     function click(e) {
//         var arrow = e.target.className.substr(e.target.className.length - 1, 1)
//         if (flag) {
//             flag = false
//             if (arrow = 'r') {
//                 if (num == ul.children.length - 1) {
//                     num = 0
//                     ul.style.left = 0
//                 }
//                 num++
//                 circle++
//                 circle = circle > ol.children.length - 1 ? 0 : circle
//                 animate(ul, -num * focusWidth, () => flag = true)
//             }
//             else {
//                 if (num == 0) {
//                     num = ul.children.length - 1
//                     ul.style.left = focusWidth + 'px'
//                 }
//                 num--
//                 circle--
//                 circle = circle < 0 ? ol.children.length - 1 : circle
//                 animate(ul, -num * focusWidth, () => flag = true)
//             }
//             circlerChange()
//         }
//     }
//     function circlerChange() {
//         Array.from(ol.children).forEach(i, () => i.className = '')
//         ol.children[circle].className = 'current'
//     }
//     var timer = setInterval(() => {
//         arrow_l.click()
//     })
// })

// 3
// window.addEventListener('load', () => {
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     var focusWidth = focus.offsetWidth;
//     var num = 0;
//     var circle = 0;
//     var flag = true;

//     focus.addEventListener('mouseenter', () => {
//         arrow_l.style.display = 'block'
//         arrow_r.style.display = 'block'
//         clearInterval(timer)
//         timer = null
//     })
//     focus.addEventListener('mouseleave', () => {
//         arrow_l.style.display = 'none'
//         arrow_r.style.display = 'none'
//         timer = setInterval(() => {
//             arrow_r.click()
//         }, 2000
//         )
//     })
//     Array.from(ul.children).forEach((item, index) => {
//         var li = document.createElement('li')
//         ol.appendChild(li)
//         li.addEventListener('click', () => {
//             Array.from(ol.children).forEach(i => i.style.className = '')
//             li.style.className = 'current'
//             num = index
//             circle = index
//             animate(ul, -index * focusWidth)
//         })
//     })
//     ol.children[0].className = 'current'
//     ul.appendChild(ul.children[0].cloneNode(true))
//     arrow_r.addEventListener('click', click)
//     arrow_l.addEventListener('click', click)
//     function click(e) {
//         var arrow = e.target.className.substr(e.target.className.length - 1, 1)
//         if (flag) {
//             flag = false
//             if (arrow == 'r') {
//                 if (num = ul.children.length - 1) {
//                     num = 0
//                     ul.style.left = 0
//                 }
//                 num++
//                 circle = circle == ol.children.length ? 0 : circle
//                 circle++
//                 animate(ul, -num * focusWidth, () => flag = true)
//             } else {
//                 if (num = 0) {
//                     num = ul.children.length - 1
//                     ul.style.left = -num * focusWidth + 'px'
//                 }
//                 num--
//                 circle = circle == 0 ? ol.children.length - 1 : circle
//                 circle--
//                 animate(ul, -num * focusWidth, () => flag = true)
//             }
//             circleChange()
//         }
//     }


//     function circleChange() {
//         Array.from(ol.children).forEach(i => {
//             i.className = ''
//         })
//         ol.children[circle].className = 'current'
//     }
//     var timer = setInterval(() => {
//         arrow_r.click()
//     }, 2000
//     )
// })

// 4
// window.addEventListener('load', () => {
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     var focusWidth = focus.offsetWidth;
//     var num = 0;
//     var circle = 0;
//     var flag = true;
//     focus.addEventListener('mouseenter', () => {
//         arrow_l.style.display = 'block'
//         arrow_r.style.display = 'block'
//         clearInterval(timer)
//         timer = null
//     })
//     focus.addEventListener('mouseleave', () => {
//         arrow_l.style.display = 'none'
//         arrow_r.style.display = 'none'
//         timer = setInterval(() => {
//             arrow_r.click()
//         }, 2000)
//     })
//     Array.from(ul.children).forEach((item, index) => {
//         var li = document.createElement('li')
//         ol.appendChild(li)
//         li.addEventListener('click', () => {
//             Array.from(ol.children).forEach(i => {
//                 i.style.className = ''
//             })
//             li.style.className = 'current'
//             num = index
//             circle = index
//             animate(ul, -index * focusWidth)

//         })

//     })
//     ol.children[0].className = 'current'
//     ul.appendChild(ul.children[0].cloneNode(true))
//     arrow_l.addEventListener('click', click)
//     arrow_r.addEventListener('click', click)
//     function click(e) {
//         var arrow = e.target.className.substr(e.target.className.length - 1, 1)
//         if (flag) {
//             flag = false
//             if (arrow == 'r') {
//                 if (num == ul.children.length - 1) {
//                     num = 0
//                     ul.style.left = 0
//                 }
//                 num++
//                 circle++
//                 circle = circle == ol.children.length? 0 : circle
//                 animate(ul, -num * focusWidth, () => flag = true)
//             }
//             else {
//                 if (num == 0) {
//                     num = ul.children.length - 1
//                     ul.style.left = -num*focusWidth + 'px'
//                 }
//                 num--
//                 circle--
//                 circle = circle == 0 ? ul.children.length-1 : circle
//                 animate(ul, -num * focusWidth, () => flag = true)

//             }
//         }
//         circleChange()
//     }
//     function circleChange() {
//         Array.from(ol.children).forEach(i => {
//             i.className = ''
//         })
//         ol.children[circle].className='current'
//     }
//     var timer = setInterval(() => {
//         arrow_r.click()
//     }, 1000)
// })

// 5
// window.addEventListener('load', () => {
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     var focusWidth = focus.offsetWidth;
//     var num = 0;
//     var circle = 0;
//     var flag = true;
//     focus.addEventListener('mouseenter', () => {
//         arrow_l.style.display = 'block'
//         arrow_r.style.display = 'block'
//         clearInterval(timer)
//         timer = null
//     })
//     focus.addEventListener('mouseleave', () => {
//         arrow_l.style.display = 'none'
//         arrow_r.style.display = 'none'
//         timer = setInterval(() => arrow_r.click(), 2000);
//     })
//     Array.from(ul.children).forEach((item, index) => {
//         var li = document.createElement('li')
//         ol.appendChild(li)
//         li.addEventListener('click', () => {
//             Array.from(ol.children).forEach(i => {
//                 i.className = ''
//             })
//             li.className = 'current'
//             num = index
//             circle = index
//             animate = (ul, -index * focusWidth)
//         })
//     })
//     ol.children[0].className = 'current'
//     ul.appendChild(ul.childNodes[0].cloneNode(true))
//     arrow_r.addEventListener('click', click)
//     arrow_l.addEventListener('click', click)
//     function click(e) {
//         var arrow = e.target.className.substr(e.target.className.length - 1, 1)
//         if (flag) {
//             flag = false
//             if (arrow == 'r') {
//                 if (num == ul.children.length - 1) {
//                     ul.style.left = 0
//                     num = 0
//                 }
//                 num++
//                 animate(ul, -index * focusWidth, () => flag = true)
//                 circle++
//                 circle = circle == ol.children.length ? 0 : circle
//             } else {
//                 if (num == 0) {
//                     num = ul.children.length - 1
//                     ul.style.left = -num * focusWidth + 'px'
//                 }
//                 num--
//                 cancelAnimationFrame(ul, -index * focusWidth, () => flag = true)
//                 circle--
//                 circle = circle == 0 ? ol.children.length : circle
//             }
//             circleChange()
//         }
//     }
//     function circleChange() {
//         Array.from(ol.children).forEach(i => i.className = '')
//         ol.children[circle].className = 'current'
//     }
//     var timer = setInterval(() => arrow_r.click(), 2000)

// })
// 原始
// window.addEventListener('load', function() {
//     // 1. 获取元素
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var focusWidth = focus.offsetWidth;
//     // 2. 鼠标经过focus 就显示隐藏左右按钮
//     focus.addEventListener('mouseenter', function() {
//         arrow_l.style.display = 'block';
//         arrow_r.style.display = 'block';
//         clearInterval(timer);
//         timer = null; // 清除定时器变量
//     });
//     focus.addEventListener('mouseleave', function() {
//         arrow_l.style.display = 'none';
//         arrow_r.style.display = 'none';
//         timer = setInterval(function() {
//             //手动调用点击事件
//             arrow_r.click();
//         }, 2000);
//     });
//     // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     // console.log(ul.children.length);
//     for (var i = 0; i < ul.children.length; i++) {
//         // 创建一个小li
//         var li = document.createElement('li');
//         // 记录当前小圆圈的索引号 通过自定义属性来做
//         li.setAttribute('index', i);
//         // 把小li插入到ol 里面
//         ol.appendChild(li);
//         // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
//         li.addEventListener('click', function() {
//             // 干掉所有人 把所有的小li 清除 current 类名
//             for (var i = 0; i < ol.children.length; i++) {
//                 ol.children[i].className = '';
//             }
//             // 留下我自己  当前的小li 设置current 类名
//             this.className = 'current';
//             // 5. 点击小圆圈，移动图片 当然移动的是 ul
//             // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
//             // 当我们点击了某个小li 就拿到当前小li 的索引号
//             var index = this.getAttribute('index');
//             // 当我们点击了某个小li 就要把这个li 的索引号给 num
//             num = index;
//             // 当我们点击了某个小li 就要把这个li 的索引号给 circle
//             circle = index;
//             // num = circle = index;
//             console.log(focusWidth);
//             console.log(index);

//             animate(ul, -index * focusWidth);
//         })
//     }
//     // 把ol里面的第一个小li设置类名为 current
//     ol.children[0].className = 'current';
//     // 6. 克隆第一张图片(li)放到ul 最后面
//     var first = ul.children[0].cloneNode(true);
//     ul.appendChild(first);
//     // 7. 点击右侧按钮， 图片滚动一张
//     var num = 0;
//     // circle 控制小圆圈的播放
//     var circle = 0;
//     // flag 节流阀
//     var flag = true;
//     arrow_r.addEventListener('click', function() {
//         if (flag) {
//             flag = false; // 关闭节流阀
//             // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
//             if (num == ul.children.length - 1) {
//                 ul.style.left = 0;
//                 num = 0;
//             }
//             num++;
//             animate(ul, -num * focusWidth, function() {
//                 flag = true; // 打开节流阀
//             });
//             // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
//             circle++;
//             // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
//             if (circle == ol.children.length) {
//                 circle = 0;
//             }
//             // 调用函数
//             circleChange();
//         }
//     });

//     // 9. 左侧按钮做法
//     arrow_l.addEventListener('click', function() {
//         if (flag) {
//             flag = false;
//             if (num == 0) {
//                 num = ul.children.length - 1;
//                 ul.style.left = -num * focusWidth + 'px';

//             }
//             num--;
//             animate(ul, -num * focusWidth, function() {
//                 flag = true;
//             });
//             // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
//             circle--;
//             // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
//             // if (circle < 0) {
//             //     circle = ol.children.length - 1;
//             // }
//             circle = circle < 0 ? ol.children.length - 1 : circle;
//             // 调用函数
//             circleChange();
//         }
//     });

//     function circleChange() {
//         // 先清除其余小圆圈的current类名
//         for (var i = 0; i < ol.children.length; i++) {
//             ol.children[i].className = '';
//         }
//         // 留下当前的小圆圈的current类名
//         ol.children[circle].className = 'current';
//     }
//     // 10. 自动播放轮播图
//     var timer = setInterval(function() {
//         //手动调用点击事件
//         arrow_r.click();
//     }, 2000);

// })

