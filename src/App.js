import React from 'react';
import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import State from "./pages/State/State";
import Form from "./pages/Form/Form";
import Reduce from "./pages/Reduce/Reduce";
import Ref from "./pages/Ref/Ref";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className='page-container'>
            <NavBar/>
            {/*<div className="test">*/}
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/state' element={<State/>}/>
                    <Route path='/form' element={<Form/>}/>
                    <Route path='/reduce' element={<Reduce/>}/>
                    <Route path='/ref' element={<Ref/>}/>
                </Routes>
            {/*</div>*/}
        </div>
    );
}

export default App;
