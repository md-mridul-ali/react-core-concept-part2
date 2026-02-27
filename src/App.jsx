

import './App.css'
import Batsman from './batsman';
import Counter from './counter';



function App() {
//normal function
function handleClick (){
  alert('I am clicked');
}

//using arrow function
const handleClick3 = () =>{
  alert('I am click 3')
}

//parameterized arrow function
const handleClick5 = (num) =>{
  const newNum = num + 5;
  alert(newNum)
}

  return (
    <>

      <h3>Vite + React</h3>
      <Counter></Counter>
      <Batsman></Batsman>
       <button onClick={handleClick}>Click Me</button>
       <button onClick={function handleClick2(){
        alert('I am clicked 2')
       }}>Click Me 2</button>
       <button onClick={handleClick3}>Click Me 3</button>
       <button onClick={() => alert('I am click 4')}>Click Me 4</button>
       <button onClick={ () => handleClick5(5)}>Click Me 5</button>
     
    </>
  )
}

export default App
