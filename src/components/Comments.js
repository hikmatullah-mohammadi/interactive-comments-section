import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllComments, updateCreatedAtMsg } from "../actions/actions";
import AddReply from "./AddReply";
import CommentTemplate from "./CommentTemplate";
import Replies from "./Replies";

const Comments = () => {
  const dispatch = useDispatch()
  const comments = useSelector(state => state.commentReducer.comments)
  const currentUser = useSelector(state => state.commentReducer.currentUser)
  const replyToCommentId = useSelector(state => state.commentReducer.controls.replyToCommentId)

  useEffect(() => {
    dispatch(fetchAllComments())
    dispatch(updateCreatedAtMsg())
  }, [dispatch])
  
  const elements = comments.map(comment => (
    <div className="comment" key={comment.id}> 
      <CommentTemplate item={comment} currentUser={currentUser} />
      {replyToCommentId === comment.id && <AddReply comment={comment} />}
      { comment.replies !== [] && <Replies items={comment.replies} currentUser={currentUser} parentId={comment.id}/> }
    </div>
  ));
  return (
    <div className="comments">
      { elements }
    </div>
  );
};

export default Comments;
