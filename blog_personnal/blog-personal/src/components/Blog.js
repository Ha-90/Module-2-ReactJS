import React from 'react'
import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        <li><Link to='blogchapter1'>Chapter1</Link></li>
        <li><Link to={'/blog/blogchapter2'}>Chapter2</Link></li>
        <li><Link to={'blogchapter3'}>Chapter3</Link></li>
      </ul>
      <Outlet />
      
    </>
  );
}
