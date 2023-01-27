import React from 'react';
import { Outlet } from 'react-router-dom';

export default function About() {
    return (
      // khai báo vị trí component con được hiển thị
      <div>
      About
        <Outlet />
    </div>
  )
}
