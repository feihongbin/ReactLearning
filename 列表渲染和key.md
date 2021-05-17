### 列表组件

```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => {
    <li key={number.toString()}>{number}</li>; // 必须设置key
  });
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

> 这个过程和 map 函数完全一样，最后只不过多了个渲染过程

### key

- key 是用来识别元素的，和 vue 中的 key 类似，在 react 中可以用来表示哪些元素改变了，比如被添加或删除，这个 key 要求是在列表中一个独一无二的字符串，通常可以用数据的 id 来作为 key，也可以用索引来当作 key

### key 的错误使用方式

```js
function ListItem(props) {
  const value = props.value;
  return (
    // 错误！你不需要在这里指定 key：
    <li key={value.toString()}>{value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // 错误！元素的 key 应该在这里指定：
    <ListItem value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

### key 的正确使用方式

```js
function ListItem(props) {
  // 正确！这里不需要指定 key：
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // 正确！key 应该在数组的上下文中被指定
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```
### 使用map嵌入
- 不使用map嵌入
```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    // 这里没有使用map嵌入
    <ul>
      {listItems}
    </ul>
  );
}
```
- 使用map嵌入
```js
function NumberList(props) {
  const numbers = props.numbers;
  return (
    // 使用map嵌入直接在ul里使用map
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```