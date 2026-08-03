import { useState } from 'react'
import './App.css'
import Card  from './components/Card'

function App() {
  const[count,setCount] = useState(0)
  let myobj ={
    username:'hitesh',
    age: 22
  }
  let newArr =[1,2,3]
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className=" bg-green-300 text-black rounded-xl px-4 py-2 mb-6">
        Tailwind is Working!
      </h1>
      <Card username="chaiaurcode"/>
      <Card username="Suprabh"/>
    
    </div>
    </>
  )
}

export default App