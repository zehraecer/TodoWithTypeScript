import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/counterSlice"

export const NewTodo = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    const NewTodo = () => {
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue))
            setInputValue("")  // inputu temizler
        }
    }

    return (

        <div className="newTodo">
            <input value={inputValue} type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="yeni todo ekleyin" />
            <button type="submit" onClick={NewTodo}>Todo Ekle</button>
        </div>
    )
}