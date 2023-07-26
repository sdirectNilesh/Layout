import React from 'react'
import { useContext } from 'react';
import { AdminContext } from './Context';


const Component2 = () => {
  const value = useContext(AdminContext);  

  return <span>Your Name is {value}</span>;
}

export default Component2