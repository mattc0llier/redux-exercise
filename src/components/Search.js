import React from 'react'

function Search ({handleChange, handleSubmit, searchTerm, characters}){

//
// function handleChange(event){
//   handleSearchTerm(event.target.value)
// }
//

    return(
    <div>
      <form onSubmit={event => handleSubmit(event, searchTerm)}>
        <input type="text" onChange={handleChange}></input>
        <button type="submit"></button>
      </form>
      {characters.map(character=>{
        <p>{character.name}</p>
      })}
    </div>
)
}

export default Search
