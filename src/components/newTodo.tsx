import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../redux/counterSlice"
import { RootState } from "../redux/store"

export const NewTodo = () => {
    const [inputValue, setInputValue] = useState("")
    const todolar = useSelector((state: RootState) => state.counter.todos)
    const dispatch = useDispatch()

    const NewTodo = () => {
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue))
            setInputValue("")
        }
    }
    console.log(todolar);

    return (
        <div className="flex items-center space-x-3 newTodo w-full max-w-4xl">
            <input
                value={inputValue}
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="yeni todo ekleyin"
                className="w-full md:w-120 p-2 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            />
            <button
                type="submit"
                onClick={NewTodo}
                className="px-5 py-2 text-lg bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 sm:w-auto w-32"
            >
                EKLE
            </button>
        </div>




    )
}