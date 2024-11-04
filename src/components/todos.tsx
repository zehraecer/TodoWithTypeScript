import { useContext } from "react";
import { MyContext } from "../App";

export const Todos: React.FC = () => {

    const { todos } = useContext(MyContext)

    console.log(todos);
    return (
        <>
            {todos.map(todo => (
                <span key={todo.id}>{todo.title}</span>
            ))}
        </>
    )
}