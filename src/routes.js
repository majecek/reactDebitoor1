import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Overview from './containers/Overview'
import RepositoryDetail from './containers/RepoDetail'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Overview}/>
    <Route path="/repo/:owner/:repoName" component={RepositoryDetail} />
  </Route>
)