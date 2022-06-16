function Ajax(options) {
    let str_data = []
    for (var k in options.data) {
        let str = k + '=' + options.data[k]
        str_data.push(str)
    }
    str_data = str_data.join('&')
    let p = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        if (options.method.toUpperCase() === 'GET') {
            xhr.open(options.method, options.baseURL + options.port + '?' + str_data);
            xhr.send()
        } else if (options.method.toUpperCase() === 'POST') {
            xhr.open(options.method, options.baseURL + options.port);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(str_data);
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText)
            } else {
                reject("error!!!!!!")
            }
        };
    })
    return p;
}

let get = {
    baseURL: "http://www.liulongbin.top:3006",
    port: '/api/getbooks',
    method: 'GET',
    success: (res) => {
        return JSON.parse(res)
    }
}
let add = {
    baseURL: "http://www.liulongbin.top:3006",
    port: '/api/addbook',
    method: 'POST',
    data: {
        bookname: '皮皮鲁',
        author: '郑渊洁',
        publisher: '无'
    },
    success: (res) => {
        return JSON.parse(res)
    }
}

// Ajax(get)
//     .then(res => console.log('then', JSON.parse(res)))
//     .catch(res => console.log('catch', res))
//     .finally(_ => console.log('finally'))
// Ajax(add)