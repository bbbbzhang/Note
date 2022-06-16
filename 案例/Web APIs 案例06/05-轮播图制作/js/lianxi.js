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
                    num = 0
                    ul.style.left = 0
                }
                animate(ul, -(++num) * focusWidth, () => flag = true)
            } else {
                if (num == 0) {
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