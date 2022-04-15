import { useSelector } from 'react-redux'

const AddComment = () => {
  const currentUser = useSelector(state => state.commentReducer.currentUser)

  return (
    <div className='add-comment'>
      <textarea placeholder="Add a comment...">
      </textarea>
      <img className='avatar' src={currentUser.image.png} alt=""/>
      <button className='btn-send-comment'>SEND</button>
    </div>
  )
}

export default AddComment