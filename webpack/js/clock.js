import React from 'react';
class Clock extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      h:'00',
      m:'00',
      s:'00'
    };
    setInterval(()=>{this.tick()},1000);
  }
  componentWillMount() {
    this.tick();
  }
  tick(){
    let oDate = new Date;
    this.setState({
      h:oDate.getHours(),
      m:oDate.getMinutes(),
      s:oDate.getSeconds(),
    });
  }
  render(){
    return (
      <div>
        <span>{this.state.h}</span>:
        <span>{this.state.m}</span>:
        <span>{this.state.s}</span>
      </div>
    );
  }
}

export {Clock as default};
