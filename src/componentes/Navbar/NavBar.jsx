import React from 'react'
import './navbar.css'
import AnchorsNavbar from '../AnchorsNavbar/AnchorsNavbar'

export default function NavBar() {
    return (
    <div className='navbar'>
        <img src="./images/Logo Amazing Events.png" alt="logo"></img>
        <div>
            <AnchorsNavbar text='Home' />
            <AnchorsNavbar text='Upcoming Events' />
            <AnchorsNavbar text='Past Events' />
            <AnchorsNavbar text='Contact' />
            <AnchorsNavbar text='Stats' />
        </div>
    </div>
    )
}
