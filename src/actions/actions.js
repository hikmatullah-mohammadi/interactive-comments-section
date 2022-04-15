import * as actionTypes from './types'
import data from './../data'

export const fetchAllComments = () => ({
  type: actionTypes.FETCH_ALL_COMMENTS,
  payload: {
    data
  }
})

export const upVote = id => ({
  type: actionTypes.UP_VOTE,
  payload: {
    id
  }
})
export const downVote = id => ({
  type: actionTypes.DOWN_VOTE,
  payload: {
    id
  }
})

export const toggleReplyEntry = id => ({
  type: actionTypes.TOGGLE_REPLY_ENTRY,
  payload: {
    id
  }
})

export const addReply = (id, parentId=-1, msg, comment) => dispatch => {
  const reply = {
    id: id,
    content: msg,
    createdAt: "2 mintues ago",
    score: 0,
    replyingTo: comment.user.username,
    user: {
        image: { 
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp"
        },
        username: "juliusomo"
    }
  }
  dispatch({
    type: actionTypes.ADD_REPLY,
    payload: {
      id: parentId === -1 ? comment.id : parentId, // see if the user is replying to a comment or to another reply
      reply
    }
  })
}
