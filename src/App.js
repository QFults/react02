import React, { Component } from 'react'
import User from './components/User'
import Form from './components/Form'

class App extends Component {

  state = {
    name: '',
    movie: '',
    song: '',
    food: '',
    game: '',
    user: {}
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      user: {
        name: this.state.name,
        movie: this.state.movie,
        song: this.state.song,
        food: this.state.food,
        game: this.state.game
      },
      name: '',
      movie: '',
      song: '',
      food: '',
      game: ''
    })
  }

  render() {
    return (
      <>
        <Form
          name={this.state.name}
          movie={this.state.movie}
          song={this.state.song}
          food={this.state.food}
          game={this.state.game}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} />
        {this.state.user.name ? <User user={this.state.user} /> : null}
      </>
    )
  }
}

export default App
