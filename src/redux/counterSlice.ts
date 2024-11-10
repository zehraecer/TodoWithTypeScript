import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface TodosType {
    id: number,
    title: string,
    isClicked: boolean
}
export interface CounterState {
    value: number,
    todos: TodosType[]
}

const initialState: CounterState = {
    value: 28,
    todos: [
        {
            id: 1,
            title: "İş bulunacak",
            isClicked: false
        },
        {
            id: 2,
            title: "Evlen",
            isClicked: false
        },
        {
            id: 3,
            title: "Saygınlık",
            isClicked: false
        }
    ]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: TodosType = {
                id: state.todos.length + 1,
                title: action.payload,
                isClicked: false
            }
            state.todos.push(newTodo)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            const newTodo = state.todos.filter(todo => todo.id !== action.payload)
            if (newTodo) {
                state.todos = newTodo
            }
        },
        updateTodo: (state, action: PayloadAction<number>) => {

            const newTip = prompt("ne ile değiştirmek isteresiniz") || ""
            state.todos.find(todo => {
                if (todo.id === action.payload) {
                    todo.title = newTip
                }

            })
        },
        completedTodo: (state, action: PayloadAction<number>) => {
            state.todos.find(todo => {
                if (todo.id === action.payload) {
                    if (todo.isClicked === false) {

                        todo.isClicked = true
                    } else {
                        todo.isClicked = false
                    }
                }

            })

        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addTodo, deleteTodo, updateTodo, completedTodo } = counterSlice.actions

export default counterSlice.reducer