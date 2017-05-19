import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './containers/Home/Home'
import RepositoryDetail from './containers/RepoDetail/RepoDetail'
import NotFound from './containers/NotFound/NotFound'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repo/:owner/:repoName" component={RepositoryDetail} />
    <Route path='*' component={NotFound} status={404} />
  </Route>
)