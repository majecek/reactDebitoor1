import React from 'react'
import renderer from 'react-test-renderer'
import SearchBar from '../SearchBar'
import { getRepositoryOrderedByStars } from '../../../../../reducers/githubReducer'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const theme = getMuiTheme(baseTheme)

describe('SearchBar', () => {
  const result = renderer.create(
    <MuiThemeProvider muiTheme={theme}>
      <SearchBar />
    </MuiThemeProvider>).toJSON()

  it('should render full html structure correctly', () => {
    expect(result).toMatchSnapshot()
  })
})