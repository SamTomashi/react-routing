import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route, redirect } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';
import Countries from './pages/Countries';
import Country from './pages/Country';
import Login from './pages/Login';
 function App() {

    const [countries, setCountries] = useState([])

    useEffect(()=> {
          fetch('http://localhost:3000/countries')
          .then((response)=> response.json())
          .then(data => {
            setCountries(data)
          })
    }, [])




  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/countries' element={<Countries countries={countries}/>}></Route>
        {/* <Route path='/countries/:id' element={<Country countries={countries}/>}></Route> */}
        <Route path='/countries/:id' element={<Country countries={countries} />}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
 
    </>
  );
}

export default App;
