### JSX 基本使用

```js
//定义一个JSX
const element = <h1>Hello,world!</h1>;
//渲染
ReactDOM.render(element, document.getElementById("root"));
```

### JSX 使用`{}`来嵌入表达式

> 表达式包含任何有效的 js 表达式，如`2+2`,`user.name`以及函数 return 的结果`fn(user)`

```js
const name = "Josh Perez";
const element = <h1>Hello,{name}</h1>;

//渲染
ReactDOM.render(element, document.getElementById("root"));
```

### JSX 实质上是个对象

- 一下两段代码完全等效

```js
    //创建一个JSX
    const element = (
        <h1 className='greeting' data1='23'>
            Hello World!
        </h1>
    )

    //用React.createElement()函数创建
    const element = React.createElement(
        'h1',
        {
            className:'greeting',
            data1:'23'
        }
        'Hello world!'
    )

```

### JSX 的点语法

在 JSX 中，可以直接使用点语法来引用一个 React 组件，如下

```js
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
};

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />; // 这里直接使用MyComponents组件里的DatePicker这个组件
}
```

### 用户定义的组件必须以大写字母开头

小写字母 react 会将其识别成 HTML 标签，因此在定义自定义组件的时候必须要以大写字母开头

- 错误示例

```js
// 错误！组件应该以大写字母开头：
function hello(props) {
  // 正确！这种 <div> 的使用是合法的，因为 div 是一个有效的 HTML 标签
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 错误！React 会认为 <hello /> 是一个 HTML 标签，因为它没有以大写字母开头：
  return <hello toWhat="World" />;
}
```

- 正确示例

```js
// 正确！组件需要以大写字母开头：
function Hello(props) {
  // 正确！ 这种 <div> 的使用是合法的，因为 div 是一个有效的 HTML 标签：
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 正确！React 知道 <Hello /> 是一个组件，因为它是大写字母开头的：
  return <Hello toWhat="World" />;
}
```

### JSX 类型不能是一个表达式

你不能将通用表达式作为 React 元素类型。如果你想通过通用表达式来（动态）决定元素类型，你需要首先将它赋值给大写字母开头的变量

- 例子

```js
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 错误！JSX 类型不能是一个表达式。
  return <components[props.storyType] story={props.story} />;

  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```

### JSX 的子元素

包含在开始和结束标签之间的 JSX 表达式内容将会被视作为特定属性 props.children 传递给外层组件

> JSX 会移除行首尾的空格及其空行，与标签相邻的空行均会被删除，文本之间的空行会被压缩为一个空格

- 字符串作为子元素

```js
<MyComponent>Hello world!</MyComponent> //props.children:Hello world!
```

- js 表达式作为子元素

```js
<MyComponent>{"foo"}</MyComponent>;
// 与 <MyComponent>foo</MyComponent> 等价

const todos = ["finish doc", "submit pr", "nag dan to review"];
return (
  <ul>
    {todos.map((message) => (
      <Item key={message} message={message} />
    ))}
  </ul>
);
```

- 函数作为子元素

```js
<Repeat numTimes={10}>
  {(index) => <div key={index}>This is item {index} in the list</div>}
</Repeat>
```

- 布尔类型、Null、undefined 作为子元素
  false, null, undefined, and true 是合法的子元素。但它们并不会被渲染。要使用它们需要先把它们转换成字符串。
  > 值得注意的是有一些 “falsy” 值，如数字 0，仍然会被 React 渲染。例如，以下代码并不会像你预期那样工作，因为当 props.messages 是空数组时，0 仍然会被渲染
  ```js
  <div>
    {props.messages.length && <MessageList messages={props.messages} />}
  </div>
  ```
  要解决这个问题，确保 && 之前的表达式总是布尔值：
  ```js
  <div>
    {props.messages.length > 0 && <MessageList messages={props.messages} />}
  </div>
  ```
