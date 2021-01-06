import React, { Component } from 'react'

// console.clear();

export class Bomb extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    console.log('componentDidMount()');

    this.interval = setInterval( () => {
      console.log('setInterval');
      if (this.state.count < 8) {
        this.setState({
          count: this.state.count + 1
        })
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.interval)
  }

  render() {
    console.log('render()');
    console.log('count: ' + this.state.count);

    return (
      <div>
        { (this.state.count >= 8 ? <p>BOOM</p> : (this.state.count)%2 ? <p>tock</p> : <p>tick</p>) }
      </div>
    )
  }
}

export default Bomb
