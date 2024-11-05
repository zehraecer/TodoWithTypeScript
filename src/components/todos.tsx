import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { completedTodo, deleteTodo, updateTodo } from "../redux/counterSlice";

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
    const ComletedBtn = (id: number) => {
        dispatch(completedTodo(id))
    }

    return (
        <>
            {todolar.map(todo => (
                <div key={todo.id}>  <span className={`${todo.isClicked ? "tamamlandı" : "tamamlanmadı"}`}  >{todo.title} </span> - <span onClick={() => DeleteBtn(todo.id)}>Sil</span> - <span onClick={() => UpdateBtn(todo.id)}>Düzenle</span>
                    <span onClick={() => ComletedBtn(todo.id)} >tamamlandı</span>
                </div>
            ))}
        </>
    )
}