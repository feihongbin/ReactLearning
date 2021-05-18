import React from "react";

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
        "这是一个textarea 这句话就是传统textarea的value值，通过state来配置",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("提交的textarea：" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}
export default EssayForm;
