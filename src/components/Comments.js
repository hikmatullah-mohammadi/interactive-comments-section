import data from "./../data";
import Replies from "./Replies";

const Comments = () => {
  const comments = data.comments.map((comment) => (
    <div className="comment" key={comment.id}> 
      <section className='comment-main'>
        <section className="header">
          <img className="avatar" alt="" src={comment.user.image.png}/>
          <p className="username">{comment.user.username} {" "}
            {comment.user.username === 'juliusomo' && <span className='current-user-indicator'>you</span>}
          </p>
          <p className="createdAt">{comment.createdAt}</p>
        </section>
        <section className="body">
          {comment.content}
        </section>
        <section className="footer">
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
        </section>
      </section> {/* End of comment-main section */}
      { comment.replies !== [] && <Replies items={comment.replies}/> }
    </div>
  ));
  return (
    <div className="Comments">
      { comments }
    </div>
  );
};

export default Comments;