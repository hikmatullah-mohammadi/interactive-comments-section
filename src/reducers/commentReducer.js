import * as actionTypes from './../actions/types'

const initialState = {
  currentUser: {
    image: {
      png: '',
      webp: ''
    },
    username: ''
  },
  comments: [
    {
      id:'',
      content: '',
      createdAt: '',
      score: '',
      user: {
        image: {
          png: '',
          webp: ''
        },
        username: ''
      },
      replies: []
    }
  ]
}
const commentReducer = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.FETCH_ALL_COMMENTS:
      return { ...action.payload.data }
    default:
      return state
  }
}

export default commentReducer