import { ACT_UP_TYPE, ACT_DOWN_TYPE } from "../constants/actionType";
// khởi tạo giá trị init cho state
const initialState = 0;
// taọ count reducer: state, action
// reducer(stare,action) --> return newstate
const count  = (state = initialState, action)=>{
    // dựa vào action.type để cập nhật state
    switch (action.type) {
      case ACT_UP_TYPE:
        state += action.payload;
        return state;
      case ACT_DOWN_TYPE:
        state -= action.payload;
        return state;
    default:
        return state;
    }

}
export default count;