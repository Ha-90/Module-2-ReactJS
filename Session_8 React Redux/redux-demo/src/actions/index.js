import { ACT_DOWN_TYPE, ACT_UP_TYPE, ACT_RANDOM_TYPE } from "../constants/actionType"

// định nghĩa các action
export const act_up = (value)=>{
    return {
        type: ACT_UP_TYPE,
        payload: value
    }
}
export const act_down = (value)=>{
    return {
        type: ACT_DOWN_TYPE,
        payload: value
    }
}
export const act_random = ()=>{
    return {
        type: ACT_RANDOM_TYPE
    }
}