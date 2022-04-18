import { useSelector, useDispatch } from "react-redux"
import { deleteComment, updateCreatedAtMsg } from './../actions/actions'

const DeleteAlert = () => {
  const deleteCommentId = useSelector(state => state.commentReducer.controls.deleteCommentId)
  const dispatch = useDispatch()
  const handleCancel = () => {
    dispatch(deleteComment(-1))
    dispatch(updateCreatedAtMsg())
  }
  const handleYes = () => {
    dispatch(deleteComment(deleteCommentId))
    dispatch(updateCreatedAtMsg())
  }
  return (
    <div className='delete-alert'>
      <div className='bg-alert' style={{ display: deleteCommentId > -1 ? 'grid' : 'none'}}>
        <div>
          <div className='title'>
            Delete Comment
          </div>
          <div className='message'>
            Are you sure you want to delete this comment? This will remove the comment and can't be undone.
          </div>
          <div className='response'>
            <button onClick={handleCancel} >NO, CANCEL</button>
            <button onClick={handleYes}>YES, DELETE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteAlert