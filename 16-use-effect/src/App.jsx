import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  useEffect(() => {
    console.log("runing...")

  },[num])
  
  return (
    <div className='container'>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onMouseEnter={(()=>{
        setNum2(num2+10)
      })} onMouseLeave={(()=>{
        setNum(num+1)
      })}>click</button>
    </div>
  )
}

export default App
