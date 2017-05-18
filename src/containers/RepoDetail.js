import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPullRequests } from './../reducers/githubReducer'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

class RepoDetail extends Component {

  componentWillMount () {
    const repoName = `${this.props.params.owner}/${this.props.params.repoId}`
    this.props.getPullRequests(repoName)
  }

  render () {
    const { pullRequests } = this.props

    if (!pullRequests) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Pull Requests</h3>
        <button onClick={browserHistory.goBack}>Back</button>
        <Table style={{margin: '10 em', align: 'left'}} onCellClick={this.onRowSelection}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow selectable={false}>
              <TableHeaderColumn >Author</TableHeaderColumn>
              <TableHeaderColumn >Name</TableHeaderColumn>
              <TableHeaderColumn >ID</TableHeaderColumn>
              <TableHeaderColumn >State</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover>
            {this.renderPullRequests()}
          </TableBody>
        </Table>
      </div>
    )
  }

  renderPullRequests () {
    return this.props.pullRequests.slice(0, 10).map((pullRequest, i) => {
      console.log(i,pullRequest)
      return (
        <TableRow key={pullRequest.id} selectable={false}>
          <TableRowColumn >{pullRequest.user.login}</TableRowColumn>
          <TableRowColumn >{pullRequest.title}</TableRowColumn>
          <TableRowColumn >{pullRequest.id}</TableRowColumn>
          <TableRowColumn >{pullRequest.state}</TableRowColumn>
        </TableRow>
      )
    })
  }
}

RepoDetail.propTypes = {}
RepoDetail.defaultProps = {}

function mapStateToProps (state) {
  return {
    pullRequests: state.github.pullRequests
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getPullRequests
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail)
