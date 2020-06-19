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
    users: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    let users = JSON.parse(JSON.stringify(this.state.users))

    users.push({
      name: this.state.name,
      movie: this.state.movie,
      song: this.state.song,
      food: this.state.food,
      game: this.state.game
    })

    this.setState({ 
      users,
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
        {
          this.state.users.map(user => <User user={user} />)
        }
      </>
    )
  }
}

export default App
