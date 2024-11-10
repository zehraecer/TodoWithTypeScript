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
    <div className='flex flex-col justify-center items-center min-h-screen w-full'>
      <div className=''>
        <NewTodo />
      </div>
      <div className='flex flex-col  mt-10 '>
        <Todos />
      </div>
    </div>
  )
}

export default App
