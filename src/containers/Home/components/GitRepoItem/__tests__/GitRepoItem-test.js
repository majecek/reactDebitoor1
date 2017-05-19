import React from 'react'
import renderer from 'react-test-renderer'
import GitRepoItem from '../GitRepoItem'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const theme = getMuiTheme(baseTheme)

describe('GitRepoItem', () => {
  const repo = {
    name: 'foo',
    stargazers_count: 100,
    open_issues_count: 10,
    full_name: 'bar'
  }
  const result = renderer.create(
    <MuiThemeProvider muiTheme={theme}>
      <GitRepoItem repo={repo} />
    </MuiThemeProvider>).toJSON()

  it('should render full html structure correctly', () => {
    expect(result).toMatchSnapshot()
  })
})