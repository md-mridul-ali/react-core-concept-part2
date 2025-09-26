/**
 * 
 * components
 * jsx
 * state
 * events
 * [conditional rendering]
 * 
 * 
 */

/**
 * 
 * 1.Api: url:https://jsonplaceholder.typicode.com/users
 * 
 * 
 */
/**
 * 
 * 1.just write simple fetch with json conversion
 * 2.wrap the data loading component under suspense
 * 
 */
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data))

// const loadData = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = res.json();
//     return data;
// }


/***
 * 
 * total summary 
 * *******************
 * 1.event trigger
 * 2.state
 * 3.data load from API
 * 4.loop through to display data
 * why we use key prop
 * 5.use
 * 6.useEffect
 * 7.useState
 * 8.props
 * 
 * 
 */