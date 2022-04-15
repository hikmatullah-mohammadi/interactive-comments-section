import data from "./../data";
import AddReply from "./AddReply";
import CommentTemplate from "./CommentTemplate";
import Replies from "./Replies";

const Comments = () => {
  const comments = data.comments.map((comment) => (
    <div className="comment" key={comment.id}> 
      <CommentTemplate items={comment}/>
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
