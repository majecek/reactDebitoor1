import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSearchTerm } from '../../../../reducers/githubReducer'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

class SearchBar extends Component {

  onInputChange = (event) => {
    this.props.setSearchTerm(event.target.value)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.getRepositoryOrderedByStars(this.props.searchTerm)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            id="searchfield"
            hintText="Search for repo"
            value={this.props.searchTerm}
            onChange={this.onInputChange}
          />

          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  getRepositoryOrderedByStars: PropTypes.func
}

function mapStateToProps (state) {
  return {
    searchTerm: state.github.searchTerm
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setSearchTerm
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
