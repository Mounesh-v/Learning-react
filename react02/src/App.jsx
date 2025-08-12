import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeImage from './Components/HomeImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeImage/>
    </>
  )
}

export default App
