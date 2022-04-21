import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment, updateCreatedAtMsg } from '../actions/actions'

const AddComment = () => {
  const currentUser = useSelector(state => state.commentReducer.currentUser)
  const lastId = useSelector(state => state.commentReducer.controls.lastId)

  const dispatch = useDispatch()
  const [comment, setComment] = useState()
  const handleSubmit = e => {
    e.preventDefault()
    if (comment.trim() === '') {
      setComment('')
      return
    }
    dispatch(addComment(lastId+1, comment.trim(), currentUser))
    dispatch(updateCreatedAtMsg())
    setComment('')
  }
  return (
    <form className='add-comment' onSubmit={handleSubmit}>
      <textarea 
      placeholder="Add a comment..." 
      spellCheck={false} 
      required
      value={comment}
      onChange={e => setComment(e.target.value)}
      >
      </textarea>
      <img className='avatar' src={currentUser.image.png} alt="avatar"/>
      <button className='btn-send-comment' type='submit' title="Click to send">SEND</button>
    </form>
  )
}

export default AddComment