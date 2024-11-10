import { useDispatch, useSelector } from 'react-redux'
import './index.css'
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
      <h1 className="bg-blue-500 text-white p-4">
        Hello world!
      </h1>
    </>
  )
}

export default App
