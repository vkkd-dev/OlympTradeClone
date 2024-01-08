import { ADD_TO_CHART, REMOVE_FROM_CHART, SET_COIN_ID, RESET_COIN_ID } from "./const";

// export function addToCart(item){
//     return {
//         type: ADD_TO_CHART,
//         data: item,
//     }
// }

// export function removeFromCart(item){
//     return {
//         type: REMOVE_FROM_CHART,
//         data: item,
//     }
// }
export function setCoinId(item){
    return {
        type: SET_COIN_ID,
        data: item,
    }
}
