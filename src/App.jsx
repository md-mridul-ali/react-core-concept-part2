

import { Suspense } from 'react';
import './App.css'
import Batsman from './batsman';
import Counter from './counter';
import Users from './users';
import Posts from './posts';
import Albums from './albums';

//fetch dynamic users data using normal fetch 
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


//fetch dynamic posts data using async await and arrow function
const fetchPosts = async() =>{
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     return res.json();
}

//fetch dynamic albums data using async await arrow function
const fetchAlbums = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  return res.json();
}
function App() {

  const postPromise = fetchPosts();

  const albumPromise = fetchAlbums();

  //normal function
  function handleClick() {
    alert('I am clicked');
  }

  //using arrow function
  const handleClick3 = () => {
    alert('I am click 3')
  }

  //parameterized arrow function
  const handleClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>

      <h3>Vite + React</h3>

      <Suspense fallback={<h3>Albums are loading....</h3>}>
         <Albums albumPromise={albumPromise}></Albums>
      </Suspense>

      <Suspense fallback={<h3>Users are loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Posts are loading...</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>

      <Counter></Counter>
      <Batsman></Batsman>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('I am clicked 2')
      }}>Click Me 2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert('I am click 4')}>Click Me 4</button>
      <button onClick={() => handleClick5(5)}>Click Me 5</button>

    </>
  )
}

export default App
