import React, { Component } from 'react'

export class RouletteGun extends Component {

  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false
  }

  componentWillUnmount() {
    clearTimeout(this.countDown);
  }

  pullTheTrigger = () => {
    this.setState({
      spinningTheChamber: true
    })
    this.countDown = setTimeout( () => {
      const newChamber = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: newChamber,
        spinningTheChamber: false
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        <button onClick={this.pullTheTrigger}>pull the trigger ...if you dare!</button>
          {this.state.spinningTheChamber ? <p>spinning the chamber...</p> : (
            this.props.bulletInChamber === this.state.chamber ? <p>BANG!!!</p> : <p>you're safe!</p>
          )}
      </div>
    )
  }
}

export default RouletteGun
