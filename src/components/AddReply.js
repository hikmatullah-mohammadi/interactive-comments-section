import data from './../data'

const AddReply = () => {
  return (
    <div className='add-reply'>
      <textarea placeholder="Write here to reply...">
      </textarea>
      <img className='avatar' src={data.currentUser.image.png} alt=""/>
      <button className='btn-send-reply'>Reply</button>
    </div>
  )
}

export default AddReply