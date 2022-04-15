import AddReply from "./AddReply"
import CommentTemplate from "./CommentTemplate"

const Replies = (props) => {
  
  const replies = props.items.map(reply => (
    <div className='comment-reply' key={reply.id}>
      <CommentTemplate items={reply}/>
      <AddReply />
    </div>
  )) 
  return (
    <div className='comment-replies'>
      { replies }
    </div>
  )
}
export default Replies