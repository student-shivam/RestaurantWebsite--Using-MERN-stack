import React from 'react'
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';

export default function App() {
  return (
   <Router>
    <Routes>
        <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
                <Route path='/success' element={<Success/>}/>
    </Routes>
   </Router>
  )
}
