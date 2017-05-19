import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.getRepositoryOrderedByStars(this.state.term)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            id="searchfield"
            hintText="Search for repo"
            value={this.state.term}
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

export default SearchBar