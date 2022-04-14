import data from "./../data";
import AddReply from "./AddReply";
import Replies from "./Replies";

const Comments = () => {
  const comments = data.comments.map((comment) => (
    <div className="comment" key={comment.id}> 
      <section className='comment-main'>
        <section className="content">
          <img className="avatar" alt="" src={comment.user.image.png}/>
          <span className="username">{comment.user.username} {" "}
            {comment.user.username === 'juliusomo' && <span className='current-user-indicator'>you</span>}
          </span>
          <span className="createdAt">{comment.createdAt}</span>
          <section className="body" contentEditable={true}>
            {comment.content}
          </section>
          <button className='btn-update-comment'>Update</button>
        </section>
        
        <div className="voting">
          <button className='up-vote'><img src="./images/icon-plus.svg" alt="+"/></button>
          <span className='vote-number'>{comment.score}</span>
          <button className='down-vote'><img src="./images/icon-minus.svg" alt="-"/></button>
        </div>
        
        {
          comment.user.username === 'juliusomo' ?
            <div className='edit-delete-comment'>
              <button className="btn-delete"><img src='./images/icon-delete.svg' alt=''/> Delete</button>
              <button className='btn-edit'><img src='./images/icon-edit.svg' alt=''/> Edit</button>
            </div>
            :
            <button className="reply"><img src="./images/icon-reply.svg" alt=""/>Reply</button>
        }
      </section> {/* End of comment-main section */}
      <AddReply />
      { comment.replies !== [] && <Replies items={comment.replies}/> }
    </div>
  ));
  return (
    <div className="comments">
      { comments }
    </div>
  );
};

export default Comments;
