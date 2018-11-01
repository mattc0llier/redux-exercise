export function updateSearchTerm(searchTerm){
  return{
    type: 'UPDATE_SEARCH_TERM',
    searchTerm: searchTerm
  };
}

export function receiveCharacters(result){
  return {
    type: 'RECEIVE_CHARACTERS',
    characters: result.results
  }
}

export function fetchCharacter(searchTerm){
  return function(dispatch, getState){
    fetch(`https://swapi.co/api/people/?search=${searchTerm}`)
    .then(response => response.json())
    .then(result => {
      console.log(result.results);
      dispatch(receiveCharacters(result))
      dispatch(updateSearchTerm(''))
    })
    .catch(function(error) {
      /// something went wrong let.s sort it out
    })
  }
}
