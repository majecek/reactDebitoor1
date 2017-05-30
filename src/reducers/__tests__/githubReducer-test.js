import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../githubReducer'
import reducer from '../githubReducer'
import nock from 'nock'
import expect from 'expect'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('github reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        repos: [],
        searchTerm: ''
      }
    )
  })

})

describe('github actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should get top repos', () => {
    nock('https://api.github.com/')
      .get('/search/repositories?q=stars:%3E1&sort=stars&order=desc')
      .reply(200, { payload: { data: [ 'items']}})

    const expectedActions = [
      { type: 'LOAD_REPOS_ORDERED_BY_STARS', payload: { data: [ 'items']} }
    ]
    const store = mockStore({ repos: []})
    console.log('store', store.dispatch)
    return store.dispatch(actions.getRepositoryOrderedByStars('fastify'))
  })
})
