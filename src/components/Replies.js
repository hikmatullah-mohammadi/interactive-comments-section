import { useSelector } from 'react-redux'
import AddReply from "./AddReply"
import CommentTemplate from "./CommentTemplate"


const Replies = props => {
  const replyToCommentId = useSelector(state => state.commentReducer.controls.replyToCommentId)
  
  const replies = props.items.map(reply => (
    <div className='comment-reply' key={reply.id}>
      <CommentTemplate item={reply} currentUser={props.currentUser} isReply={true}/>
      {replyToCommentId === reply.id && <AddReply comment={reply} parentId={props.parentId}/>}
    </div>
  )) 
  return (
    <div className='comment-replies'>
      { replies }
    </div>
  )
}
export default Replies