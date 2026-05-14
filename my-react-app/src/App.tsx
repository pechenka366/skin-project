import './App.scss'
import Test from './test'
import Button from '../components/button'
import img from './assets/hero.png'
import { useState } from 'react';

function App1() {
  const [age, setAge] = useState(20);

  return (
    <>
      <img src={img} width='100'/>
      <h1>Привет <span>как дела</span></h1>
      <Test age={age}/>
      <Button setAge={setAge}/>
    </>
  )
}

export default App1