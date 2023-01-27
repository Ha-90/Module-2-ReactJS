import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
  return (
    <div>
        Home
        {/* useNavigate có tham số chuyển đến trang theo url */}
        <button onClick={()=>navigate('products')}>Go to Products</button>
        {/* useNavigate sử dụng history */}
        <button onClick={()=> navigate(-1)}>Back</button>
        <button onClick={()=>navigate(-2)}>Back 2 pages</button>
        <button onClick={()=> navigate(1)}>Forward</button>
        <button onClick={()=>navigate(2)}>Forward 2 pages</button>
        {/* useNavigate với thuộc tính replace=true */}
        <button onClick={()=> navigate('products', {replace: true})}>Products-Replace</button>
        {/* useNavigate chuyển dữ liệu với state*/}
        <button onClick={()=> navigate('products', {state: {productName: "Java Fullstack"}})}>send productName</button>

    </div>
  )
}
