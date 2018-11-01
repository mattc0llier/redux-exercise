function search(state = {
    searchTerm: '',
    characters: []
}, action){
  switch (action.type) {

    case 'UPDATE_SEARCH_TERM':
    const searchTermUpdated = Object.assign({}, state, {
      searchTerm: action.searchTerm
    });
    return searchTermUpdated;

    case 'RECEIVE_CHARACTERS':
    const characterResult = Object.assign ({}, state, {
      characters: action.characters

    })
    return characterResult;

    default:
      return state
  }
}

export default search;
