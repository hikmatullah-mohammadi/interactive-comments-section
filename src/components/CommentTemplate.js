import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from './../actions/actions'

const CommentTemplate = props => {
  const dispatch = useDispatch()
  const [voted, setVoted] = useState(false)
  const editCommentId = useSelector(state => state.commentReducer.controls.editCommentId)
  const textarea = useRef()
  const handleUpVote = () => {
    dispatch(actions.upVote(props.item.id))
    dispatch(actions.updateCreatedAtMsg())
    setVoted(true)
  }
  const handleDownVote = () => {
    dispatch(actions.downVote(props.item.id))
    dispatch(actions.updateCreatedAtMsg())
    setVoted(true)
  }
  const handleReplyEntry = () => {
    dispatch(actions.toggleReplyEntry(props.item.id))
    dispatch(actions.updateCreatedAtMsg())
  }
  const handleEditable = () => {
    dispatch(actions.toggleEditable(props.item.id))
    dispatch(actions.updateCreatedAtMsg())
    setTimeout(() => {
      try { // trigger input event to resize the textarea dynamically
        textarea.current.dispatchEvent(new Event('input', {bubbles: true, cancelable: true}))
      } catch(err){}
    },1)
  }
  const handleDelete = () => {
    dispatch(actions.requestForDeletion(props.item.id))
    dispatch(actions.updateCreatedAtMsg())
  }
  const [updatedComment, setUpdatedComment] = useState(props.item.content)
  const handleChangeTextarea = e => {
    setUpdatedComment(e.target.value)
  }
  const handleInput = e => {
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 'px'
  }

  const handleUpdateComment = e => {
    e.preventDefault()
    if (updatedComment.trim() === ''){
      setUpdatedComment('')
      return
    }
    dispatch(actions.updateComment(props.item.id, updatedComment.trim()))
    dispatch(actions.updateCreatedAtMsg())
    dispatch(actions.toggleEditable(props.item.id)) // close the editable entry
  }
  return (
    <div className='comment-template'>
      <div className="content">
        <img className="avatar" alt="avatar" src={props.item.user.image.png}/>
        <span className="username">{props.item.user.username} {" "}
          {props.item.user.username === props.currentUser.username && <span className='current-user-indicator'>you</span>}
        </span>
        <span className="createdAt">{props.item.createdAtMsg}</span>
        <div className="body" >
          {props.isReply && <span className='replying-to' contentEditable={false}>@{props.item.replyingTo} </span>}
          
          { editCommentId === props.item.id ?
            <form onSubmit={handleUpdateComment}>
              <textarea 
                value={editCommentId === props.item.id ? updatedComment : ''}
                onChange={handleChangeTextarea}
                ref={textarea}
                onInput={handleInput}
                required
              >
              </textarea>
              <button className='btn-update-comment' type='submit' title="Click to update">Update</button>
            </form>
            : 
            props.item.content
          }
        </div>
      </div>
      
      <div className="voting" title="Vote">
        <button className='up-vote' onClick={handleUpVote} disabled={voted} title="You can only vote ONCE!">
          <img src="./images/icon-plus.svg" alt="+"/>
        </button>
        <span className='vote-number'>{props.item.score}</span>
        <button className='down-vote' onClick={handleDownVote} disabled={voted} title="You can only vote ONCE!">
          <img src="./images/icon-minus.svg" alt="-"/>
        </button>
      </div>
      {
        props.item.user.username === props.currentUser.username ?
          <div className='edit-delete-comment'>
            <button className="btn-delete" onClick={handleDelete} title="Click to delete">
              <img src='./images/icon-delete.svg' alt=''/> Delete
            </button>
            <button className='btn-edit' onClick={handleEditable} title="Click to edit">
              <img src='./images/icon-edit.svg' alt=''/> Edit
            </button>
          </div>
          :
          <button className="reply" onClick={handleReplyEntry} title="Click to toggle reply entry">
            <img src="./images/icon-reply.svg" alt=""/>Reply
          </button>
      }
    </div>
  )
}

export default CommentTemplate