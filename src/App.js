import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {


useEffect(() => {
 
   const getAllPosts = async (id) =>{

    try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(res.data)
    } catch(error) {
      console.log(error)

    }
   }

  getAllPosts(1)

}, []);




  return (
    <div className="App">
      <h1>ajax requests</h1>
    </div>
  );
}

export default App;
