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
    case actionTypes.UP_VOTE:
      return {
          ...state,
          comments: state.comments.map(item => 
            item.id === action.payload.id ? {...item, score: item.score + 1 } :
            {...item, replies: item.replies.map(reply => reply.id === action.payload.id ? {...reply, score: reply.score + 1 } : reply)}
          )
      }
    case actionTypes.DOWN_VOTE:
      return {
        ...state,
        comments: state.comments.map(item => 
          item.id === action.payload.id ? {...item, score: item.score - 1 } : 
          item.id < action.payload.id ? 
            {...item, replies: item.replies.map(reply => reply.id === action.payload.id ? {...reply, score: reply.score - 1 } : reply)}
            :
            item
        )
    }
    default:
      return state
  }
}

export default commentReducer