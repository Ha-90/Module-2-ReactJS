import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product() {
  const navigate = useNavigate();
  const [listProduct, setListProduct] = useState([
    {id: 1, title: "sp 1"},
    {id: 2, title: "sp 2"}
  ]);
  const elementListProduct = listProduct.map((Product, index)=>{
    return (
      <div key={index}>
      <div>{Product.id}</div>
      <div>{Product.title}</div>
      <div>
        <button onClick={()=>navigate({pathName: "/detailProduct", search:`?id=${Product.id}`})}>Chi tiết sp
        </button>
      </div>
      </div>
    );
  });
  return <div>{elementListProduct}</div>
}

