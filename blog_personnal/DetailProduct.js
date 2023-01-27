import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailProduct() {
    const params = useParams();
  return (
    <div>
        <h2>Product Details</h2>
        <p>id:{params.id}</p>
        <p>title:{params.title}</p>
    </div>
  )
}
