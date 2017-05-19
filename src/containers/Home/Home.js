import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import { getRepositoryOrderedByStars } from '../../reducers/githubReducer'
import SearchBar from './components/SearchBar/SearchBar'
import GitRepoItem from './components/GitRepoItem/GitRepoItem'

class Home extends Component {

  componentWillMount () {
    this.props.getRepositoryOrderedByStars()
  }

  render () {
    const { repos } = this.props

    if (!repos) {
      return <div>
        Loading ...
      </div>
    }

    return (
      <div>
        <SearchBar
          getRepositoryOrderedByStars={this.props.getRepositoryOrderedByStars}
        />
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
    return this.props.repos.map(repo => <GitRepoItem repo={repo} key={repo.id} />)
  }
}

Home.propTypes = {
  repos: PropTypes.array,
  getRepositoryOrderedByStars: PropTypes.func.isRequired
}
// Home.defaultProps = {}

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)