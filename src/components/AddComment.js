import data from './../data'

const AddComment = () => {
  return (
    <div className='add-comment'>
      <textarea placeholder="Add a comment...">
      </textarea>
      <img className='avatar' src={data.currentUser.image.png}/>
      <button className='btn-send-comment'>SEND</button>
    </div>
  )
}

export default AddComment