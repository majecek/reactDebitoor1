import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import { Link } from 'react-router'

const GitRepoItem = ({ repo }) => (
  <TableRow selectable={false}>
    <TableRowColumn >{repo.name}</TableRowColumn>
    <TableRowColumn >{repo.stargazers_count}</TableRowColumn>
    <TableRowColumn >{repo.stargazers_count}</TableRowColumn>
    <TableRowColumn >{repo.open_issues_count}</TableRowColumn>
    <TableRowColumn ><Link to={'/repo/' + repo.full_name}>Current PRs</Link></TableRowColumn>
  </TableRow>
)

GitRepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default GitRepoItem