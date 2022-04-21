import { useState } from "react";
import { addReply, toggleReplyEntry, updateCreatedAtMsg } from './../actions/actions'
import { useDispatch, useSelector } from 'react-redux';


const AddReply = props => {
  const dispatch = useDispatch()
  
  const [msg, setMsg] = useState('')
  const lastId = useSelector(state => state.commentReducer.controls.lastId)
  const currentUser = useSelector(state => state.commentReducer.currentUser)

  const handleAddReply = () => {
    if (msg.trim() !== '') {
      dispatch(addReply(lastId+1, props.parentId, msg.trim(), props.comment))
      dispatch(updateCreatedAtMsg())
      setMsg('')
      dispatch(toggleReplyEntry(props.comment.id))
    } else {
      setMsg('')
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
      <img className='avatar' src={currentUser.image.png} alt="avatar"/>
      <button className='btn-send-reply' onClick={handleAddReply} title="Click to send">Reply</button>
    </div>
  )
}

export default AddReply