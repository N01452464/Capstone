import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import QnA from '../pages/QnA';
import Footer from '../components/Footer/Footer';
const Routers = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/qna' element={<QnA/>}/>
        </Routes>
        
    )
}

export default Routers;