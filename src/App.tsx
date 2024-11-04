import { createContext, useState, Dispatch, SetStateAction } from 'react'
import './App.css'
import { NewTodo } from './components/newTodo'
import { Todos } from './components/todos'

interface Todo {
  id: number,
  title: string,
  isClicked: boolean
}

interface ContextType {
  todos: Todo[],
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

export const MyContext = createContext<ContextType>({
  todos: [],
  setTodos: () => { }
})

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([{
    id: 1,
    title: "kitap okumak",
    isClicked: true
  }])

  return (
    <MyContext.Provider value={{ todos, setTodos }}>
      <NewTodo />
      <Todos />
    </MyContext.Provider>
  )
}

export default App
