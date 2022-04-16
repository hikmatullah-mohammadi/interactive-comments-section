import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { upVote, downVote, toggleReplyEntry, toggleEditable, requestForDeletion, updateComment } from "../actions/actions"

const CommentTemplate = props => {
  const dispatch = useDispatch()
  const [voted, setVoted] = useState(false)
  const editCommentId = useSelector(state => state.commentReducer.controls.editCommentId)
  const textarea = useRef()
  const handleUpVote = () => {
    dispatch(upVote(props.item.id))
    setVoted(true)
  }
  const handleDownVote = () => {
    dispatch(downVote(props.item.id))
    setVoted(true)
  }
  const handleReplyEntry = () => {
    dispatch(toggleReplyEntry(props.item.id))
  }
  const handleEditable = () => {
    dispatch(toggleEditable(props.item.id))
    setTimeout(() => {
      try { // trigger input event to resize the textarea dynamically
        textarea.current.dispatchEvent(new Event('input', {bubbles: true, cancelable: true}))
      } catch(err){}
    },1)
  }
  const handleDelete = () => {
    dispatch(requestForDeletion(props.item.id))
  }
  const [updatedComment, setUpdatedComment] = useState(props.item.content)
  const handleChangeTextarea = e => {
    setUpdatedComment(e.target.value)
  }
  const handleInput = e => {
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 'px'
  }

  const handleUpdateComment = () => {
    dispatch(updateComment(props.item.id, updatedComment))
    dispatch(toggleEditable(props.item.id)) // close the editable entry
  }
  return (
    <section className='comment-template'>
      <section className="content">
        <img className="avatar" alt="" src={props.item.user.image.png}/>
        <span className="username">{props.item.user.username} {" "}
          {props.item.user.username === props.currentUser.username && <span className='current-user-indicator'>you</span>}
        </span>
        <span className="createdAt">{props.item.createdAt}</span>
        <section className="body" >
          {props.isReply && <span className='replying-to' contentEditable={false}>@{props.item.replyingTo} </span>}
          
          { editCommentId === props.item.id ?
            <textarea 
              value={editCommentId === props.item.id ? updatedComment : ''}
              onChange={handleChangeTextarea}
              ref={textarea}
              onInput={handleInput}
            >
            </textarea>
            : 
            props.item.content
          }
        </section>
        {
          editCommentId === props.item.id &&
          <button className='btn-update-comment' onClick={handleUpdateComment}>Update</button>
        }
      </section>
      
      <div className="voting">
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
            <button className="btn-delete" onClick={handleDelete}>
              <img src='./images/icon-delete.svg' alt=''/> Delete
            </button>
            <button className='btn-edit' onClick={handleEditable}>
              <img src='./images/icon-edit.svg' alt=''/> Edit
            </button>
          </div>
          :
          <button className="reply" onClick={handleReplyEntry}>
            <img src="./images/icon-reply.svg" alt=""/>Reply
          </button>
      }
    </section>
  )
}

export default CommentTemplate