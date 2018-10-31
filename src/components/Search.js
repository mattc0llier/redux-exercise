import React from 'react'

function Search ({handleChange, handleSubmit, searchTerm}){

//
// function handleChange(event){
//   handleSearchTerm(event.target.value)
// }
//


    return(
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
      </form>
    )

}

export default Search
