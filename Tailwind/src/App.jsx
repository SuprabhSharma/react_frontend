import { useState } from "react";
import './App.css'
import Card from "./components/card";

function App() {
  const [count , setCount] = useState(0)

  return (
    <>
       <h1 className="bg-green-400 text-center text-black p-4 rounded-2xl"> Tailwind </h1>
       <Card  username = "Suprabh" btnText="Hello"/>
       <Card  username= "Harsh" btnText="Hi"/>
    </>
  )
}


export default App