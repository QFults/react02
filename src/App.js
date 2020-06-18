import React, { Component } from 'react'

class App extends Component {

  state = {
    count: 0,
    name: '',
    dispName: ''
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  handleSubmitName = event => {
    event.preventDefault()
    this.setState({ dispName: this.state.name, name: '' })
  }

  handleInputChange = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <>
        <h1>Name: {this.state.dispName}</h1>
        <form>
          <p>
            <label htmlFor="name">name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={this.handleInputChange}
              value={this.state.name} />
          </p>
          <button onClick={this.handleSubmitName}>Submit Name</button>
        </form>
        <hr/>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </>
    )
  }
}

export default App
