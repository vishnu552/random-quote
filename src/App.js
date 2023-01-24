import { useEffect, useState } from 'react';
import './App.css';

 
function App() {
    const [quota,setQuota] = useState();
    const [author,setAuthor] = useState();
    function fetchData(){
      fetch("https://api.quotable.io/random")
        .then(Response=>Response.json())
        .then(data=>{
          setQuota(data.content)
          setAuthor(data.author)});
    }
   
      useEffect(()=>{
        fetchData()
      },[])


  return (
    <div className="App">
    <div className='quota-container'>
          <h2>Random-Quote</h2>
          <p className='content'>{quota}</p>
          <div className='author-container'>
          <p className='author'>-{author}</p>
          </div>
          <div className='underline'></div>
         <div className='btn-container'>
      <button onClick={ fetchData} className='btn'>New Quote</button>
      </div> 
    </div>
    </div>
  );
}

export default App;
