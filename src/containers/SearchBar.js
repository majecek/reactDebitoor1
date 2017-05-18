import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRepositoryOrderedByStars } from './../reducers/githubReducer'

class SearchBar extends Component {

  constructor (props) {
    super(props)

    this.state = {term: ''}

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit (event) {
    event.preventDefault()

    this.props.getRepositoryOrderedByStars(this.state.term)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <TextField
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

SearchBar.propTypes = {}
SearchBar.defaultProps = {}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getRepositoryOrderedByStars}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
