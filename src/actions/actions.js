import * as actionTypes from './types'

import data from './../data'

export const fetchAllComments = () => ({
  type: actionTypes.FETCH_ALL_COMMENTS,
  payload: {
    data
  }
})

export const upVote = (id) => ({
  type: actionTypes.UP_VOTE,
  payload: {
    id
  }
})
export const downVote = (id) => ({
  type: actionTypes.DOWN_VOTE,
  payload: {
    id
  }
})
