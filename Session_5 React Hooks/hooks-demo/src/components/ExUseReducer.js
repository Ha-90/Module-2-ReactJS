import React, { useReducer } from 'react'
// 1. khởi tạo reducer: state cũ cần thay đổi, action để thay đổi state
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const reducer = (state, action)=>{
    switch(action){
        case UP_ACTION:
            return state+1;
        case DOWN_ACTION:
            return state-1;
        default:
            return new Error("Action invalid");
    }
}
export default function () {
  // useReducer(reducer, initState): khai báo state và phương thức dispatch để bắn action cập nhật state
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2> React Hooks useReducer</h2>
      <p>Current value:{count}</p>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
}
