const Replies = (props) => {
  
  const replies = props.items.map(reply => (
    <div className='comment-reply' key={reply.id}>
      <section className="header">
        <img className="avatar" alt="" src={reply.user.image.png}/>
        <p className="username">{reply.user.username} {" "}
          {reply.user.username === 'juliusomo' && <span className='current-user-indicator'>you</span>}
        </p>
        <p className="createdAt">{reply.createdAt}</p>
      </section>
      <section className="body">
        <span className="replying-to">{"@"+reply.replyingTo} </span>
        {reply.content}
      </section>
      <section className="footer">
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
      </section>
    </div>
  )) 
  return (
    <div className='comment-replies'>
      { replies }
    </div>
  )
}
export default Replies