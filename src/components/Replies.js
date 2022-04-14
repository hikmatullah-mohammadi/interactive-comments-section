import AddReply from "./AddReply"

const Replies = (props) => {
  
  const replies = props.items.map(reply => (
    <div className='comment-reply' key={reply.id}>
      <div className='reply-main'>
        <section className="content">
          <img className="avatar" alt="" src={reply.user.image.png}/>
          <span className="username">{reply.user.username} {" "}
            {reply.user.username === 'juliusomo' && <span className='current-user-indicator'>you</span>}
          </span>
          <span className="createdAt">{reply.createdAt}</span>
          <section className="body" contentEditable={true}>
            {reply.content}
          </section>
          <button className='btn-update-comment'>Update</button>
        </section>

        <div className="voting">
          <button className='up-vote'><img src="./images/icon-plus.svg" alt="+"/></button>
          <span className='vote-number'>{reply.score}</span>
          <button className='down-vote'><img src="./images/icon-minus.svg" alt="-"/></button>
        </div>
        {
        reply.user.username === 'juliusomo' ?
          <div className='edit-delete-comment'>
            <button className="btn-delete"><img src='./images/icon-delete.svg' alt=''/> Delete</button>
            <button className='btn-edit'><img src='./images/icon-edit.svg' alt=''/> Edit</button>
          </div>
          :
          <button className="reply"><img src="./images/icon-reply.svg" alt=""/>Reply</button>
        }
      </div> {/* end of reply-main */}
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