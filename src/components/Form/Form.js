import React from 'react'

const Form = props => {
  return (
    <form>
      <p>
        <label htmlFor="name">name</label>
        <input
            type="text"
            name="name"
            id="name"
            onChange={props.handleInputChange}
            value={props.name} />
      </p>
      <p>
        <label htmlFor="movie">movie</label>
        <input
            type="text"
            name="movie"
            id="movie "
            onChange={props.handleInputChange}
            value={props.movie} />
      </p>
      <p>
        <label htmlFor="song">song</label>
        <input
            type="text"
            name="song"
            id="song"
            onChange={props.handleInputChange}
            value={props.song} />
      </p>
      <p>
        <label htmlFor="food">food</label>
        <input
            type="text"
            name="food"
            id="food"
            onChange={props.handleInputChange}
            value={props.food} />
      </p>
      <p>
        <label htmlFor="game">game</label>
        <input
            type="text"
            name="game"
            id="game"
            onChange={props.handleInputChange}
            value={props.game} />
      </p>
      <button onClick={props.handleSubmit}>Submit</button>
    </form>
  )
}

export default Form
