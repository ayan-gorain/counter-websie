import { useState} from 'react'

import './App.css'

function App() {

  let [counter,setCounter]= useState(0) 



  const addValue=()=>{
    counter=counter+1
   if(counter>20){
    alert("it cannot go more")
  }
  else{
    setCounter(counter)
  }
   
    console.log("Clicked",counter)
  }

  const deleteValue=()=>{
    counter=counter-1
   if(counter<0){
    alert("it cannot go more in negative")
  }
  else{
    setCounter(counter)
  }
    
  }

  return (
    <>
     <h1>Chai aur react with sir || First project</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}  style={{ marginRight: '10px' }}
     >Add value </button>
     <button onClick={deleteValue}  style={{ marginRight: '10px' }}
     >Remove value </button>

    </>
  )
}

export default App
