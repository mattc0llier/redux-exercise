function search(state = {
    searchTerm: ''
}, action){
  switch (action.type) {

    case 'UPDATE_SEARCH_TERM':
    const searchTermUpdated = Object.assign({}, state, {
      searchTerm: action.searchTerm
    });
    return searchTermUpdated;

    default:
      return state
  }
}

export default search;
