import { ADD_TO_CHART, REMOVE_FROM_CHART, SET_COIN_ID } from "./const";

const initialState = ''

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_TO_CHART:
        //     return [
        //         ...state,
        //         action.data
        //     ]
        // case REMOVE_FROM_CHART:
        //     let result = state.filter(item => {
        //         return item != action.data
        //     })
        //     return [...result]
        case SET_COIN_ID:
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}