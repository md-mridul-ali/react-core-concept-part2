// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Counter from './counter'
import Batsman from'./batsman'
import Users from './users'
import './App.css'
import { Suspense } from 'react'
import Friends from './friends'


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())


const fetchFriends = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();//promise ke return korbe
}


function App() {
  // const [count, setCount] = useState(0)

   const friendsPromise = fetchFriends();


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

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
           <Friends  friendsPromise={friendsPromise}></Friends>
      </Suspense>

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
