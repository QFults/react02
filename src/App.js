import React, { Component } from 'react'

class App extends Component {

  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </>
    )
  }
}

export default App
