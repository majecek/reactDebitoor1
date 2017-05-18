import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import { getRepositoryOrderedByStars } from './../reducers/githubReducer'
import { Link } from 'react-router'
import SearchBar from './SearchBar'

class Overview extends Component {

  componentWillMount () {
    this.props.getRepositoryOrderedByStars()
  }

  render () {
    const {repos} = this.props

    if (!repos) {
      return <div>
        Loading ...
      </div>
    }

    return (
      <div>
        <SearchBar/>
        <Table style={{margin: '10 em', align: 'left'}} >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow selectable={false}>
              <TableHeaderColumn >Name</TableHeaderColumn>
              <TableHeaderColumn >Stars</TableHeaderColumn>
              <TableHeaderColumn >Watchers</TableHeaderColumn>
              <TableHeaderColumn >Open Issues</TableHeaderColumn>
              <TableHeaderColumn >Pull Requests</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover>
            {this.renderRepos()}
          </TableBody>
        </Table>
      </div>
    )
  }

  renderRepos () {
    return this.props.repos.items.map(repo => {
      return (
        <TableRow key={repo.id} selectable={false}>
          <TableRowColumn >{repo.name}</TableRowColumn>
          <TableRowColumn >{repo.stargazers_count}</TableRowColumn>
          <TableRowColumn >{repo.watchers_count}</TableRowColumn>
          <TableRowColumn >{repo.open_issues_count}</TableRowColumn>
          <TableRowColumn ><Link to={'/repo/' + repo.full_name}>Current PRs</Link></TableRowColumn>
        </TableRow>
      )
    })
  }

}

// Overview.propTypes = {}
// Overview.defaultProps = {}

function mapStateToProps (state) {
  return {
    repos: state.github.repos
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getRepositoryOrderedByStars
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)