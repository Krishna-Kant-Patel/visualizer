
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './NavBar/NavBar';
import Dashboard from './components/Graph';
import Relevance from './components/Relevance';
import Likelihood from './components/Likelihood';

function App() {
const [data, setData] = useState();

useEffect(()=>{
  fetch('http://localhost:5000/api/data')
      .then((data) => data.json())
      .then((data) => {

        setData(data);
      })
      .catch((error) => console.log(error))
},[])

  return (
    <div className='.App'>
      
      <Navbar />
      <Dashboard data={data} />
      <Relevance data = {data}/>
      <Likelihood data = {data}/>
    </div>
  );
}

export default App;
