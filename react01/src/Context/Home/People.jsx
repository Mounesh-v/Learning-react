import React, {useContext} from 'react'
import MoneyContext from '../Context/MoneyContext'

const People = () => {
    // console.log(useContext(MoneyContext))
    const context = useContext(MoneyContext)
  return (
    <div>
        <h1>This is People Component</h1>
        <h2>Total Amount = {context.money}</h2>
        <h1>People = {context.People}</h1>
        <h2>Single Person Amount = {context.SinglePerson}</h2>

    </div>
  )
}

export default People   