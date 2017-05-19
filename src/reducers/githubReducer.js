import axios from 'axios'
import C from '../constants'

// ACTION TYPES
const LOAD_REPOS_ORDERED_BY_STARS = 'REPOS_ORDERED_BY_STARS'
const LOAD_REPOS_ORDERED_BY_STARS_FAIL = 'LOAD_REPOS_ORDERED_BY_STARS_FAIL'
const PULL_REQUESTS = 'PULL_REQUESTS'
const PULL_REQUESTS_FAIL = 'PULL_REQUESTS_FAIL'

const initialState = {
  repos: []
}

// REDUCERS
export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_REPOS_ORDERED_BY_STARS:
      return {
        ...state,
        repos: action.payload
      }
    case LOAD_REPOS_ORDERED_BY_STARS_FAIL:
      return {
        ...state,
        error: action.error
      }
    case PULL_REQUESTS:
      return {
        ...state,
        pullRequests: action.payload
      }
    default:
      return state
  }
}

// ACTIONS
export function getRepositoryOrderedByStars (term) {
  const url = term
  ? `${C.URL_REPOS_ORDERED_BY_STARS_PREFIX}${term}?${C.URL_REPOS_ORDERED_BY_STARS_POSTFIX}`
  : `${C.URL_REPOS_ORDERED_BY_STARS_PREFIX}${C.URL_REPOS_ORDERED_BY_STARS_POSTFIX}`
  return dispatch => {
    axios.get(url)
      .then(response => {
        dispatch({
          type: LOAD_REPOS_ORDERED_BY_STARS,
          payload: response.data.items,
          searchTerm: term
        })
      })
      .catch(error => {
        dispatch({
          type: LOAD_REPOS_ORDERED_BY_STARS_FAIL,
          error
        })
      })
  }
}

export function getPullRequests (repoUrl) {
  const url = `${C.URL_PULL_REQUESTS}${repoUrl}/pulls`
  return (dispatch) => {
    axios.get(`${url}`)
      .then(response => {
        dispatch({
          type: PULL_REQUESTS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: PULL_REQUESTS_FAIL,
          error
        })
      })
  }
}
