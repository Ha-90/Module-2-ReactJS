import React, { useEffect, useState } from "react";

export default function ExUseState() {
  // Khởi tạo giá trị state với hàm useState
  const [count, setCount] = useState(0);
  const arr = [1, 3, 5, 7, 9];
  const [list, setList] = useState(arr);
  const handleRandom = () => {
    // thêm 1 giá trị random vào list
    // Math.random() * (max - min + 1) + min
    setList([...list, parseInt(Math.random() * 3 + 8)]);
  };
  // khởi tạo state là 1 object
  const [objState, setObjState] = useState({ count: 0, list: arr });
  const handleRandomObject = () => {
    setObjState({
      count: objState.count,
      list: [...objState.list, parseInt(Math.random() * 10)]
    });
  };
  // sử dụng useEffect
  // 1. sd useEffect(callback) -> gọi khi render (componentwillMount) và re-render
  useEffect(() => {
    // console.log("useEffect gọi khi render");
  });
  // 2. sd useEffect(callback,[]) -> được gọi khi render (componentwillMount)
  useEffect(() => {
    // console.log("useEffect(callback,[]) gọi khi render");
  }, []);
  // 3. sd useEffect(callback, [deps]) -> gọi khi render và khi deps thay đổi
  useEffect(() => {
    console.log("useEffect(callback, [count] gọi khi render và thay đổi count");
  }, [count, list]);
  return (
    <div>
      <h2>React Hooks - useState </h2>
      <p>Current value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <p>Current Array: {list.toString()}</p>
      <button onClick={handleRandom}>Random</button>

      <h2>React Hooks - useState object</h2>
      <p>Current value: {objState.count}</p>
      <button onClick={() =>setObjState({ count: objState.count + 1, list: objState.list })}>Up</button>
      <button onClick={() =>setObjState({ count: objState.count - 1, list: objState.list }) }>Down</button>
      <p>Current Array: {objState.list.toString()}</p>
      <button onClick={handleRandomObject}>Random</button>
    </div>
  );
}
