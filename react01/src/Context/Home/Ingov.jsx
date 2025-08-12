import React from 'react'
import StateGov from './StateGov'

const Ingov = ({money}) => {
  return (
    <div>
      <h1>This is indian Gov Component</h1>
      <StateGov money={money}/>
    </div>
  )
}

export default Ingov