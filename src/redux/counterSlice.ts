import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface todosType {
    id: number,
    title: string,
    isClicked: boolean
}
export interface CounterState {
    value: number,
    todos: todosType[]
}

const initialState: CounterState = {
    value: 28,
    todos: [
        {
            id: 1,
            title: "saygınlık",
            isClicked: true
        },
        {
            id: 2,
            title: "evlen",
            isClicked: true
        },
        {
            id: 3,
            title: "iş buluncak",
            isClicked: true
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
        deneme: (state) => {
            state.value = 0
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, deneme } = counterSlice.actions

export default counterSlice.reducer