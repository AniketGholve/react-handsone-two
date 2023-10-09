import { useState } from 'react'
import './App.css'
import FormCompo from './Components/Form'
import ViewData from './Components/ViewData'

function App() {
  let [data,setData]=useState([])
  return (
    <>
      <FormCompo setData={setData}/>
      <hr />
      <ViewData data={data}/>
    </>
  )
}

export default App
