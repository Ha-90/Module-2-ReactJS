import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Review() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  console.log(params,params.id==undefined);
  console.log(location.state==null);
  const data = [
    { id: 1, image: "/conan.jpg", name: "conan" },
    { id: 2, image: "/naruto.jpg", name: "naruto" },
    { id: 3, image: "/pokemon.jpg", name: "pokemon" },
  ];

    let elementInfo = params.id==undefined? <p>Noi dung dang trong</p>:
    (data.map((value)=>{
      console.log(value, value.id == params.id);
      if(value.id == params.id){
        return <div>
          <img src={value.image} />
          <p>{value.name}</p>
        </div>
      }
    }))
    console.log(elementInfo);
  return (
    <>
      <h1>Review Page</h1>
      <ul>
        {/* <li><button onClick={() => navigate('', {state: data[0]})}>Conan</button></li> */}
        <li><button onClick={() => navigate('/review/1/conan', {state: data[0]})}>Conan</button></li>
        <li><button onClick={()=>navigate('/review/2/naruto', {state: data[1]})}>Naruto</button></li>
        <li><button onClick={()=>navigate('/review/3/pokemon', {state: data[2]})}>Pokemon</button></li>
      </ul>
      <div>
        {elementInfo}
      </div>
    </>
  );
}
