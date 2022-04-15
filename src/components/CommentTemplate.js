import { useState } from "react"
import { useDispatch } from "react-redux"
import { upVote, downVote, toggleReplyEntry } from "../actions/actions"

const CommentTemplate = props => {
  const dispatch = useDispatch()
  const [voted, setVoted] = useState(false)
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
  return (
    <section className='comment-template'>
      <section className="content">
        <img className="avatar" alt="" src={props.item.user.image.png}/>
        <span className="username">{props.item.user.username} {" "}
          {props.item.user.username === props.currentUser.username && <span className='current-user-indicator'>you</span>}
        </span>
        <span className="createdAt">{props.item.createdAt}</span>
        <section className="body" contentEditable={false} onBlurCapture={() => alert("Hello")}>
          {props.isReply && <span className='replying-to'>@{props.item.replyingTo} </span>}
          {props.item.content}
        </section>
        <button className='btn-update-comment'>Update</button>
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
            <button className="btn-delete"><img src='./images/icon-delete.svg' alt=''/> Delete</button>
            <button className='btn-edit'><img src='./images/icon-edit.svg' alt=''/> Edit</button>
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