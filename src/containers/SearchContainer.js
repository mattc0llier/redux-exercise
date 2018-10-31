import Search from '../components/Search'
import { connect } from 'react-redux'
import { updateSearchTerm, submitSearch } from '../actions'


const mapStateToProps = state =>{
  return{
    searchTerm: state.search.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      console.log(event.target.value);
      dispatch(updateSearchTerm(event.target.value))
    },

    handleSubmit: () => dispatch(submitSearch(event.target.value))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
