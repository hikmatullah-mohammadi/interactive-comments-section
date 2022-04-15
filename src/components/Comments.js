import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllComments } from "../actions/actions";
import AddReply from "./AddReply";
import CommentTemplate from "./CommentTemplate";
import Replies from "./Replies";

const Comments = () => {
  const dispatch = useDispatch()
  const comments = useSelector(state => state.commentReducer.comments)
  const currentUser = useSelector(state => state.commentReducer.currentUser)
  
  useEffect(() => {
    dispatch(fetchAllComments())
  }, [dispatch])
  
  const elements = comments.map((comment) => (
    <div className="comment" key={comment.id}> 
      <CommentTemplate items={comment} currentUser={currentUser} />
      <AddReply />
      { comment.replies !== [] && <Replies items={comment.replies} currentUser={currentUser} /> }
    </div>
  ));
  return (
    <div className="comments">
      { elements }
    </div>
  );
};

export default Comments;
