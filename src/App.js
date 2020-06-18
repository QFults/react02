import React, { Component } from 'react'

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
          <p>
            <label htmlFor="movie">movie</label>
            <input
              type="text"
              name="movie"
              id="movie "
              onChange={this.handleInputChange} 
              value={this.state.movie} />
          </p>
          <p>
            <label htmlFor="song">song</label>
            <input
              type="text"
              name="song"
              id="song"
              onChange={this.handleInputChange}
              value={this.state.song} />
          </p>
          <p>
            <label htmlFor="food">food</label>
            <input
              type="text"
              name="food"
              id="food"
              onChange={this.handleInputChange}
              value={this.state.food} />
          </p>
          <p>
            <label htmlFor="game">game</label>
            <input
              type="text"
              name="game"
              id="game"
              onChange={this.handleInputChange}
              value={this.state.game} />
          </p>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </>
    )
  }
}

export default App
