import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTodo, updateTodo } from "../redux/counterSlice";

export const Todos: React.FC = () => {

    const todolar = useSelector((state: RootState) => state.counter.todos)
    const dispatch = useDispatch()
    console.log(todolar);

    const DeleteBtn = (id: number) => {
        dispatch(deleteTodo(id))
    }

    const UpdateBtn = (id: number) => {
        dispatch(updateTodo(id))
    }
    return (
        <>
            {todolar.map(todo => (
                <div key={todo.id}>{todo.title} - <span onClick={() => DeleteBtn(todo.id)}>Sil</span> - <span onClick={() => UpdateBtn(todo.id)}>Düzenle</span></div>
            ))}
        </>
    )
}