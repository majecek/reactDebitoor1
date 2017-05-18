import axios from 'axios'

// ACTION TYPES
const REPOS_ORDERED_BY_STARS = 'REPOS_ORDERED_BY_STARS'
const URL_REPOS_ORDERED_BY_STARS = 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc'
const initialState = {}

// REDUCERS
export default function (state = initialState, action = {}) {
  console.log('type:', action.type)
  switch (action.type) {
    case REPOS_ORDERED_BY_STARS:
      console.log('return1:', action.payload)
      console.log('return:', action.payload.data)
      return {
        ...state,
        repos: action.payload.data,
      }

    default:
      return state
  }
}

// ACTIONS
export function getReposOrderedByStars () {
  const request = axios.get(`${URL_REPOS_ORDERED_BY_STARS}`)

  return {
    type: REPOS_ORDERED_BY_STARS,
    payload: request
  }
}
