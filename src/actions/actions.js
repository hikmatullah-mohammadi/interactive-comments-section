import * as actionTypes from './types'

import data from './../data'

export const fetchAllComments = () => ({
  type: actionTypes.FETCH_ALL_COMMENTS,
  payload: {
    data
  }
})