class Test extends React.Component {
  constructor(...args) {
    super(...args);
    this.state={
      value:''
    };
  }
  fn(){
    this.setState({
      value:this.refs['txt'].value
    });
  }
  render(){
    return (
      <div>
        <input ref="txt" type="text" onChange={this.fn.bind(this)}/>
        <span>{this.state.value}</span>
      </div>
    );
  }
}
