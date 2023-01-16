import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoNavbar from './components/TodoNavbar'
import TodoList from './components/TodoList'

import { Provider } from 'react-redux'
import store from './store'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <TodoNavbar />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App
