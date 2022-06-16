#### React

```
JS库

完全利用JS自身能力来编写UI，而不是造轮子增强HTML功能（说的就是你，Vue指令）
```

cdn

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

创建项目 

```
npm i react react-dom

npx create-react-app test

npm start
```

index页面

```react
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App
        name="zero"
        age={12}
    />
  </React.StrictMode>
)
```

react基本使用

```react
import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
// 声明式
const el = React.createElement('h1',{title:"asda",'12312'})
const el = <h1>Hello React</h1>
// {}可以放JS表达式，能写到console.log()里边的，都是表达式
// 字面量(+运算符)，函数等是表达式，if等语句不是表达式
// 条件渲染
let temp
if (1) {
    temp = '123445'
} else {
    temp = <h1>1111</h1>
}
const el = <div>{temp}</div>
// 列表渲染
// key优化渲染性能
const songs = ['11', '22', '33']
const el = (
    <div className='box' style={{ color: 'red' }}>
        <ul>
            {songs.map((i, j) => <li key={j}>{i}</li>)}
        </ul>
        {songs.map((i, j) => <p key={j}>{i}</p>)}
    </div>
)
// 编程式
ReactDOM.render(el, document.getElementById('root'))
```

组件、事件、事件对象、状态

```react
import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
// 组件名称得大写

// 函数组件，无状态组件
// 没数据，只能做静态数据展示
const Hello = () => {
    // 绑定事件
    const handleClick = () => console.log(666);
    // return null
    return <h1 onClick={() => console.log(666)}>123 4</h1>
    return <h1 onClick={handleClick}>123 4</h1>
}


// 类组件，有状态组件
class Hello1 extends React.Component {
    state = {
        isLoading: true,
        num: 1,
        text:''
    }
    // 老的状态写法
    // constructor() {
    //     this.state = {
    //         isLoading: true,
    //         num: 1234
    //     }
    // }
    // 绑定事件
    // handleClick() {
    // 推荐这样写，为了找到this
    handleClick = () => {
        // 改变状态，并通知react渲染
        this.setState({
            // 不要直接修改当前状态，应该创建新的状态
            num: this.state.num + 1
        })
    }
    render() {
        // return <h1>1111</h1>
        return (
            // div去掉的话可以写成<></>，相当于vue的template
            <div>
               // 受控组件
                <input type='text' value={this.state.text} onChange={e=>{this.setState({text:e.target.value})
                console.log(this.state.text);}}/>
                <h1>{this.state.num}</h1>
                <button onClick={this.handleClick}>点击</button>
                {/* 事件对象 */}
                <a href='www.baidu.com' onClick={e => e.preventDefault()}>11111</a>
            </div>
        )
    }
}
// 编程式
ReactDOM.render(<Hello1 />, document.getElementById('root'))
// export default App;


// 函数组件优化写法 
export default React.memo(App); memo是memorise的简写
// 类组件优化写法
会检测组件的状态和接收的数据
class Hello extends React.PureComponent {
    
React组件的本质
(state,props)=>UI
```

组件通讯，父向子传值

```react
组件化中，将一个完整功能拆分成了多个组件，多个组件之间不可避免哟啊共享某些数据，
要打破组建的独立封闭，让其与外界沟通

传递、接收

// const Hello = props =>{
// const Hello = ({ name, children }) =>{
//     console.log('props',props);
//     return <h1>{props.name}{props.children}</h1>
// }

class Hello extends React.Component {
    state = {
        Pname: "zero"
    }
    render() {
        return (
            <>
                <h1>{this.props.age}{this.props.children}</h1>
                {/* 父组件传值 */}
                <Child name={this.state.Pname}></Child>
            </>
        )
    }
}

const Child = props => {
    console.log(props);
    return <h1 >子组件接收父组件传的值:{props.name}</h1>
}
ReactDOM.render(
    <Hello
        name='jack'
        age={12}>子节点的内容
    </Hello>
    , document.getElementById('root'))
```

#### Redux

```
Store
Action
Reducers
```

