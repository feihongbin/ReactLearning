### state和props
- props
props是一个从外部传进组件的参数，**单向**地从父组件向子组件传递数据，具有**可读性**和**不变性**,props代表的一个组件的**外部参数**
- state
state表示的是组件的**数据状态**，在组件初始化时我们需要为state赋初值，`constructor`是唯一能够初始化的地方，state不同于props，它可以修改。它主要是用来组件保存、控制以及修改自己的状态，是组件的**私有属性**，有state的叫做有状态组件，没有state的叫做无状态组件

### 初始化state
要在class中的constructor中初始化，构造函数是唯一能给state赋值的地方
```js
    class Clock extends React.Component{
        constructor (props){
            super(props);
            this.state = {date:new Date()};
        }
    }
```
### 修改state
**不能直接修改state 不能直接修改state 不能直接修改state**
- 使用this.setState来修改state的值
```js   
    class ItemList extends React.Component{
        constructor(){
            super();
            this.state = {
                name:'zhangsan',
                age:23
            }
        }
        componentDidMount(){
            // setState可以传入两个参数，第一个参数是对象，可以修改相应的值，第二个参数是一个函数，当state修改完毕并且组件开始重新渲染是会被调用
            this.setState({age:18,name:'lisi'},fn()); 
        }
    }
```
- 当state的更新是异步的时候，可以传入一个函数来实现state的更新
```js
    // 正确写法 
    this.setState((state,props)=>{
        counter:state.counter + props.increment;
    })

    // 错误写法,可能无法完成更新
    this.setState({
        counter:this.state.counter + this.props.increment,
    })
```
### 传递state
父组件和子组件都无法知道某个组件是有状态的还是五状态，并且也不关心他们是*函数组件*还是*class组件*
- 组件可以选择把它的state作为props向下传递到它的子组件中
```js
<FormattedDate date={this.state.date} />
```
