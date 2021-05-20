### ref

#### 创建 refs

refs 通过`React.createRef()`创建，并通过 ref 属性附加到 React 元素，在构造组件时，通常将 refs 分配给实例属性，方便引用它们。

```js
class RefDemo extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

#### 访问 refs

当 ref 被传递给`render`中的元素时,对该节点的引用可以在 ref 的`current`属性中被访问

```js
const node = this.myRef.current;
```

- 当 ref 属性用于 HTML 元素是，React.createRef()创建的 ref 的 current 属性是底层的 DOM 元素

```js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建ref
    this.textInput = React.createRef();
    this.focusTextInput = this.foucsTextInput.bind(this);
  }
  focusTextInput() {
    this.textInput.current.foucs(); // 这里的this.textInput.current = <input type='text' />
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

- 当 ref 属性用于自定义 class 组件时，ref 对象接受组件的挂载实例作为其 current 属性。

```js
class AutoFocusTextInput extends React.Component{
    constructor(props){
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount(){
        this.textInput.current.focusTextInput();
    }
    render(){
        return (
            // 只有CustomTextInput声明为class时才有效
            <CustomTextInput ref={this.textInput}>
        )
    }
}
```

- **函数组件上不能使用 ref**

### refs 转发

refs 转发允许某些组件接收 ref，并将其向下传递，转发给它的子组件

- 通过**React.forwardRef**来获取传递给它的 ref

```js
const FancyButton = React.forwardRef((props, ref) => {
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>;
});

// 可以直接获取DOM button的ref:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```
