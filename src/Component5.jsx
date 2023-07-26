import React from 'react'
import { useContext } from 'react';
import { SystemContext } from './Context';

const Component5 = () => {
    const value = useContext(SystemContext);  
    return <span>System name is {value}</span>;
}

export default Component5