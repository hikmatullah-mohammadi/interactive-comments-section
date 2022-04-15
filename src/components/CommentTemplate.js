import { useDispatch } from "react-redux"
import { upVote, downVote } from "../actions/actions"

const CommentTemplate = props => {
  const dispatch = useDispatch()
  return (
    <section className='comment-template'>
      <section className="content">
        <img className="avatar" alt="" src={props.items.user.image.png}/>
        <span className="username">{props.items.user.username} {" "}
          {props.items.user.username === props.currentUser.username && <span className='current-user-indicator'>you</span>}
        </span>
        <span className="createdAt">{props.items.createdAt}</span>
        <section className="body" contentEditable={false} onBlurCapture={() => alert("Hello")}>
          {props.items.content}
        </section>
        <button className='btn-update-comment'>Update</button>
      </section>
      
      <div className="voting">
        <button className='up-vote' onClick={() => dispatch(upVote(props.items.id))}><img src="./images/icon-plus.svg" alt="+"/></button>
        <span className='vote-number'>{props.items.score}</span>
        <button className='down-vote' onClick={() => dispatch(downVote(props.items.id))}><img src="./images/icon-minus.svg" alt="-"/></button>
      </div>
      {
        props.items.user.username === props.currentUser.username ?
          <div className='edit-delete-comment'>
            <button className="btn-delete"><img src='./images/icon-delete.svg' alt=''/> Delete</button>
            <button className='btn-edit'><img src='./images/icon-edit.svg' alt=''/> Edit</button>
          </div>
          :
          <button className="reply"><img src="./images/icon-reply.svg" alt=""/>Reply</button>
      }
    </section>
  )
}

export default CommentTemplate