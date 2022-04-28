import { useSelector } from 'react-redux'
import AddReply from "./AddReply"
import CommentTemplate from "./CommentTemplate"


const Replies = props => {

  const replyToCommentId = useSelector(state => state.commentReducer.controls.replyToCommentId)
  
  const comments = useSelector(state => state.commentReducer.comments)
  const replies = comments.filter(item => props.items.indexOf(item.id) > -1)
  const elements = replies.map(item => (
    <div className='comment-reply' key={item.id}>
      <CommentTemplate item={item} currentUser={props.currentUser} isReply={true}/>
      {replyToCommentId === item.id && <AddReply comment={item} parentId={props.parentId}/>}
    </div>
  )) 
  return (
    <div className='comment-replies'>
      { elements }
    </div>
  )
}
export default Replies