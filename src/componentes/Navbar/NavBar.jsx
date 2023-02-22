import React from 'react'
import './navbar.css'
import Anchors from './Anchors/Anchors'


export default function NavBar() {
    
    return (
        <div className='navbar'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'></img>
            <div>
                <Anchors text='Home' />    
                <Anchors text='Upcoming Events' />    
                <Anchors text='Past Events' />    
                <Anchors text='Contact' />    
                <Anchors text='Stats' />
            </div>    
        </div>
    )
}
