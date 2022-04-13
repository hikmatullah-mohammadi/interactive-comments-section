const DeleteAlert = () => {
  return (
    <div className='delete-alert'>
      <section className='title'>
        Delete Comment
      </section>
      <section className='message'>
        Are you sure you want to delete this comment? This will remove the comment and can't be undone.
      </section>
      <section className='response'>
        <button>NO, CANCEL</button>
        <button>YES, DELETE</button>
      </section>
    </div>
  )
}

export default DeleteAlert