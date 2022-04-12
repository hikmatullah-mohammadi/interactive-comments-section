const AddComment = () => {
  return (
    <div className='add-comment'>
      <textarea placeholder="Add a comment...">
      </textarea>
      <div>
        <img className='avatar' src="./images/avatars/image-juliusomo.png"/>
        <button className='btn-send-comment'>SEND</button>
      </div>
    </div>
  )
}

export default AddComment