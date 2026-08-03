import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  let [counter,setCounter] = useState(5)
  // let counter = 5

  const addValue = () =>
 { 
  
  setCounter(counter + 1);
  console.log("clicked",counter);
 }
 const removeValue = () =>
  setCounter(counter-1)


  return (
    <>
    <h1> Chai aur React  </h1> 
    <h2> Counter value : {counter}</h2>


    <button
    onClick={addValue}>Add value{counter}</button>
    <br/>
    <button
    onClick={removeValue}>remove value{counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
