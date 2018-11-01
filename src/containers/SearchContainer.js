import Search from '../components/Search'
import { connect } from 'react-redux'
import { updateSearchTerm, submitSearch, fetchCharacter } from '../actions'


const mapStateToProps = state =>{
  return{
    searchTerm: state.search.searchTerm,
    characters: state.search.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      dispatch(updateSearchTerm(event.target.value))
    },


    handleSubmit: (event, searchTerm) => {
      event.preventDefault();
      dispatch(fetchCharacter(searchTerm))
    }

  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
