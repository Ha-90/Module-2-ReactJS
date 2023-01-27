import React, {useState, useCallback} from 'react';
import Callback from './Callback'

export default function ExUseCallBack() {
    const [count, setCount] = useState(0);
    const handleUp = useCallback(()=>{
        // cập nhật state count
        setCount(preCount => preCount + 1);
    },[]);
  return (
    <div>
        <h2>React Hooks - useCallback(callback, [])</h2>
        <Callback handleUp={handleUp}></Callback>
        <p>Current value: {count}</p>
    </div>
  )
}
