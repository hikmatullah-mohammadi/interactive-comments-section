import Main from './components/Main'
import { Provider } from 'react-redux'
import store from './store'

const MyApp = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default MyApp