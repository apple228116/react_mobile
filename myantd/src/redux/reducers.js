import {INCREMENT,DECREMENT} from './action-types'

export function counter(state=0, action){
    switch(action.type){
        case INCREMENT:
            return state + action.number
        case DECREMENT:
            return state - action.number
        default:
            return state
    }
}