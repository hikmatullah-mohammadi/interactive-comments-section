import data from "./../data";

const Comments = () => {
  const comments = data.comments.map((comment) => (
    <div className="comment" key={comment.id}>
      <section className="header">
        <img className="avatar" alt="" src={comment.user.image.png}/>
        <p className="username">{comment.user.username}</p>
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
        <button className="reply"><img src="./images/icon-reply.svg" alt=""/>Reply</button>
      </section>
    </div>
  ));
  return (
    <div className="Comments">
      { comments }
    </div>
    // <div className="comment">
    //   <section className="header">
    //     <img
    //       className="avatar"
    //       alt=""
    //       src="./images/avatars/image-amyrobson.png"
    //     />
    //     <p className="username">amyrobson</p>
    //     <p className="createdAt">1 month ago</p>
    //   </section>
    //   <section className="body">
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, us
    //     neque rem veritatis fugiat quas esse deserunt ullam?
    //   </section>
    //   <section className="footer">
    //     <div className="voting">
    //       <button className="up-vote">
    //         <img src="./images/icon-plus.svg" alt="+" />
    //       </button>
    //       <span className="vote-number">12</span>
    //       <button className="down-vote">
    //         <img src="./images/icon-minus.svg" alt="-" />
    //       </button>
    //     </div>
    //     <button className="reply">
    //       <img src="./images/icon-reply.svg" alt="" />
    //       Reply
    //     </button>
    //   </section>
    // </div>
  );
};

export default Comments;
