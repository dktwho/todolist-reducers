import {TodolistType} from "../App";
import {v1} from "uuid";

export  const todolistsReducer = (state: TodolistType[], action: AllActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.id)
        }

        case 'ADD-TODOLIST': {
            return [...state, {id: v1(), title: action.payload.title, filter: 'all'}]
        }

        default: {
            return state
        }
    }
}


type AllActionsType = removeTodolistACType | addTodolistACType
type removeTodolistACType = ReturnType<typeof removeTodolistAC >
export const removeTodolistAC = (id: string) => {
    return {type: 'REMOVE-TODOLIST', payload: {id} } as const
}

export type addTodolistACType = ReturnType<typeof addTodolistAC >
export const addTodolistAC = (title: string) => {
    return {type: 'ADD-TODOLIST', payload: {title} } as const
}