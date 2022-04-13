import data from './../data'

const AddComment = () => {
  return (
    <div className='add-comment'>
      <textarea placeholder="Add a comment...">
      </textarea>
      <div>
        <img className='avatar' src={data.currentUser.image.png}/>
        <button className='btn-send-comment'>SEND</button>
      </div>
    </div>
  )
}

export default AddComment