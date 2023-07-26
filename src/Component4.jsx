import React from 'react'
import Component5 from './Component5'
import { SystemContext } from './Context'


const Component4 = () => {
  const system = "sdd-130";
  return (
    <div>
      <SystemContext.Provider value={system} >
        <Component5 />
      </SystemContext.Provider>
    </div>
  )
}

export default Component4