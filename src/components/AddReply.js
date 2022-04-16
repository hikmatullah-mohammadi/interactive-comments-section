import { useState } from "react";
import { addReply, toggleReplyEntry } from './../actions/actions'
import { useDispatch, useSelector } from 'react-redux';


const AddReply = props => {
  const dispatch = useDispatch()
  
  const [msg, setMsg] = useState('')
  const lastId = useSelector(state => state.commentReducer.controls.lastId)
  const currentUser = useSelector(state => state.commentReducer.currentUser)

  const handleAddReply = () => {
    if (msg !== '') {
      dispatch(addReply(lastId+1, props.parentId, msg, props.comment))
      setMsg('')
      dispatch(toggleReplyEntry(props.comment.id))
    }
  }
  
  return (
    <div className='add-reply'>
      <textarea 
      placeholder="Write here to reply..." 
      onChange={e => setMsg(e.target.value)} 
      value={msg}
      >
      </textarea>
      <img className='avatar' src={currentUser.image.png} alt=""/>
      <button className='btn-send-reply' onClick={handleAddReply}>Reply</button>
    </div>
  )
}

export default AddReply