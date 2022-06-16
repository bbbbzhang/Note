// function getParams(url) {
//   if (url === undefined || typeof (url) != 'string' || url.indexOf('?') == -1 || url.indexOf('&') == -1) {
//       return null;
//   }
//   var json = {}
//   url.split('?')[1].split('&').forEach(i => json[i.split('=')[0]] = i.split('=')[1])
//   return JSON.stringify(json)
// }
// var url= 'https://list.jd.com/item.htm?a=1&b=2&c=&d=xxx&e'
// console.log(getParams(url));

// 包含如下选项：
// location: {
// 	href: ‘包含完整的url’,
// 	origin: ‘包含协议到pathname之前的内容’,
// 	protocol: ‘url使用的协议，包含末尾的:’,
// 	host: ‘完整主机名，包含:和端口’,
// 	hostname: ‘主机名，不包含端口’
// 	port: ‘端口号’,
// 	pathname: ‘服务器上访问资源的路径/开头’,
// 	search: ‘?开头的查询参数’,
// 	hash: ‘#开头的哈希值’
// }

// function parseUrl(url) {
//     if (typeof window == 'undefined') {
//         //node环境
//         const URL = require('url');
//         return URL.parse(url);
//     }
    //   else {
    //     //浏览器环境
    //     //利用a标签，当然只用于有dom的执行环境
    //     var link = document.createElement("a");
    //     link.href = url;
    //     return {
    //       href: link.href,
    //       origin: link.origin,
    //       protocol: link.protocol,
    //       host: link.host,
    //       hostname: link.hostname,
    //       port: link.port,
    //       port: link.pathname,
    //       search: link.search,
    //       hash: link.hash
    //     }
    //   }
// }
// var url = 'https://list.jd.com/item.htm?a=1&b=2&c=&d=xxx&e'
// console.log(parseUrl(url));
