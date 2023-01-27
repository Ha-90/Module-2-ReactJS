import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

export default function Products() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParam, setSearchParam] = useSearchParams();
    let courseName = searchParam.get('courseName');
    let time = searchParam.get('time');

    let productName = (location.state==null)?"":location.state.productName;
  return (
    <div>
      Products
      <p>Product Name: {productName}</p>
      <h2>List Course - Route</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Java FullStack</td>
            <td>1200</td>
            <td><button onClick={()=>navigate('courseDetails/javafullstack/1200')}>Details</button></td>
          </tr>
          <tr>
            <td>JavaScript FullStack</td>
            <td>1000</td>
            <td><button onClick={()=>navigate('courseDetails/javascriptfullstack/1000')}>Details</button></td>
          </tr>
        </tbody>
      </table>

      <h2>List Course - Search Param</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Java FullStack</td>
            <td>1200</td>
            <td><button onClick={()=> setSearchParam({courseName: 'Java Fullstack', time: 1200})}>Details</button></td>

          </tr>
          <tr>
            <td>JavaScript FullStack</td>
            <td>1000</td>
            <td><button onClick={()=> setSearchParam({courseName: 'JavaScript Fullstack', time: 1000})}>Details</button></td>

          </tr>
        </tbody>
      </table>
        <p>
            courseName: {courseName} - time: {time}
        </p>
    </div>
  );
}
