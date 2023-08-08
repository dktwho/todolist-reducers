import {TodolistType} from "../App";

export  const todolistsReducer = (state: TodolistType[], action: AllActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}


type AllActionsType = removeTodolistACType
type removeTodolistACType = ReturnType<typeof removeTodolistAC >
export const removeTodolistAC = (id: string) => {
    return {type: 'REMOVE-TODOLIST', payload: {id} } as const
}