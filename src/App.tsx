import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { NewTodo } from './components/newTodo'
import { Todos } from './components/todos'
import { RootState } from './redux/store'

function App() {

  const count = useSelector((state: RootState) => state.counter.value)


  const dispatch = useDispatch()
  console.log(count);
  console.log(dispatch);
  return (
    <>
      <NewTodo />
      <Todos />
    </>
  )
}

export default App
