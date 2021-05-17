### JSX基本使用
```js 
    //定义一个JSX
    const element = <h1>Hello,world!</h1>;
    //渲染
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
```

### JSX使用`{}`来嵌入表达式
> 表达式包含任何有效的js表达式，如`2+2`,`user.name`以及函数return的结果`fn(user)`

```js
    const name = 'Josh Perez';
    const element = <h1>Hello,{name}</h1>

    //渲染
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
```

### JSX实质上是个对象
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