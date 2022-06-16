const arr = ['132', 'qwedd', 'q', '2r', 'qwd']
const rtn = arr.map(i => ({ raw: i, len: i.length }))
    .sort((p, n) => n.len - p.len)
    .map(i => i.raw)
console.log(rtn) // [ 'qwedd', '132', 'qwd', '2r', 'q' ]