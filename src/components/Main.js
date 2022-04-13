import Comments from './Comments'
import AddComment from './AddComment'
import DeleteAlert from './DeleteAlert'

const Main = () => {
  return (
    <main>
      <Comments />
      <DeleteAlert />
      <AddComment />
    </main>
  )
}

export default Main;