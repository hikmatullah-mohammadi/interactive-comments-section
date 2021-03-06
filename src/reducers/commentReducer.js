import * as actionTypes from './../actions/types'
import { generateCreatedAtMsg } from './../myUtilityFunctions'

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
      createdAt: {
        y: '',
        m: '',
        d: '',
        h: '',
        min: '',
      },
      createdAtMsg: '',
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
  ],
  controls: {
    lastId: 4,
    replyToCommentId: -1,
    editCommentId: -1,
    deleteCommentId: -1 
  }
}
const commentReducer = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.FETCH_ALL_COMMENTS:
      return { 
        ...state,
        ...action.payload.data
      }
    case actionTypes.UP_VOTE:
      return {
        ...state,
        comments: state.comments.map(item => 
          item.id === action.payload.id ? {...item, score: item.score + 1 } : item
          )
      }
    case actionTypes.DOWN_VOTE:
      return {
        ...state,
        comments: state.comments.map(item => 
          item.id === action.payload.id ? {...item, score: item.score - 1 } : item
          )
      }
    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload.newComment],
        controls: {
          ...state.controls,
          lastId: state.controls.lastId + 1
        }
      }
    case actionTypes.REQUEST_FOR_DELETION:
      return {
        ...state,
        controls: {
          ...state.controls,
          deleteCommentId: action.payload.id
        }
      }
    case actionTypes.DELETE_COMMENT:
      return {
        ...state,
        comments: action.payload.id !== -1 ?
          state.comments.filter(item => (
          item.id !== action.payload.id)
          ).map(item => (
            item.id === action.payload.id && item.replies ?
            {...item, replies: item.replies.filter(item => item !== action.payload.id)} :
            item
            )) 
            : 
            state.comments,
            controls: {
              ...state.controls,
              deleteCommentId: -1
            }
          }
    case actionTypes.TOGGLE_REPLY_ENTRY:
      return {
        ...state,
        controls: {
          ...state.controls,
          replyToCommentId: state.controls.replyToCommentId === action.payload.id ? -1 : action.payload.id
        }
      }
    case actionTypes.ADD_REPLY:
      return {
        ...state,
        comments: [
          ...state.comments.map(item => item.id === action.payload.id ?
            {...item, replies: [...item.replies, action.payload.reply.id] } : item),
            action.payload.reply
        ],
        controls: {
          ...state.controls,
          lastId: state.controls.lastId + 1
        }
      }
    case actionTypes.TOGGLE_EDITABLE:
      return {
        ...state,
        controls: {
          ...state.controls,
          editCommentId: state.controls.editCommentId === action.payload.id ? -1 : action.payload.id
        }
      }
    case actionTypes.UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(item => item.id === action.payload.id ?
          {...item, content: action.payload.updatedComment} : item) 
      }
    case actionTypes.UPDATE_CREATED_AT_MSG:
      return {
        ...state,
        comments: state.comments.map(item => (
          {
            ...item,
            createdAtMsg: generateCreatedAtMsg(item.createdAt)
          }
        ))
      }
    default:
      return state
  }
}

export default commentReducer