// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Counter from './counter'
import Batsman from'./batsman'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  function handleClick() {
    alert('I am clicked')
  }

  const handleClick3 = () => {
    alert('I am clicked 3')
  }

  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }


  return (
    <>

      <h3>Vite + React</h3>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2() {
        alert('I am clicked 2')
      }}>Click Me 2</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => alert('I am clicked 4')}>Click Me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>

    </>
  )
}

export default App
