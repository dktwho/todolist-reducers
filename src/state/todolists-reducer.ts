import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: TodolistType[], action: AllActionsType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.todolistId)
        }

        case 'ADD-TODOLIST': {
            return [...state, {id: action.payload.todolistId, title: action.payload.title, filter: 'all'}]
        }

        case 'CHANGE-TODOLIST-TITLE' : {
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }

        case 'CHANGE-TODOLIST-FILTER' : {
            return state.map(el => el.id === action.payload.id ? {...el, filter: action.payload.value} : el)
        }

        default: {
            return state
        }
    }
}


export type AllActionsType = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeTodolistFilterACType

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {type: 'REMOVE-TODOLIST', payload: {todolistId}} as const
}

export type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {type: 'ADD-TODOLIST', payload: {title, todolistId: v1()}} as const
}

export type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {type: 'CHANGE-TODOLIST-TITLE', payload: {id, title}} as const
}

export type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
export const changeTodolistFilterAC = (id: string, value: FilterValuesType) => {
    return {type: 'CHANGE-TODOLIST-FILTER', payload: {id, value}} as const
}