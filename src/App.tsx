import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { NewTodo } from './components/newTodo'
import { Todos } from './components/todos'
import { RootState } from './redux/store'
import { increment, incrementByAmount } from './redux/counterSlice'

function App() {

  const count = useSelector((state: RootState) => state.counter.value)
  const todolar = useSelector((state: RootState) => state.counter.todos)
  console.log(todolar);

  const dispatch = useDispatch()
  console.log(count);
  console.log(dispatch);
  return (
    <>
      <NewTodo />
      <Todos />
      <button aria-label="Increment value"
        onClick={() => dispatch(increment())}>artır</button>
      <span>{count}</span>
      <button aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount(8))}>eksilt</button>
    </>
  )
}

export default App
