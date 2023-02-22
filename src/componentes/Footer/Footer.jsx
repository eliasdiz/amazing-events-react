import React from 'react'
import './footer.css'
import AnchorsFooter from '../AnchorsFooter/AnchorsFooter'


export default function Footer() {
    return (
    <div className='footer'>
        <div>
            <AnchorsFooter>
                <img src="./images/Instagram logo.png" alt="logoInst"></img>
            </AnchorsFooter>
            <AnchorsFooter>
                <img src="./images/logo facebook.png" alt="logoFace"></img>
            </AnchorsFooter>
            <AnchorsFooter>
                <img src="./images/logo whatsapp.png" alt="logoWhat"></img>
            </AnchorsFooter>
        </div>
        <h4>Cohort 43-Elias Jimenez</h4>
    </div>
    )
}
