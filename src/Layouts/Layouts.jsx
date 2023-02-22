import React from 'react'
import NavBar from  '../componentes/Navbar/NavBar'
import Footer from '../componentes/Footer/Footer'



export default function Layouts(props) {
    return (
    <div className='body'>
        <NavBar />
            {props.children}
        <Footer />
    </div>
    )
}
