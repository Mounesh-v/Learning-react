import React from 'react'
import Ingov from '../Ingov'

const MainContext = () => {
    const money = 100000;
  return (
    <div>
        <Ingov money={money} />
    </div>
  )
}

export default MainContext